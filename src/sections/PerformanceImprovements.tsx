import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Gauge,
  MousePointer2,
  MonitorCog,
  Radio,
  Check,
  ArrowUpRight,
  Zap,
} from "lucide-react";

import "./PerformanceImprovements.css";

type PerformanceTab = {
  id: string;
  number: string;
  label: string;
  title: string;
  description: string;
  icon: typeof Gauge;
  features: string[];
  metricLabel: string;
  metricValue: string;
  metricPercent: number;
  accent: string;
};

const performanceTabs: PerformanceTab[] = [
  {
    id: "fps",
    number: "01",
    label: "FPS & GAMING",
    title: "Push your hardware further.",
    description:
      "Game-focused optimization designed around your hardware, games, and current system configuration.",
    icon: Gauge,
    features: [
      "FPS and frame-time optimization",
      "Game-specific performance tuning",
      "GPU and CPU configuration",
      "Background resource optimization",
    ],
    metricLabel: "PERFORMANCE FOCUS",
    metricValue: "HIGH",
    metricPercent: 92,
    accent: "#A855F7",
  },
  {
    id: "input",
    number: "02",
    label: "INPUT & LATENCY",
    title: "Make every input count.",
    description:
      "Tune your system around responsiveness, mouse behavior, keyboard input, and latency-sensitive gaming.",
    icon: MousePointer2,
    features: [
      "Input delay reduction",
      "Mouse responsiveness tuning",
      "Keyboard responsiveness tuning",
      "Latency-focused configuration",
    ],
    metricLabel: "RESPONSIVENESS",
    metricValue: "HIGH",
    metricPercent: 89,
    accent: "#D52CFF",
  },
  {
    id: "windows",
    number: "03",
    label: "WINDOWS & SYSTEM",
    title: "Clean up the system.",
    description:
      "Reduce unnecessary system overhead and configure Windows around the way you actually use your PC.",
    icon: MonitorCog,
    features: [
      "Windows performance optimization",
      "Background process cleanup",
      "Startup configuration",
      "Power and performance settings",
    ],
    metricLabel: "SYSTEM EFFICIENCY",
    metricValue: "OPTIMIZED",
    metricPercent: 94,
    accent: "#8B2CFF",
  },
  {
    id: "streaming",
    number: "04",
    label: "STREAMING & RECORDING",
    title: "Create without the slowdown.",
    description:
      "Balance recording or streaming quality with gaming performance so your setup stays responsive while capturing gameplay.",
    icon: Radio,
    features: [
      "OBS configuration",
      "Encoder configuration",
      "Recording quality optimization",
      "Gaming + streaming performance balance",
    ],
    metricLabel: "CREATOR READY",
    metricValue: "HIGH",
    metricPercent: 87,
    accent: "#A855F7",
  },
];

export default function PerformanceImprovements() {
  const [activeTab, setActiveTab] = useState("fps");

  const active =
    performanceTabs.find((tab) => tab.id === activeTab) ??
    performanceTabs[0];

  const Icon = active.icon;

  return (
    <section
      id="performance"
      className="performance-section"
    >
      <div className="performance-section__background" />
      <div className="performance-section__grid" />

      <div className="performance-section__container">
        {/* HEADING */}
        <motion.div
          className="performance-section__heading"
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
        >
          <div className="performance-section__eyebrow">
            <span />
            SYSTEM PERFORMANCE
            <span />
          </div>

          <h2>
            Performance,
            <span> refined.</span>
          </h2>

          <p>
            Every system is different. Muffin Services focuses on
            the areas that matter most for your setup and games.
          </p>
        </motion.div>

        {/* TABS */}
        <motion.div
          className="performance-tabs"
          initial={{
            opacity: 0,
            y: 18,
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
            delay: 0.08,
            ease: "easeOut",
          }}
        >
          {performanceTabs.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                className={
                  isActive
                    ? "performance-tab performance-tab--active"
                    : "performance-tab"
                }
                onClick={() => setActiveTab(tab.id)}
              >
                <div className="performance-tab__top">
                  <div className="performance-tab__icon">
                    <TabIcon size={17} />
                  </div>

                  <span className="performance-tab__number">
                    {tab.number}
                  </span>
                </div>

                <div className="performance-tab__label">
                  {tab.label}
                </div>

                <span className="performance-tab__indicator" />
              </button>
            );
          })}
        </motion.div>

        {/* MAIN PANEL */}
        <div className="performance-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="performance-panel__content"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -8,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
            >
              {/* LEFT */}
              <div className="performance-panel__left">
                <div className="performance-panel__icon-large">
                  <Icon size={27} />
                </div>

                <div className="performance-panel__meta">
                  <span>MUFFIN PERFORMANCE</span>
                  <strong>
                    {active.number} / 04
                  </strong>
                </div>

                <h3>{active.title}</h3>

                <p className="performance-panel__description">
                  {active.description}
                </p>

                <div className="performance-panel__features">
                  {active.features.map(
                    (feature, index) => (
                      <motion.div
                        className="performance-feature"
                        key={feature}
                        initial={{
                          opacity: 0,
                          x: -7,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: 0.04 * index,
                          duration: 0.22,
                          ease: "easeOut",
                        }}
                      >
                        <span className="performance-feature__check">
                          <Check size={12} />
                        </span>

                        <span>{feature}</span>
                      </motion.div>
                    )
                  )}
                </div>
              </div>

              {/* RIGHT */}
              <div className="performance-panel__right">
                <div className="performance-visual">
                  <div className="performance-visual__glow" />

                  <div className="performance-visual__header">
                    <div>
                      <span>LIVE SYSTEM PROFILE</span>
                      <strong>OPTIMIZED</strong>
                    </div>

                    <div className="performance-visual__status">
                      <i />
                      READY
                    </div>
                  </div>

                  <div className="performance-visual__main">
                    <div className="performance-visual__icon">
                      <Icon size={30} />
                    </div>

                    <div className="performance-visual__title">
                      <span>{active.label}</span>
                      <strong>Muffin Services</strong>
                    </div>

                    <div className="performance-visual__pulse">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>

                  <div className="performance-visual__divider" />

                  <div className="performance-metric">
                    <div className="performance-metric__top">
                      <span>
                        {active.metricLabel}
                      </span>

                      <strong>
                        {active.metricValue}
                      </strong>
                    </div>

                    <div className="performance-metric__track">
                      <motion.div
                        className="performance-metric__fill"
                        initial={{
                          scaleX: 0,
                        }}
                        animate={{
                          scaleX:
                            active.metricPercent /
                            100,
                        }}
                        transition={{
                          duration: 0.42,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        style={{
                          background: `linear-gradient(
                            90deg,
                            ${active.accent},
                            #D52CFF
                          )`,
                          transformOrigin:
                            "left center",
                        }}
                      />

                      <motion.div
                        className="performance-metric__point"
                        initial={{
                          left: "0%",
                        }}
                        animate={{
                          left: `${active.metricPercent}%`,
                        }}
                        transition={{
                          duration: 0.42,
                          ease: [
                            0.22,
                            1,
                            0.36,
                            1,
                          ],
                        }}
                        style={{
                          boxShadow: `0 0 22px ${active.accent}`,
                        }}
                      >
                        <Zap size={11} />
                      </motion.div>
                    </div>

                    <div className="performance-metric__bottom">
                      <span>BASELINE</span>

                      <span>
                        {active.metricPercent}%
                        {" "}
                        FOCUS
                      </span>
                    </div>
                  </div>

                  <div className="performance-visual__stats">
                    <div>
                      <strong>01</strong>
                      <span>PROFILE</span>
                    </div>

                    <div>
                      <strong>04</strong>
                      <span>FOCUS AREAS</span>
                    </div>

                    <div>
                      <strong>24/7</strong>
                      <span>COMMUNITY</span>
                    </div>
                  </div>

                  <div className="performance-visual__footer">
                    <span>
                      Personalized optimization
                    </span>

                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* BOTTOM NOTE */}
        <motion.div
          className="performance-section__note"
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.4,
          }}
        >
          <span />
          <p>
            Results vary by hardware, game, drivers and existing
            system configuration.
          </p>
          <span />
        </motion.div>
      </div>
    </section>
  );
}