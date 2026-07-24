import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, PenTool, Rocket, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
};

const steps = [
  {
    icon: <MessageCircle size={20} />,
    title: "You tell us what you need",
    desc: "Describe your project or pick a product. We scope it and give you a price and timeline — same day.",
  },
  {
    icon: <PenTool size={20} />,
    title: "We design and build it",
    desc: "We research, design, and develop. You get previews and progress updates throughout.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Launch, deliver, and improve",
    desc: "Tested, polished, delivered. For products, we handle the Whop listing and launch strategy. Then we keep improving.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="hiw-section">
      <div className="container">
        <motion.div
          className="hiw-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">Process</span>
          <h2 className="section-title">
            How <span className="metallic-text">It Works</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Simple process. Fast turnaround. No fluff.
          </p>
        </motion.div>

        <div className="hiw-row">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="hiw-card glass-card glow-card-hover"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i + 1}
            >
              <div className="hiw-step-num">{i + 1}</div>
              <div className="hiw-step-icon">{step.icon}</div>
              <h3 className="hiw-step-title">{step.title}</h3>
              <p className="hiw-step-desc">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hiw-arrow">
                  <ArrowRight size={18} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .hiw-section {
          padding: 6rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .hiw-header {
          text-align: center;
          max-width: 500px;
          margin: 0 auto 4rem auto;
        }

        .hiw-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
          position: relative;
        }

        .hiw-card {
          padding: 2rem;
          text-align: center;
          position: relative;
        }

        .hiw-step-num {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.12em;
          margin-bottom: 0.75rem;
        }

        .hiw-step-icon {
          width: 44px; height: 44px;
          margin: 0 auto 1rem;
          border-radius: 12px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        [data-theme="light"] .hiw-step-icon {
          background: rgba(0,0,0,0.03);
        }

        .hiw-step-title {
          font-size: 1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
        }

        .hiw-step-desc {
          font-size: 0.87rem;
          line-height: 1.55;
          color: var(--text-secondary);
        }

        .hiw-arrow {
          position: absolute;
          right: -28px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
          display: flex;
          z-index: 2;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .hiw-section { padding: 4rem 0; }
          .hiw-row {
            grid-template-columns: 1fr;
            gap: 1.25rem;
            max-width: 400px;
          }
          .hiw-arrow { display: none; }
          .hiw-card { padding: 1.5rem; }
          .hiw-step-title { font-size: 0.95rem; }
          .hiw-step-desc { font-size: 0.83rem; }
        }

        @media (max-width: 480px) {
          .hiw-header { margin-bottom: 2.5rem; }
        }
      `}</style>
    </section>
  );
}
