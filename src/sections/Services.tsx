import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Gauge,
  Gamepad2,
  MonitorCog,
  MousePointer2,
  Radio,
  ScanSearch,
  SlidersHorizontal,
  X,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import "./Services.css";

type Service = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  included: string[];
};

const services: Service[] = [
  {
    number: "01",
    title: "Gaming Optimization",
    description:
      "Fine-tune your system around your games for a cleaner and more responsive gaming experience.",
    icon: Gauge,
    included: [
      "System performance settings",
      "Game-specific settings review",
      "Background process optimization",
      "Performance-focused Windows configuration",
    ],
  },
  {
    number: "02",
    title: "FPS Boost Package",
    description:
      "Focus on improving gaming performance through graphics, system and game configuration.",
    icon: Gamepad2,
    included: [
      "Graphics settings optimization",
      "Game configuration review",
      "Performance and frame-time tuning",
      "Unnecessary background load reduction",
    ],
  },
  {
    number: "03",
    title: "Windows Optimization",
    description:
      "Clean and tune Windows settings to create a more responsive gaming environment.",
    icon: MonitorCog,
    included: [
      "Windows performance configuration",
      "Startup and background app review",
      "Power and system settings",
      "Gaming-focused Windows adjustments",
    ],
  },
  {
    number: "04",
    title: "Input Delay Reduction",
    description:
      "Tune relevant system and input settings to reduce unnecessary latency in your gaming setup.",
    icon: MousePointer2,
    included: [
      "Mouse and input configuration review",
      "USB and Windows input settings",
      "Latency-focused system configuration",
      "Competitive gaming settings review",
    ],
  },
  {
    number: "05",
    title: "Streaming Optimization",
    description:
      "Configure your system for a smoother balance between gaming, recording and streaming.",
    icon: Radio,
    included: [
      "OBS configuration review",
      "Encoder and recording settings",
      "Stream performance tuning",
      "Gaming and streaming resource balance",
    ],
  },
  {
    number: "06",
    title: "PC Performance Audit",
    description:
      "A detailed review of your setup to identify possible performance limitations and configuration issues.",
    icon: ScanSearch,
    included: [
      "Hardware and software review",
      "Performance bottleneck identification",
      "Gaming configuration analysis",
      "Personalized optimization recommendations",
    ],
  },
  {
    number: "07",
    title: "Custom Performance Package",
    description:
      "A personalized optimization package built around your hardware, games and specific performance goals.",
    icon: SlidersHorizontal,
    included: [
      "Personalized system analysis",
      "Custom gaming configuration",
      "Game-specific optimization",
      "Setup-focused performance adjustments",
    ],
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const activeService = services[activeIndex];
  const ActiveIcon = activeService.icon;

  const nextService = () => {
    setActiveIndex((current) => (current + 1) % services.length);
  };

  const previousService = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + services.length) % services.length,
    );
  };

  return (
    <section id="services" className="services">
      <div className="services__background" />

      <div className="services__container">

        {/* =========================
            HEADING
        ========================= */}

        <div className="services__heading">
          <span className="services__eyebrow">
            WHAT WE OFFER
          </span>

          <h2>
            Services<span>.</span>
          </h2>

          <p>
            Comprehensive optimization services designed to give
            you the competitive edge. Every service is focused on
            improving performance, responsiveness and system
            stability.
          </p>
        </div>

        {/* =========================
            SERVICE EXPERIENCE
        ========================= */}

        <div
          className={`services__experience ${
            expanded
              ? "services__experience--expanded"
              : ""
          }`}
        >
          <AnimatePresence mode="wait">

            {/* =================================================
                NORMAL / HOVER STACK
            ================================================= */}

            {!expanded && (
              <motion.div
                key="stack"
                className="services__stack-view"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >

                <div className="services__stack">

                  {services.map((service, index) => {
                    const Icon = service.icon;

                    const relative =
                      (index -
                        activeIndex +
                        services.length) %
                      services.length;

                    /*
                     * Position relative to active card.
                     *
                     * When NOT hovering:
                     * everything stays tightly stacked.
                     *
                     * When hovering:
                     * cards fan outward.
                     */

                    const fanPositions = [
                      { x: 0, y: 0, rotate: 0 },
                      { x: -165, y: 22, rotate: -11 },
                      { x: -110, y: -8, rotate: -7 },
                      { x: -55, y: -25, rotate: -3 },
                      { x: 55, y: -25, rotate: 3 },
                      { x: 110, y: -8, rotate: 7 },
                      { x: 165, y: 22, rotate: 11 },
                    ];

                    /*
                     * Convert cards around the active card
                     * into left/right fan positions.
                     */

                    let fan;

                    if (relative === 0) {
                      fan = fanPositions[0];
                    } else if (relative <= 3) {
                      fan =
                        fanPositions[
                          4 - relative
                        ];
                    } else {
                      fan =
                        fanPositions[
                          relative
                        ];
                    }

                    const compactX =
                      relative === 0
                        ? 0
                        : relative % 2 === 0
                          ? 12
                          : -12;

                    const compactY =
                      relative === 0
                        ? 0
                        : -relative * 4;

                    const compactRotate =
                      relative === 0
                        ? -2
                        : relative % 2 === 0
                          ? 2
                          : -2;

                    const isActive =
                      index === activeIndex;

                    return (
                      <motion.article
                        key={service.number}
                        className={`service-card ${
                          isActive
                            ? "service-card--active"
                            : "service-card--stacked"
                        }`}
                        animate={{
                          x: isHovering
                            ? fan.x
                            : compactX,

                          y: isHovering
                            ? fan.y
                            : compactY,

                          rotate: isHovering
                            ? fan.rotate
                            : compactRotate,

                          scale: isActive
                            ? 1
                            : isHovering
                              ? 0.9
                              : 0.94,

                          opacity: isActive
                            ? 1
                            : isHovering
                              ? 0.72
                              : 0.52,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 190,
                          damping: 22,
                          mass: 0.8,
                        }}
                        style={{
                          zIndex: isActive
                            ? 20
                            : 20 - relative,
                        }}
                      >
                        <div className="service-card__shine" />

                        <div className="service-card__top">

                          <div className="service-card__icon">
                            <Icon
                              size={20}
                              strokeWidth={1.7}
                            />
                          </div>

                          <span>
                            {service.number}
                          </span>

                        </div>

                        {/* Only active card shows its content */}

                        {isActive && (
                          <>
                            <div className="service-card__content">

                              <span className="service-card__category">
                                PERFORMANCE SERVICE
                              </span>

                              <h3>
                                {service.title}
                              </h3>

                              <p>
                                {service.description}
                              </p>

                            </div>

                            <div className="service-card__bottom">

                              <span>
                                Explore service
                              </span>

                              <button
                                type="button"
                                className="service-card__arrow"
                                onClick={() =>
                                  setExpanded(true)
                                }
                                aria-label={`Explore ${service.title}`}
                              >
                                <ArrowUpRight
                                  size={18}
                                />
                              </button>

                            </div>
                          </>
                        )}

                      </motion.article>
                    );
                  })}

                </div>

                {/* =========================
                    NAVIGATION
                ========================= */}

                <div className="services__stack-navigation">

                  <button
                    type="button"
                    className="services__nav-button"
                    onClick={previousService}
                    aria-label="Previous service"
                  >
                    <ArrowLeft size={16} />
                  </button>

                  <div className="services__indicator">

                    <span className="services__indicator-line" />

                    <span>
                      {String(
                        activeIndex + 1,
                      ).padStart(2, "0")}
                      {" / "}
                      {String(
                        services.length,
                      ).padStart(2, "0")}
                    </span>

                    <span className="services__indicator-line" />

                  </div>

                  <button
                    type="button"
                    className="services__nav-button"
                    onClick={nextService}
                    aria-label="Next service"
                  >
                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </motion.div>
            )}

            {/* =================================================
                EXPANDED SERVICE
            ================================================= */}

            {expanded && (
              <motion.div
                key={`detail-${activeService.number}`}
                className="service-detail"
                initial={{
                  opacity: 0,
                  scale: 0.82,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.88,
                  y: -40,
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 20,
                }}
              >

                <div className="service-detail__glow" />

                {/* LEFT */}

                <div className="service-detail__main">

                  <div className="service-detail__top">

                    <div className="service-detail__icon">
                      <ActiveIcon
                        size={27}
                        strokeWidth={1.6}
                      />
                    </div>

                    <span>
                      {activeService.number}
                    </span>

                  </div>

                  <div className="service-detail__heading">

                    <span>
                      PERFORMANCE SERVICE
                    </span>

                    <h3>
                      {activeService.title}
                    </h3>

                    <p>
                      {activeService.description}
                    </p>

                  </div>

                  <div className="service-detail__controls">

                    <button
                      type="button"
                      onClick={() =>
                        setExpanded(false)
                      }
                      className="service-detail__back"
                    >
                      <X size={17} />
                      Back to services
                    </button>

                    <button
                      type="button"
                      onClick={nextService}
                      className="service-detail__next"
                    >
                      Next service
                      <ArrowUpRight size={17} />
                    </button>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="service-detail__included">

                  <span className="service-detail__included-label">
                    WHAT'S INCLUDED
                  </span>

                  <div className="service-detail__list">

                    {activeService.included.map(
                      (item, index) => (
                        <motion.div
                          key={item}
                          className="service-detail__item"
                          initial={{
                            opacity: 0,
                            x: 20,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            delay:
                              0.1 +
                              index * 0.08,
                          }}
                        >
                          <span>
                            {String(
                              index + 1,
                            ).padStart(2, "0")}
                          </span>

                          <p>{item}</p>
                        </motion.div>
                      ),
                    )}

                  </div>

                </div>

              </motion.div>
            )}

          </AnimatePresence>
        </div>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        {!expanded && (
          <div className="services__statement">
            <span />
            <p>
              Hover to explore. Click to discover.
            </p>
            <span />
          </div>
        )}

      </div>
    </section>
  );
}