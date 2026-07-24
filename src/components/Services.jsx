import React from "react";
import { motion } from "framer-motion";
import { Monitor, Cpu, Film, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const services = [
  {
    num: "01",
    icon: <Monitor size={22} />,
    title: "Custom Digital Products",
    desc: "Premium digital assets — Notion templates, PDF guides, preset packs, and software utilities — branded and ready to sell.",
    tags: ["Product Design", "PDF Guides", "Preset Packs", "Templates"],
  },
  {
    num: "02",
    icon: <Cpu size={22} />,
    title: "AI & Workflow Automation",
    desc: "Custom AI agents, automated support, database integrations, and intelligent pipelines that eliminate repetitive work.",
    tags: ["AI Agents", "Automation", "APIs", "Support Bots"],
  },
  {
    num: "03",
    icon: <Film size={22} />,
    title: "Creator Asset Packs",
    desc: "Professional LUTs, transitions, motion graphics, sound libraries, and overlay suites for faster, better edits.",
    tags: ["LUTs", "Transitions", "Sound FX", "Motion"],
  },
];

export default function Services() {
  return (
    <section id="services" className="svc-section">
      <div className="container">
        <motion.div
          className="svc-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">What We Do</span>
          <h2 className="section-title">
            Services <span className="metallic-text">& Solutions</span>
          </h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Whether you need a finished product or a custom-built system, we deliver.
          </p>
        </motion.div>

        <div className="svc-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="svc-card glass-card glow-card-hover"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i + 1}
            >
              <div className="svc-card-top">
                <span className="svc-num">{s.num}</span>
                <div className="svc-icon">{s.icon}</div>
              </div>
              <h3 className="svc-title">{s.title}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-tags">
                {s.tags.map((t, ti) => (
                  <span key={ti} className="svc-tag">{t}</span>
                ))}
              </div>
              <div className="svc-action" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                <span>Learn more</span>
                <ArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-section {
          padding: 7rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .svc-header {
          text-align: center;
          max-width: 550px;
          margin: 0 auto 4rem auto;
        }

        .svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }

        .svc-card {
          padding: 2.25rem;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }

        .svc-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.25rem;
        }

        .svc-num {
          font-size: 2.5rem;
          font-weight: 900;
          color: var(--border-color);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .svc-icon {
          width: 44px; height: 44px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        [data-theme="light"] .svc-icon { background: rgba(0,0,0,0.03); }

        .svc-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.65rem;
          letter-spacing: -0.01em;
        }

        .svc-desc {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .svc-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid var(--border-color);
        }

        .svc-tag {
          font-size: 0.68rem;
          font-weight: 600;
          color: var(--text-muted);
          background: var(--border-color);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .svc-action {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.83rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: gap 0.2s;
        }
        .svc-card:hover .svc-action { gap: 0.6rem; }

        /* Tablet */
        @media (max-width: 1024px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr); }
          .svc-num { font-size: 2rem; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .svc-section { padding: 4rem 0; }
          .svc-header { margin-bottom: 2.5rem; }
          .svc-grid { grid-template-columns: 1fr; max-width: 400px; margin: 0 auto; }
          .svc-card { padding: 1.5rem; }
          .svc-title { font-size: 1.1rem; }
          .svc-desc { font-size: 0.85rem; }
          .svc-num { font-size: 1.75rem; }
        }

        @media (max-width: 400px) {
          .svc-tag { font-size: 0.63rem; padding: 0.18rem 0.4rem; }
        }
      `}</style>
    </section>
  );
}
