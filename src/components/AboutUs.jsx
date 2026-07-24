import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Package, Briefcase, Zap, TrendingUp, Users, Star, DollarSign } from "lucide-react";

function CountUp({ end, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let cur = 0;
          const total = duration * 60;
          const t = setInterval(() => {
            cur += end / total;
            if (cur >= end) { setCount(end); clearInterval(t); }
            else { setCount(Math.floor(cur)); }
          }, 1000 / 60);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const stats = [
  { icon: <Users size={20} />, end: 1420, suffix: "+", label: "Customers", color: "#3b82f6" },
  { icon: <DollarSign size={20} />, end: 28, suffix: "K+", label: "Revenue", color: "#10b981" },
  { icon: <Star size={20} />, end: 4.9, suffix: "", label: "Avg Rating", color: "#f59e0b" },
  { icon: <Package size={20} />, end: 3, suffix: "", label: "Products", color: "#8b5cf6" },
];

const cards = [
  {
    icon: <Package size={22} />,
    title: "We Publish Products",
    desc: "We design, build, and sell premium digital products — editing packs, preset libraries, and educational guides — that creators actually use daily.",
  },
  {
    icon: <Briefcase size={22} />,
    title: "We Build for Clients",
    desc: "We work directly with creators and businesses to deliver custom digital assets, automation workflows, and AI-powered tools — on time and on spec.",
  },
  {
    icon: <Zap size={22} />,
    title: "We Move Fast",
    desc: "AI accelerates everything we do — from market research to production. Most projects ship in days, not weeks.",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "We Deliver Results",
    desc: "Our products are used by editors whose content reaches millions. Our clients come back because the work performs.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="section-divider-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 L0,0 C360,80 720,0 1080,80 C1260,80 1380,40 1440,0 L1440,80 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>

      <div className="container">
        <motion.div
          className="about-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">About ShiftLogic</span>

          <div className="about-stats-row">
            {stats.map((s, i) => (
              <div key={i} className="about-stat">
                <div className="about-stat-ring" style={{ borderColor: s.color }}>
                  <span style={{ color: s.color }}>{s.icon}</span>
                </div>
                <span className="about-stat-val metallic-text">
                  <CountUp end={s.end} suffix={s.suffix} />
                </span>
                <span className="about-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="about-grid">
          <motion.div
            className="about-main-card gradient-border-card glow-card-hover"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp} custom={1}
          >
            <h2 className="about-main-title">
              We Build <span className="metallic-text">Digital Products</span> That People Pay For
            </h2>
            <p className="about-main-desc">
              ShiftLogic is a digital products company operating in two ways — we publish our own
              products for creators, and we build custom solutions for businesses. Every product we
              ship solves a real problem. No fluff, no filler — just useful tools people want to buy.
            </p>
          </motion.div>

          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="about-card glass-card glow-card-hover"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i + 2}
            >
              <div className="about-card-icon">{card.icon}</div>
              <h3 className="about-card-title">{card.title}</h3>
              <p className="about-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0 8rem 0;
          background-color: var(--bg-secondary);
          position: relative;
        }

        .about-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .about-stats-row {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
        }

        .about-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .about-stat-ring {
          width: 52px; height: 52px;
          border-radius: 50%;
          border: 2px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
        }

        .about-stat-val {
          font-size: 2rem;
          font-weight: 800;
        }

        .about-stat-lbl {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 1.5rem;
        }

        .about-main-card {
          grid-row: span 2;
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .about-main-title {
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .about-main-desc {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
        }

        .about-card {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .about-card-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
        }

        [data-theme="light"] .about-card-icon { background: rgba(0,0,0,0.03); }

        .about-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .about-card-desc {
          font-size: 0.87rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        /* Mobile */
        @media (max-width: 768px) {
          .about-section { padding: 4rem 0 5rem 0; }

          .about-stats-row { gap: 1.5rem; }

          .about-stat-ring { width: 44px; height: 44px; }
          .about-stat-val { font-size: 1.5rem; }

          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-main-card { grid-row: auto; }
          .about-main-title { font-size: 1.6rem; }
          .about-main-desc { font-size: 0.95rem; }

          .about-card { padding: 1.25rem; }
        }

        @media (max-width: 480px) {
          .about-stats-row { gap: 1rem; }
          .about-stat-val { font-size: 1.3rem; }
          .about-main-title { font-size: 1.4rem; }
          .about-card-title { font-size: 0.95rem; }
          .about-card-desc { font-size: 0.82rem; }
        }
      `}</style>
    </section>
  );
}
