import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

import {
  CollectionSurfer,
  type CollectionItem,
} from "../components/ui/collection-surfer";

import "./Testimonials.css";

/* =========================================================
   FPS PROOF IMAGES
========================================================= */

import fps01 from "../assets/fps-proofs/fps-01.png";
import fps02 from "../assets/fps-proofs/fps-02.png";
import fps03 from "../assets/fps-proofs/fps-03.png";
import fps04 from "../assets/fps-proofs/fps-04.png";
import fps05 from "../assets/fps-proofs/fps-05.png";

/* =========================================================
   TESTIMONIAL IMAGES
========================================================= */

type ImageModule = string;

const testimonialModules =
  import.meta.glob<ImageModule>(
    "../assets/testimonials/*.{png,jpg,jpeg,webp}",
    {
      eager: true,
      query: "?url",
      import: "default",
    }
  );

const testimonialImages =
  Object.values(testimonialModules);

/* =========================================================
   FPS COLLECTION
========================================================= */

const fpsItems: CollectionItem[] = [
  {
    id: 1,
    image: fps01,
    title: "FPS PROOF 01",
  },
  {
    id: 2,
    image: fps02,
    title: "FPS PROOF 02",
  },
  {
    id: 3,
    image: fps03,
    title: "FPS PROOF 03",
  },
  {
    id: 4,
    image: fps04,
    title: "FPS PROOF 04",
  },
  {
    id: 5,
    image: fps05,
    title: "FPS PROOF 05",
  },
];

/* =========================================================
   COMPONENT
========================================================= */

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] =
    useState(0);

  const testimonials = useMemo(
    () =>
      testimonialImages.map(
        (image, index) => ({
          image,
          label: `CLIENT FEEDBACK ${String(
            index + 1
          ).padStart(2, "0")}`,
        })
      ),
    []
  );

  /* =======================================================
     AUTO ROTATE TESTIMONIALS
  ======================================================= */

  useEffect(() => {
    if (testimonials.length <= 1) {
      return;
    }

    const interval =
      window.setInterval(() => {
        setActiveTestimonial(
          (current) =>
            (current + 1) %
            testimonials.length
        );
      }, 5500);

    return () =>
      window.clearInterval(interval);
  }, [testimonials.length]);

  /* =======================================================
     CONTROLS
  ======================================================= */

  const previousTestimonial = () => {
    if (testimonials.length === 0) {
      return;
    }

    setActiveTestimonial(
      (current) =>
        (current -
          1 +
          testimonials.length) %
        testimonials.length
    );
  };

  const nextTestimonial = () => {
    if (testimonials.length === 0) {
      return;
    }

    setActiveTestimonial(
      (current) =>
        (current + 1) %
        testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="testimonials"
    >
      {/* ===================================================
          AMBIENT BACKGROUND
      =================================================== */}

      <div className="testimonials__ambient testimonials__ambient--one" />

      <div className="testimonials__ambient testimonials__ambient--two" />

      <div className="testimonials__container">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="testimonials__heading"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [
              0.16,
              1,
              0.3,
              1,
            ],
          }}
        >
          <div className="testimonials__eyebrow">
            <span className="testimonials__eyebrow-line" />

            REAL RESULTS

            <span className="testimonials__eyebrow-line" />
          </div>

          <h2>
            Results That
            <span> Speak.</span>
          </h2>

          <p>
            Real feedback from clients after
            tuning their systems with Muffin
            Services.
          </p>
        </motion.div>

        {/* =================================================
            TWO CARDS
        ================================================= */}

        <div className="testimonials__layout">
          {/* ===============================================
              LEFT — FPS
          =============================================== */}

          <motion.div
            className="fps-box"
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            <div className="fps-box__header">
              <div>
                <span className="fps-box__mini-label">
                  PERFORMANCE PROOF
                </span>

                <h3>
                  FPS{" "}
                  <span>Improvements</span>
                </h3>
              </div>

              <div className="fps-box__live">
                <span />
                PROOF COLLECTION
              </div>
            </div>

            {/* FPS COLLECTION */}

            <div className="fps-box__collection">
              <CollectionSurfer
                items={fpsItems}
                variant="magnetic"
              />
            </div>

            {/* Footer */}

            <div className="fps-box__footer">
              <div className="fps-box__verified">
                <CheckCircle2
                  size={15}
                />

                <span>
                  Real client performance data
                </span>
              </div>

              <span className="fps-box__footer-text">
                5 performance screenshots
              </span>
            </div>
          </motion.div>

          {/* ===============================================
              RIGHT — TESTIMONIALS
          =============================================== */}

          <motion.div
            className="testimonial-box"
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
              delay: 0.12,
              ease: [
                0.16,
                1,
                0.3,
                1,
              ],
            }}
          >
            {/* Header */}

            <div className="testimonial-box__top">
              <div>
                <span className="testimonial-box__label">
                  VERIFIED FEEDBACK
                </span>

                <h3>
                  What our
                  <span> clients say.</span>
                </h3>
              </div>

              <div className="testimonial-box__quote">
                <Quote size={19} />
              </div>
            </div>

            {/* Viewer */}

            <div className="testimonial-box__viewer">
              <div className="testimonial-box__viewer-glow" />

              {testimonials.length > 0 ? (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    className="testimonial-image-wrap"
                    initial={{
                      opacity: 0,
                      scale: 0.96,
                      x: 15,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      x: 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                      x: -15,
                    }}
                    transition={{
                      duration: 0.42,
                      ease: [
                        0.16,
                        1,
                        0.3,
                        1,
                      ],
                    }}
                  >
                    <img
                      src={
                        testimonials[
                          activeTestimonial
                        ].image
                      }
                      alt={`Client testimonial ${
                        activeTestimonial + 1
                      }`}
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>
              ) : (
                <div className="testimonial-empty">
                  <Quote size={30} />

                  <strong>
                    No testimonials found
                  </strong>

                  <span>
                    Add images inside
                    src/assets/testimonials
                  </span>
                </div>
              )}
            </div>

            {/* Controls */}

            {testimonials.length > 0 && (
              <>
                <div className="testimonial-box__controls">
                  <button
                    type="button"
                    className="testimonial-box__arrow"
                    onClick={
                      previousTestimonial
                    }
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeft size={17} />
                  </button>

                  <div className="testimonial-box__dots">
                    {testimonials.map(
                      (
                        testimonial,
                        index
                      ) => (
                        <button
                          type="button"
                          key={
                            testimonial.image
                          }
                          className={
                            index ===
                            activeTestimonial
                              ? "testimonial-box__dot testimonial-box__dot--active"
                              : "testimonial-box__dot"
                          }
                          onClick={() =>
                            setActiveTestimonial(
                              index
                            )
                          }
                          aria-label={`Show testimonial ${
                            index + 1
                          }`}
                        />
                      )
                    )}
                  </div>

                  <button
                    type="button"
                    className="testimonial-box__arrow"
                    onClick={
                      nextTestimonial
                    }
                    aria-label="Next testimonial"
                  >
                    <ArrowRight size={17} />
                  </button>
                </div>

                {/* Counter */}

                <div className="testimonial-box__counter">
                  <span>
                    {String(
                      activeTestimonial + 1
                    ).padStart(2, "0")}
                  </span>

                  <div className="testimonial-box__counter-line">
                    <motion.div
                      animate={{
                        width: `${
                          ((activeTestimonial +
                            1) /
                            testimonials.length) *
                          100
                        }%`,
                      }}
                      transition={{
                        duration: 0.4,
                      }}
                    />
                  </div>

                  <span>
                    {String(
                      testimonials.length
                    ).padStart(2, "0")}
                  </span>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* =================================================
            TRUST STRIP
        ================================================= */}

        <motion.div
          className="testimonials__trust"
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
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
        >
          <div>
            <span className="testimonials__trust-dot" />
            REAL CLIENT FEEDBACK
          </div>

          <div>
            <span className="testimonials__trust-dot" />
            REAL PERFORMANCE PROOF
          </div>

          <div>
            <span className="testimonials__trust-dot" />
            SYSTEM-FOCUSED OPTIMIZATION
          </div>
        </motion.div>
      </div>
    </section>
  );
}