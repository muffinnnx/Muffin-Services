import { ArrowRight, MessageCircle, Zap } from "lucide-react";

import { siteConfig } from "../data/site";
import { CursorDrivenParticleTypography } from "../components/ui/cursor-driven-particle-typography";

import "./Hero.css";

function ParticleWord() {
  return (
    <div className="particle-word" aria-label="Maximum">
      <CursorDrivenParticleTypography
        text="Maximum"
        fontSize={94}
        fontFamily="Inter, sans-serif"
        particleSize={1.65}
        particleDensity={3.5}
        dispersionStrength={18}
        returnSpeed={0.09}
        color="#A855F7"
        className="particle-word__component"
      />
    </div>
  );
}

const performanceStats = [
  {
    label: "FPS Increase",
    value: "+300%",
    progress: 92,
    type: "purple",
  },
  {
    label: "Latency Reduction",
    value: "-75%",
    progress: 75,
    type: "blue",
  },
  {
    label: "Response Time",
    value: "-60%",
    progress: 60,
    type: "green",
  },
];

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__background" />

      <div className="hero__ambient hero__ambient--one" />
      <div className="hero__ambient hero__ambient--two" />

      <div className="hero__container">
        {/* LEFT SIDE */}
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            {siteConfig.hero.eyebrow}
          </div>

          <h1 className="hero__title">
            <span className="hero__title-line">
              Unlock
            </span>

            <ParticleWord />

            <span className="hero__title-gradient">
              Performance
            </span>
          </h1>

          <p className="hero__description">
            {siteConfig.hero.description}
          </p>

          <div className="hero__actions">
            <button
              type="button"
              className="hero__primary-button"
              onClick={scrollToServices}
            >
              <span>{siteConfig.hero.primaryCta}</span>
              <ArrowRight size={18} />
            </button>

            <a
              href={siteConfig.discord.inviteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero__secondary-button"
            >
              <MessageCircle size={18} />
              <span>{siteConfig.hero.secondaryCta}</span>
            </a>
          </div>

          <div className="hero__trust">
            <span className="hero__trust-line" />
            <span>System-focused performance services</span>
          </div>
        </div>

        {/* RIGHT SIDE — PERFORMANCE DASHBOARD */}
        <div className="hero__visual">
          <div className="hero-card">
            <div className="hero-card__glow" />

            {/* Top icon */}
            <div className="hero-card__icon">
              <Zap size={27} strokeWidth={2.4} />
            </div>

            {/* Title */}
            <h2 className="hero-card__title">
              Performance Stats
            </h2>

            {/* Performance metrics */}
            <div className="hero-card__metrics">
              {performanceStats.map((stat) => (
                <div
                  className="hero-card__metric"
                  key={stat.label}
                >
                  <div className="hero-card__metric-top">
                    <span>{stat.label}</span>

                    <strong
                      className={`hero-card__value hero-card__value--${stat.type}`}
                    >
                      {stat.value}
                    </strong>
                  </div>

                  <div className="hero-card__progress">
                    <span
                      className={`hero-card__progress-fill hero-card__progress-fill--${stat.type}`}
                      style={{
                        width: `${stat.progress}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom statistics */}
            <div className="hero-card__stats">
              {siteConfig.performance.stats.map((stat) => (
                <div
                  className="hero-card__stat"
                  key={stat.label}
                >
                  <strong>{stat.value}</strong>

                  <span>{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Bottom status */}
            <div className="hero-card__footer">
              <span className="hero-card__footer-status">
                <span className="hero-card__footer-dot" />
                System optimized
              </span>

              <span className="hero-card__signal">
                <i />
                <i />
                <i />
                <i />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__bottom-fade" />
    </section>
  );
}