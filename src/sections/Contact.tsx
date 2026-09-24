import { useState } from "react";
import type { FormEvent } from "react";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  MessageCircle,
  Monitor,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { siteConfig } from "../data/site";

import "./Contact.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="contact"
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="contact__background" />

      <div className="contact__grid" />

      <div className="contact__ambient contact__ambient--one" />
      <div className="contact__ambient contact__ambient--two" />

      <div className="contact__container">
        {/* =====================================================
            LEFT SIDE
        ===================================================== */}

        <motion.div
          className="contact__content"
          initial={{
            opacity: 0,
            x: -35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.75,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <span className="contact__eyebrow">
            LET'S WORK TOGETHER
          </span>

          <h2 className="contact__title">
            Your setup.
            <span> Our expertise.</span>
          </h2>

          <p className="contact__description">
            Tell us about your PC, the games you
            play, and what you want to improve.
            We'll help you find the right Muffin
            Services package for your setup.
          </p>

          {/* =================================================
              TRUST ITEMS
          ================================================= */}

          <div className="contact__trust">
            <div className="contact__trust-item">
              <div className="contact__trust-icon">
                <Monitor size={17} />
              </div>

              <div>
                <strong>
                  Hardware focused
                </strong>

                <span>
                  Tuned around your setup
                </span>
              </div>
            </div>

            <div className="contact__trust-item">
              <div className="contact__trust-icon">
                <Zap size={17} />
              </div>

              <div>
                <strong>
                  Performance focused
                </strong>

                <span>
                  Gaming-first configuration
                </span>
              </div>
            </div>

            <div className="contact__trust-item">
              <div className="contact__trust-icon">
                <ShieldCheck size={17} />
              </div>

              <div>
                <strong>
                  Straightforward process
                </strong>

                <span>
                  No unnecessary complexity
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              DISCORD CTA
          ================================================= */}

          <motion.a
            href={siteConfig.discord.inviteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__discord"
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.985,
            }}
          >
            <div className="contact__discord-icon">
              <MessageCircle size={19} />
            </div>

            <div className="contact__discord-text">
              <strong>
                Join Muffin Community
              </strong>

              <span>
                Get support directly on Discord
              </span>
            </div>

            <ArrowUpRight
              className="contact__discord-arrow"
              size={19}
            />
          </motion.a>
        </motion.div>

        {/* =====================================================
            RIGHT SIDE — FORM
        ===================================================== */}

        <motion.div
          className="contact__form-card"
          initial={{
            opacity: 0,
            x: 35,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          {!submitted ? (
            <>
              {/* =================================================
                  FORM HEADER
              ================================================= */}

              <div className="contact__form-header">
                <div>
                  <span className="contact__form-label">
                    PERFORMANCE REQUEST
                  </span>

                  <h3>
                    Tell us about your setup.
                  </h3>
                </div>

                <div className="contact__status">
                  <span />
                  OPEN
                </div>
              </div>

              <div className="contact__form-divider" />

              {/* =================================================
                  FORM
              ================================================= */}

              <form
                className="contact__form"
                onSubmit={handleSubmit}
              >
                {/* Name + Discord */}

                <div className="contact__form-row">
                  <label className="contact__field">
                    <span>Name</span>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </label>

                  <label className="contact__field">
                    <span>
                      Discord Username
                    </span>

                    <input
                      type="text"
                      name="discord"
                      placeholder="username"
                      required
                    />
                  </label>
                </div>

                {/* Service */}

                <label className="contact__field">
                  <span>Service</span>

                  <select
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option
                      value=""
                      disabled
                    >
                      Select a service
                    </option>

                    <option value="Gaming Optimization">
                      Gaming Optimization
                    </option>

                    <option value="FPS Boost Package">
                      FPS Boost Package
                    </option>

                    <option value="Windows Optimization">
                      Windows Optimization
                    </option>

                    <option value="Input Delay Reduction">
                      Input Delay Reduction
                    </option>

                    <option value="Streaming Optimization">
                      Streaming Optimization
                    </option>

                    <option value="PC Performance Audit">
                      PC Performance Audit
                    </option>

                    <option value="Custom Performance Package">
                      Custom Performance Package
                    </option>
                  </select>
                </label>

                {/* PC Specs */}

                <label className="contact__field">
                  <span>
                    PC / Laptop Specs
                  </span>

                  <input
                    type="text"
                    name="specs"
                    placeholder="Example: Ryzen 5 5600H / RTX 3050 / 8GB RAM"
                    required
                  />
                </label>

                {/* Problem */}

                <label className="contact__field">
                  <span>
                    What do you want to improve?
                  </span>

                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your FPS, input delay, stutters, recording setup, or anything else..."
                    required
                  />
                </label>

                {/* Submit */}

                <motion.button
                  type="submit"
                  className="contact__submit"
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                >
                  <span>
                    Send Request
                  </span>

                  <Send size={17} />
                </motion.button>
              </form>

              <p className="contact__form-note">
                This form currently prepares your
                request. For direct support and
                service coordination, use Discord.
              </p>
            </>
          ) : (
            /* =================================================
               SUCCESS STATE
            ================================================= */

            <motion.div
              className="contact__success"
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.45,
              }}
            >
              <div className="contact__success-icon">
                <CheckCircle2 size={34} />
              </div>

              <span className="contact__form-label">
                REQUEST PREPARED
              </span>

              <h3>
                You're all set.
              </h3>

              <p>
                Your request has been prepared.
                Join Muffin Community on Discord
                so we can review your setup and
                continue the process.
              </p>

              <motion.a
                href={
                  siteConfig.discord.inviteUrl
                }
                target="_blank"
                rel="noopener noreferrer"
                className="contact__success-button"
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.985,
                }}
              >
                Join Discord
                <ArrowUpRight size={17} />
              </motion.a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}