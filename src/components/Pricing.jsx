import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const plans = [
  {
    name: "Creator Lab",
    price: "20",
    period: "/mo",
    desc: "Editing asset workspace",
    features: ["Premium LUTs & presets", "Transition & overlay packs", "Sound FX library", "Premiere / Resolve / FCP", "Discord community", "840+ subscribers"],
    cta: "Get Creator Lab",
    url: "https://whop.com/joined/mrnome/",
    external: true,
  },
  {
    name: "Custom Agency",
    price: "Custom",
    period: "",
    desc: "Bespoke solutions for your business",
    features: ["Custom product development", "AI & workflow automation", "1-on-1 consultation", "Branded asset packs", "API integrations", "Ongoing support"],
    cta: "Start a Project",
    url: "#contact",
    highlight: true,
  },
  {
    name: "AI Blueprint",
    price: "15",
    period: " once",
    desc: "Prompt engineering guide",
    features: ["Illustrated PDF guide", "Prompt frameworks", "Copywriting templates", "AI agent patterns", "Automation examples", "Lifetime access"],
    cta: "Get AI Blueprint",
    url: "https://whop.com/joined/promptvault-ai-af0f/",
    external: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <motion.div
          className="pricing-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">Pricing</span>
          <h2 className="section-title">
            Simple, <span className="metallic-text">Transparent</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Ready-to-use products or fully custom builds. No hidden fees.
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`pricing-card gradient-border-card glow-card-hover ${plan.highlight ? "pricing-featured" : ""}`}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i + 1}
            >
              {plan.highlight && <div className="pricing-ribbon">Most Flexible</div>}
              <div className="pricing-body">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-desc">{plan.desc}</p>
                <div className="plan-price-row">
                  <span className="plan-price">
                    {plan.price === "Custom" ? plan.price : `$${plan.price}`}
                  </span>
                  <span className="plan-period">{plan.period}</span>
                </div>
                <ul className="plan-features">
                  {plan.features.map((f, fi) => (
                    <li key={fi}><Check size={14} className="plan-check" />{f}</li>
                  ))}
                </ul>
              </div>
              <a
                href={plan.url}
                target={plan.external ? "_blank" : undefined}
                rel={plan.external ? "noopener noreferrer" : undefined}
                className={plan.highlight ? "shimmer-button plan-btn" : "border-button plan-btn"}
                style={{ textDecoration: "none" }}
              >
                {plan.cta}
                {plan.external ? <ExternalLink size={14} /> : <ArrowRight size={14} />}
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .pricing-section {
          padding: 7rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .pricing-header {
          text-align: center;
          max-width: 500px;
          margin: 0 auto 4rem auto;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
          align-items: stretch;
        }

        .pricing-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .pricing-featured {
          border-color: var(--border-focus);
        }

        .pricing-ribbon {
          position: absolute;
          top: -11px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.66rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          background: var(--chrome-button);
          color: var(--carbon-dark);
          padding: 0.3rem 1rem;
          border-radius: 50px;
          z-index: 1;
        }
        [data-theme="light"] .pricing-ribbon { color: #fff; }

        .pricing-body { margin-bottom: 1.75rem; }

        .plan-name {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.3rem;
          letter-spacing: -0.01em;
        }

        .plan-desc {
          font-size: 0.83rem;
          color: var(--text-secondary);
          margin-bottom: 1.25rem;
        }

        .plan-price-row {
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          margin-bottom: 1.25rem;
        }

        .plan-price {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.03em;
        }

        .plan-period {
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .plan-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .plan-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .plan-check { color: var(--green-active); flex-shrink: 0; }

        .plan-btn { width: 100%; }

        /* Tablet */
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; gap: 1.5rem; }
          .pricing-card { padding: 2rem; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .pricing-section { padding: 4rem 0; }
          .pricing-header { margin-bottom: 2.5rem; }
          .plan-price { font-size: 2rem; }
          .plan-name { font-size: 1.1rem; }
          .plan-features li { font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
}
