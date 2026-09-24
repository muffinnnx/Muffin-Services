import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  HelpCircle,
} from "lucide-react";

import {
  NewsletterBookshelf,
  type NewsletterBookshelfItem,
} from "../components/ui/newsletter-bookshelf";

import "./FAQ.css";

type FAQItem = NewsletterBookshelfItem & {
  question: string;
  answer: string;
  points: string[];
};

const faqItems: FAQItem[] = [
  {
    id: "optimization-basics",
    title: "Optimization Basics",
    date: "FAQ / 01",
    question: "What does Muffin Optimization actually change?",
    answer:
      "Muffin Services focuses on the parts of your system that can affect gaming performance, responsiveness, frame consistency, and unnecessary background overhead. The exact configuration depends on your hardware, Windows setup, and the games you play.",
    points: [
      "System and Windows configuration",
      "Gaming-focused performance settings",
      "Unnecessary background overhead",
    ],
    color: "#241052",
    foil: "#c084fc",
  },
  {
    id: "fps-gaming",
    title: "FPS & Gaming",
    date: "FAQ / 02",
    question: "Will optimization improve FPS on every PC?",
    answer:
      "Results depend on your hardware, software configuration, game, and the condition of your current setup. Some systems have more room for improvement than others. Our goal is to remove unnecessary overhead and improve performance where your setup allows it.",
    points: [
      "Game-specific tuning",
      "FPS and frame-time focus",
      "Reduced unnecessary system load",
    ],
    color: "#32105e",
    foil: "#d8b4fe",
  },
  {
    id: "windows-system",
    title: "Windows & System",
    date: "FAQ / 03",
    question: "Do I need to reinstall Windows?",
    answer:
      "No. A Windows reinstall is not automatically required for optimization. Whenever possible, Muffin Services works with your existing installation and focuses on improving the configuration you already have.",
    points: [
      "Existing Windows installation",
      "System configuration tuning",
      "Background and startup optimization",
    ],
    color: "#17102f",
    foil: "#a855f7",
  },
  {
    id: "input-latency",
    title: "Input & Latency",
    date: "FAQ / 04",
    question: "Can optimization help with input delay?",
    answer:
      "Input responsiveness can be affected by several parts of a gaming setup. Muffin Services focuses on relevant system, Windows, and gaming configurations that can contribute to a more responsive experience.",
    points: [
      "Input responsiveness",
      "System latency configuration",
      "Gaming-focused settings",
    ],
    color: "#24124a",
    foil: "#e879f9",
  },
  {
    id: "safety-setup",
    title: "Safety & Setup",
    date: "FAQ / 05",
    question: "Is the optimization safe?",
    answer:
      "Our approach is performance-focused rather than based on unnecessary or extreme system changes. We focus on relevant Windows, system, gaming, and configuration settings while keeping the setup practical for everyday use.",
    points: [
      "Performance-focused changes",
      "No unnecessary system modifications",
      "Designed around your setup",
    ],
    color: "#1c1538",
    foil: "#c4b5fd",
  },
  {
    id: "packages-support",
    title: "Packages & Support",
    date: "FAQ / 06",
    question: "What happens after I purchase a package?",
    answer:
      "After purchase, you can connect with Muffin Services through the provided support channel. We can then identify the package requirements and move through the optimization process based on your system and selected service.",
    points: [
      "Package-specific process",
      "System information review",
      "Support through Muffin Community",
    ],
    color: "#301044",
    foil: "#f0abfc",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = faqItems[activeIndex];

  const handleSelect = (
    item: NewsletterBookshelfItem,
    index: number,
  ) => {
    const nextIndex = faqItems.findIndex(
      (faq) => faq.id === item.id,
    );

    setActiveIndex(
      nextIndex >= 0 ? nextIndex : index,
    );
  };

  const previous = () => {
    setActiveIndex((current) =>
      current === 0
        ? faqItems.length - 1
        : current - 1,
    );
  };

  const next = () => {
    setActiveIndex(
      (current) =>
        (current + 1) % faqItems.length,
    );
  };

  return (
    <section id="faq" className="faq-section">
      {/* =================================================
          BACKGROUND
      ================================================= */}

      <div className="faq-section__ambient faq-section__ambient--one" />
      <div className="faq-section__ambient faq-section__ambient--two" />
      <div className="faq-section__grid" />

      <div className="faq-section__container">
        {/* =================================================
            HEADING
        ================================================= */}

        <motion.div
          className="faq-section__heading"
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.65,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="faq-section__eyebrow">
            <span />
            FREQUENTLY ASKED
            <span />
          </div>

          <h2>
            Questions,
            <span> answered.</span>
          </h2>

          <p>
            Browse the Muffin Services FAQ and
            find the answers you need before
            getting your system optimized.
          </p>
        </motion.div>

        {/* =================================================
            MAIN FAQ LAYOUT
        ================================================= */}

        <div className="faq-layout">
          {/* =================================================
              BOOKSHELF
          ================================================= */}

          <motion.div
            className="faq-bookshelf-card"
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <div className="faq-bookshelf-card__header">
              <div>
                <span>
                  MUFFIN SERVICES
                </span>

                <strong>
                  FAQ LIBRARY
                </strong>
              </div>

              <div className="faq-bookshelf-card__status">
                <i />
                INTERACTIVE
              </div>
            </div>

            <div className="faq-bookshelf">
              <NewsletterBookshelf
                items={faqItems}
                brand="Muffin Services"
                height={500}
                onSelect={handleSelect}
                className="faq-bookshelf__component"
              />
            </div>

            <div className="faq-bookshelf-card__hint">
              <span>DRAG</span>
              <span>HOVER</span>
              <span>SELECT A BOOK</span>
            </div>
          </motion.div>

          {/* =================================================
              ANSWER PANEL
          ================================================= */}

          <motion.div
            className="faq-answer-card"
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
              amount: 0.15,
            }}
            transition={{
              duration: 0.75,
              delay: 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <AnimatePresence
              mode="wait"
            >
              <motion.div
                key={active.id}
                className="faq-answer-card__content"
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
              >
                <div className="faq-answer-card__top">
                  <div className="faq-answer-card__icon">
                    <HelpCircle size={21} />
                  </div>

                  <div>
                    <span>
                      {active.date}
                    </span>

                    <strong>
                      MUFFIN FAQ
                    </strong>
                  </div>
                </div>

                <div className="faq-answer-card__line" />

                <h3>
                  {active.question}
                </h3>

                <p className="faq-answer-card__answer">
                  {active.answer}
                </p>

                <div className="faq-answer-card__points">
                  {active.points.map(
                    (point) => (
                      <div
                        key={point}
                        className="faq-answer-point"
                      >
                        <span>
                          <Check size={12} />
                        </span>

                        <p>{point}</p>
                      </div>
                    ),
                  )}
                </div>

                <div className="faq-answer-card__bottom">
                  <span>
                    {String(
                      activeIndex + 1,
                    ).padStart(2, "0")}
                    {" / "}
                    {String(
                      faqItems.length,
                    ).padStart(2, "0")}
                  </span>

                  <div className="faq-answer-card__controls">
                    <button
                      type="button"
                      onClick={previous}
                      aria-label="Previous FAQ"
                    >
                      <ArrowLeft
                        size={16}
                      />
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next FAQ"
                    >
                      <ArrowRight
                        size={16}
                      />
                    </button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <motion.div
          className="faq-section__bottom"
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
          }}
        >
          <span className="faq-section__bottom-dot" />

          <span>
            Can't find what you're looking for?
            Join the Muffin Community for support.
          </span>
        </motion.div>
      </div>
    </section>
  );
}