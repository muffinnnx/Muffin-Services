import { MongoClient } from "mongodb";

declare const process: {
  env: Record<string, string | undefined>;
};

type ContactRequest = {
  name?: string;
  discordUsername?: string;
  service?: string;
  specs?: string;
  issue?: string;
};

type NetlifyEvent = {
  httpMethod?: string;
  body?: string | null;
  isBase64Encoded?: boolean;
};

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

async function getMongoClient(): Promise<MongoClient> {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    throw new Error("MONGODB_URI environment variable is not configured.");
  }

  if (client) {
    return client;
  }

  if (!clientPromise) {
    const newClient = new MongoClient(mongoUri);

    clientPromise = newClient
      .connect()
      .then(() => {
        client = newClient;
        return newClient;
      })
      .catch((error) => {
        // Do not keep a failed MongoClient.
        clientPromise = null;
        client = null;
        throw error;
      });
  }

  return clientPromise;
}

export const handler = async (event: NetlifyEvent) => {
  // Only allow POST requests.
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Method not allowed.",
      }),
    };
  }

  try {
    // Make sure a request body exists.
    if (!event.body) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message: "Request body is missing.",
        }),
      };
    }

    // Decode the body if Netlify marks it as base64 encoded.
    const requestBody = event.isBase64Encoded
      ? Buffer.from(event.body, "base64").toString("utf-8")
      : event.body;

    const data = JSON.parse(requestBody) as ContactRequest;

    const name = data.name?.trim();
    const discordUsername = data.discordUsername?.trim();
    const service = data.service?.trim();
    const specs = data.specs?.trim();
    const issue = data.issue?.trim();

    // Validate all required fields.
    if (
      !name ||
      !discordUsername ||
      !service ||
      !specs ||
      !issue
    ) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          success: false,
          message: "Please complete all fields.",
        }),
      };
    }

    // Connect to MongoDB.
    const mongoClient = await getMongoClient();

    // Database.
    const database = mongoClient.db("MuffinServices");

    // Collection.
    const requests = database.collection("requests");

    // Save the request.
    const result = await requests.insertOne({
      name,
      discordUsername,
      service,
      specs,
      issue,
      status: "new",
      createdAt: new Date(),
    });

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: true,
        message: "Request submitted successfully.",
        requestId: result.insertedId.toString(),
      }),
    };
  } catch (error) {
    console.error("Submit request error:", error);

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        success: false,
        message: "Something went wrong while submitting your request.",
      }),
    };
  }
};