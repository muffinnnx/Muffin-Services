import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";

import "./PricingComparison.css";

type ComparisonRow = {
  feature: string;
  free: boolean;
  sensi: boolean;
  optimization: boolean;
  combo: boolean;
};

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Free optimization resources",
    free: true,
    sensi: false,
    optimization: false,
    combo: false,
  },
  {
    feature: "Sensitivity configuration",
    free: false,
    sensi: true,
    optimization: false,
    combo: true,
  },
  {
    feature: "Input settings review",
    free: false,
    sensi: true,
    optimization: false,
    combo: true,
  },
  {
    feature: "Mouse configuration guidance",
    free: false,
    sensi: true,
    optimization: false,
    combo: true,
  },
  {
    feature: "Windows optimization",
    free: false,
    sensi: false,
    optimization: true,
    combo: true,
  },
  {
    feature: "Gaming performance tuning",
    free: false,
    sensi: false,
    optimization: true,
    combo: true,
  },
  {
    feature: "Background process optimization",
    free: false,
    sensi: false,
    optimization: true,
    combo: true,
  },
  {
    feature: "System responsiveness configuration",
    free: false,
    sensi: false,
    optimization: true,
    combo: true,
  },
  {
    feature: "Personalized recommendations",
    free: false,
    sensi: true,
    optimization: true,
    combo: true,
  },
];

const plans = [
  {
    name: "Free Optimization Pack",
    price: "FREE",
    featured: false,
  },
  {
    name: "Sensi",
    price: "₹799",
    featured: false,
  },
  {
    name: "Optimization",
    price: "₹999",
    featured: true,
  },
  {
    name: "Sensi + Optimization",
    price: "₹1,699",
    featured: false,
  },
];

const headingVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const rowVariants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

function FeatureIcon({ included }: { included: boolean }) {
  return included ? (
    <span className="comparison__check">
      <Check size={14} strokeWidth={2.5} />
    </span>
  ) : (
    <span className="comparison__minus">
      <Minus size={14} strokeWidth={1.8} />
    </span>
  );
}

export default function PricingComparison() {
  return (
    <section
      id="pricing-comparison"
      className="comparison"
    >
      <div className="comparison__background" />

      <div className="comparison__container">
        <motion.div
          className="comparison__heading"
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.35,
          }}
        >
          <span className="comparison__eyebrow">
            COMPARE PACKAGES
          </span>

          <h2>
            Find Your Perfect
            <span> Plan.</span>
          </h2>

          <p>
            Compare what's included in each package and choose
            the setup that matches your performance goals.
          </p>
        </motion.div>

        <motion.div
          className="comparison__table-wrapper"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="comparison__table">
            <div className="comparison__header">
              <div className="comparison__feature-heading">
                <span>FEATURES</span>
              </div>

              {plans.map((plan) => (
                <motion.div
                  key={plan.name}
                  className={`comparison__plan ${
                    plan.featured
                      ? "comparison__plan--featured"
                      : ""
                  }`}
                  whileHover={{
                    y: -3,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {plan.featured && (
                    <span className="comparison__popular">
                      MOST POPULAR
                    </span>
                  )}

                  <span className="comparison__plan-name">
                    {plan.name}
                  </span>

                  <strong>{plan.price}</strong>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="comparison__body"
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                staggerChildren: 0.055,
              }}
            >
              {comparisonRows.map((row) => (
                <motion.div
                  key={row.feature}
                  className="comparison__row"
                  variants={rowVariants}
                >
                  <div className="comparison__feature">
                    <span>{row.feature}</span>
                  </div>

                  <div className="comparison__value">
                    <FeatureIcon included={row.free} />
                  </div>

                  <div className="comparison__value">
                    <FeatureIcon included={row.sensi} />
                  </div>

                  <div className="comparison__value comparison__value--featured">
                    <FeatureIcon
                      included={row.optimization}
                    />
                  </div>

                  <div className="comparison__value">
                    <FeatureIcon included={row.combo} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="comparison__note"
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
            delay: 0.2,
          }}
        >
          <span />
          <p>
            Every package is focused on practical,
            setup-specific performance improvements.
          </p>
          <span />
        </motion.div>
      </div>
    </section>
  );
}