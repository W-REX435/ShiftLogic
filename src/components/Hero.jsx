import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap, Users } from "lucide-react";
import heroImg from "../assets/hero.webp";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero({ onExploreClick, onCustomClick }) {
  return (
    <section className="hero-section">
      <div className="animated-grid-bg"></div>

      <motion.div
        className="hero-blur-orb orb-left"
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], opacity: [0.1, 0.18, 0.1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blur-orb orb-right"
        animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-blur-orb orb-center"
        animate={{ scale: [0.9, 1.2, 0.9], y: [0, -20, 0], opacity: [0.06, 0.1, 0.06] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container hero-container">
        <div className="hero-layout">
          <motion.div
            className="hero-content"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="hero-badge-row" variants={item}>
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-text">Digital Products & AI Automation</span>
            </motion.div>

            <motion.h1 className="hero-title" variants={item}>
              Turn Ideas Into
              <br />
              <span className="metallic-text">Income</span>
            </motion.h1>

            <motion.p className="hero-desc" variants={item}>
              We build premium digital products and smart automations that creators
              actually pay for. Editing packs, AI tools, and custom solutions — shipped fast,
              built to perform.
            </motion.p>

            <motion.div className="hero-ctas" variants={item}>
              <button className="shimmer-button hero-btn" onClick={onExploreClick}>
                <span>See Our Products</span>
                <ArrowRight size={18} />
              </button>
              <button className="border-button hero-btn" onClick={onCustomClick}>
                <Zap size={16} />
                <span>Work With Us</span>
              </button>
            </motion.div>

            <motion.div className="hero-proof" variants={item}>
              <div className="hero-proof-avatars">
                <img
                  src="https://i.pravatar.cc/80?u=dylan"
                  alt="Customer"
                  className="hp-avatar-img hp-av-1"
                />
                <img
                  src="https://i.pravatar.cc/80?u=marcus"
                  alt="Customer"
                  className="hp-avatar-img hp-av-2"
                />
                <img
                  src="https://i.pravatar.cc/80?u=elena"
                  alt="Customer"
                  className="hp-avatar-img hp-av-3"
                />
                <div className="hp-avatar-more">
                  <Users size={14} />
                </div>
              </div>
              <div className="hero-proof-text">
                <div className="hero-stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#fbbf24" color="#fbbf24" />)}
                </div>
                <span>Loved by <strong>1,420+</strong> creators</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero-img-wrapper">
              <img src={heroImg} alt="ShiftLogic product dashboard" className="hero-img" />
              <div className="hero-img-glow"></div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .hero-section {
          padding: 7rem 0 5rem 0;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        .hero-blur-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(140px);
          pointer-events: none;
          z-index: 0;
        }
        .orb-left { top: 5%; left: -5%; width: 450px; height: 450px; background: #ffffff; }
        .orb-right { bottom: 10%; right: -5%; width: 400px; height: 400px; background: #7d8191; }
        .orb-center { top: 40%; left: 30%; width: 300px; height: 300px; background: #b5b9c8; }
        [data-theme="light"] .hero-blur-orb { opacity: 0.4 !important; }

        .hero-container { position: relative; z-index: 2; }

        .hero-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content { padding-top: 2rem; }

        .hero-badge-row {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .hero-badge-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: var(--green-active);
          animation: pulse-glow-anim 2s infinite;
        }

        .hero-badge-text {
          font-size: 0.82rem;
          font-weight: 500;
          color: var(--text-secondary);
          letter-spacing: 0.03em;
        }

        .hero-title {
          font-size: 4.5rem;
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .hero-desc {
          font-size: 1.15rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 520px;
          margin-bottom: 2.5rem;
        }

        .hero-ctas { display: flex; gap: 1rem; margin-bottom: 3rem; flex-wrap: wrap; }
        .hero-btn { padding: 0.9rem 2rem !important; font-size: 0.95rem; }

        .hero-proof {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hero-proof-avatars {
          display: flex;
          align-items: center;
        }

        .hp-avatar-img {
          width: 38px; height: 38px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--border-color);
          display: block;
        }

        .hp-av-1 { z-index: 1; }
        .hp-av-2 { margin-left: -10px; z-index: 2; }
        .hp-av-3 { margin-left: -10px; z-index: 3; }

        .hp-avatar-more {
          margin-left: -10px;
          z-index: 4;
          width: 38px; height: 38px;
          border-radius: 50%;
          border: 2px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--border-color);
          color: var(--text-muted);
        }

        .hero-proof-text {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .hero-stars { display: flex; gap: 2px; }
        .hero-proof-text span {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }
        .hero-proof-text strong { color: var(--text-primary); }

        .hero-visual {
          perspective: 800px;
          display: flex;
          justify-content: center;
        }

        .hero-img-wrapper {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5), 0 0 80px rgba(255,255,255,0.05);
          border: 1px solid var(--border-color);
          max-width: 480px;
        }

        .hero-img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 20px;
        }

        .hero-img-glow {
          position: absolute;
          inset: -2px;
          border-radius: 22px;
          background: linear-gradient(135deg, rgba(255,255,255,0.08), transparent 60%);
          pointer-events: none;
        }

        @media (max-width: 992px) {
          .hero-layout { grid-template-columns: 1fr; gap: 3rem; text-align: center; }
          .hero-content { display: flex; flex-direction: column; align-items: center; }
          .hero-desc { margin-left: auto; margin-right: auto; }
          .hero-title { font-size: 3.2rem; }
          .hero-proof { justify-content: center; }
          .hero-visual { max-width: 400px; margin: 0 auto; }
        }

        @media (max-width: 576px) {
          .hero-section { padding: 5rem 0 3rem 0; min-height: auto; }
          .hero-title { font-size: 2.4rem; }
          .hero-desc { font-size: 1rem; }
          .hero-ctas { flex-direction: column; width: 100%; }
          .hero-btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
