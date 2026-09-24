"use client";

import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  Gauge,
  MonitorCog,
  MousePointer2,
  Radio,
  Server,
  Zap,
} from "lucide-react";

import "./flight-status-card.css";

export type PerformanceStatus = {
  label: string;
  value: string;
  description?: string;
};

export interface FlightStatusCardProps {
  title?: string;
  subtitle?: string;
  status?: string;
  metrics?: PerformanceStatus[];
}

const defaultMetrics: PerformanceStatus[] = [
  {
    label: "FPS",
    value: "200+",
    description: "Supported setups",
  },
  {
    label: "Frame Time",
    value: "Stable",
    description: "Improved consistency",
  },
  {
    label: "Input",
    value: "Low",
    description: "Reduced latency",
  },
  {
    label: "System",
    value: "Tuned",
    description: "Gaming focused",
  },
];

export default function FlightStatusCard({
  title = "Performance Status",
  subtitle = "Muffin Services system tuning",
  status = "OPTIMIZED",
  metrics = defaultMetrics,
}: FlightStatusCardProps) {
  return (
    <motion.div
      className="flight-status-card"
      initial={{
        opacity: 0,
        y: 20,
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
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* =====================================================
          TOP HEADER
      ===================================================== */}

      <div className="flight-status-card__header">
        <div className="flight-status-card__heading">
          <div className="flight-status-card__icon">
            <Gauge size={18} />
          </div>

          <div>
            <span className="flight-status-card__eyebrow">
              PERFORMANCE MONITOR
            </span>

            <h3>{title}</h3>

            <p>{subtitle}</p>
          </div>
        </div>

        <div className="flight-status-card__status">
          <span />
          {status}
        </div>
      </div>

      {/* =====================================================
          DIVIDER
      ===================================================== */}

      <div className="flight-status-card__divider" />

      {/* =====================================================
          PERFORMANCE VISUAL
      ===================================================== */}

      <div className="flight-status-card__visual">
        <div className="flight-status-card__visual-grid" />

        <div className="flight-status-card__orb">
          <div className="flight-status-card__orb-inner">
            <Activity size={24} />

            <strong>READY</strong>

            <span>Gaming Profile</span>
          </div>
        </div>

        <div className="flight-status-card__scan" />

        <div className="flight-status-card__signal flight-status-card__signal--one">
          <Zap size={13} />
          <span>FPS</span>
        </div>

        <div className="flight-status-card__signal flight-status-card__signal--two">
          <MousePointer2 size={13} />
          <span>INPUT</span>
        </div>

        <div className="flight-status-card__signal flight-status-card__signal--three">
          <Cpu size={13} />
          <span>CPU</span>
        </div>

        <div className="flight-status-card__signal flight-status-card__signal--four">
          <MonitorCog size={13} />
          <span>WINDOWS</span>
        </div>
      </div>

      {/* =====================================================
          METRICS
      ===================================================== */}

      <div className="flight-status-card__metrics">
        {metrics.map((metric, index) => (
          <motion.div
            key={`${metric.label}-${index}`}
            className="flight-status-card__metric"
            initial={{
              opacity: 0,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15 + index * 0.08,
              duration: 0.35,
            }}
          >
            <div className="flight-status-card__metric-top">
              <span>{metric.label}</span>

              <div className="flight-status-card__metric-icon">
                {index === 0 && (
                  <Gauge size={13} />
                )}

                {index === 1 && (
                  <Activity size={13} />
                )}

                {index === 2 && (
                  <MousePointer2 size={13} />
                )}

                {index === 3 && (
                  <Server size={13} />
                )}
              </div>
            </div>

            <strong>{metric.value}</strong>

            {metric.description && (
              <span>
                {metric.description}
              </span>
            )}
          </motion.div>
        ))}
      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="flight-status-card__footer">
        <div>
          <span className="flight-status-card__footer-dot" />

          <span>
            System-focused optimization
          </span>
        </div>

        <span className="flight-status-card__footer-right">
          <Radio size={13} />
          LIVE PROFILE
        </span>
      </div>
    </motion.div>
  );
}