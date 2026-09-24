import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

import "./Pricing.css";
import { siteConfig } from "../data/site";

type PricingPlan = {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
};

const FREE_OPTIMIZATION_URL =
  "https://www.mediafire.com/file/g1mbridqbrqx6na/otimiza%25C3%25A7%C3%A3o_free.rar/file";

const plans: PricingPlan[] = [
  {
    name: "Free Optimization Pack",
    price: "FREE",
    description:
      "A free starting point for improving your gaming setup.",
    features: [
      "Free optimization resources",
      "Basic performance guidance",
      "Gaming-focused recommendations",
      "Muffin Community access",
    ],
  },
  {
    name: "Sensi",
    price: "₹799",
    description:
      "Fine-tune your input and sensitivity setup for a more consistent experience.",
    features: [
      "Sensitivity configuration",
      "Input settings review",
      "Mouse configuration guidance",
      "Personalized recommendations",
    ],
  },
  {
    name: "Optimization",
    price: "₹999",
    description:
      "A focused system optimization package built around gaming performance.",
    popular: true,
    features: [
      "Windows optimization",
      "Gaming performance tuning",
      "Background process optimization",
      "System responsiveness configuration",
    ],
  },
  {
    name: "Sensi + Optimization",
    price: "₹1,699",
    description:
      "Combine sensitivity tuning with system optimization in one package.",
    features: [
      "Everything in Sensi",
      "Everything in Optimization",
      "Combined setup configuration",
      "Personalized performance adjustments",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__background" />

      <div className="pricing__container">
        {/* =====================================================
            HEADING
        ===================================================== */}

        <motion.div
          className="pricing__heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="pricing__eyebrow">
            SIMPLE PRICING
          </span>

          <h2>
            Choose Your
            <span> Performance.</span>
          </h2>

          <p>
            Choose the service that fits your setup and
            performance goals. No unnecessary complexity.
          </p>
        </motion.div>

        {/* =====================================================
            PRICING CARDS
        ===================================================== */}

        <motion.div
          className="pricing__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
        >
          {plans.map((plan, index) => {
            const isFreePlan =
              plan.price === "FREE";

            const buttonHref = isFreePlan
              ? FREE_OPTIMIZATION_URL
              : siteConfig.discord.inviteUrl;

            return (
              <motion.article
                key={plan.name}
                variants={cardVariants}
                className={`pricing-card ${
                  plan.popular
                    ? "pricing-card--popular"
                    : ""
                }`}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  transition: {
                    duration: 0.22,
                    ease: "easeOut",
                  },
                }}
              >
                {/* Popular badge */}

                {plan.popular && (
                  <motion.div
                    className="pricing-card__badge"
                    initial={{
                      opacity: 0,
                      scale: 0.85,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    transition={{
                      delay: 0.7,
                      duration: 0.4,
                    }}
                  >
                    <Sparkles size={13} />
                    MOST POPULAR
                  </motion.div>
                )}

                {/* Top */}

                <div className="pricing-card__top">
                  <span className="pricing-card__number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <motion.div
                    className="pricing-card__dot"
                    animate={
                      plan.popular
                        ? {
                            opacity: [
                              0.45,
                              1,
                              0.45,
                            ],
                            scale: [
                              0.9,
                              1.15,
                              0.9,
                            ],
                          }
                        : {}
                    }
                    transition={
                      plan.popular
                        ? {
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                        : {}
                    }
                  />
                </div>

                {/* Title */}

                <div className="pricing-card__title">
                  <h3>{plan.name}</h3>

                  <p>{plan.description}</p>
                </div>

                {/* Price */}

                <motion.div
                  className="pricing-card__price"
                  whileHover={{
                    x: 2,
                  }}
                >
                  <span>{plan.price}</span>

                  {plan.price !== "FREE" && (
                    <small>one-time</small>
                  )}
                </motion.div>

                <div className="pricing-card__divider" />

                {/* Features */}

                <div className="pricing-card__features">
                  <span className="pricing-card__features-label">
                    INCLUDED
                  </span>

                  {plan.features.map(
                    (
                      feature,
                      featureIndex
                    ) => (
                      <motion.div
                        className="pricing-card__feature"
                        key={feature}
                        initial={{
                          opacity: 0,
                          x: -8,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay:
                            0.35 +
                            index * 0.12 +
                            featureIndex *
                              0.055,
                          duration: 0.35,
                        }}
                      >
                        <span className="pricing-card__check">
                          <Check
                            size={12}
                            strokeWidth={2.5}
                          />
                        </span>

                        <span>
                          {feature}
                        </span>
                      </motion.div>
                    )
                  )}
                </div>

                {/* =================================================
                    CTA
                ================================================= */}

                <motion.a
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`pricing-card__button ${
                    plan.popular
                      ? "pricing-card__button--primary"
                      : ""
                  }`}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                >
                  {isFreePlan
                    ? "Get Started"
                    : "Choose Plan"}

                  <motion.span
                    whileHover={{
                      x: 3,
                      y: -3,
                    }}
                  >
                    ↗
                  </motion.span>
                </motion.a>
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <motion.div
          className="pricing__note"
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.5,
            delay: 0.25,
          }}
        >
          <span />
          <p>
            Every setup is different. Your optimization is
            built around your system.
          </p>
          <span />
        </motion.div>
      </div>
    </section>
  );
}