import React from "react";
import { ArrowRight, Sparkles, Terminal } from "lucide-react";

export default function Hero({ onExploreClick, onCustomClick }) {
  return (
    <section className="hero-section fade-in-section">
      {/* Visual background elements */}
      <div className="hero-blur-orb orb-1"></div>
      <div className="hero-blur-orb orb-2"></div>

      <div className="container hero-container">
        
        {/* Subtitle Badge */}
        <div className="hero-badge float-animation">
          <Sparkles size={14} className="badge-spark" />
          <span>The Next Gen Digital Product Empire</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          Synthesizing Digital Value <br />
          Through <span className="metallic-text">Autonomous AI</span>
        </h1>

        {/* Description */}
        <p className="hero-desc">
          ShiftLogic creates high-yield digital assets and automation structures. Running entirely on custom artificial intelligence agents, we launch premium products on Whop and engineer bespoke workflows for creators and enterprises.
        </p>

        {/* CTA Buttons */}
        <div className="hero-ctas">
          <button className="shimmer-button" onClick={onExploreClick}>
            <span>Explore Products</span>
            <ArrowRight size={18} />
          </button>
          
          <button className="border-button" onClick={onCustomClick}>
            <span>Custom Asset Engineering</span>
          </button>
        </div>

      </div>

      <style>{`
        .hero-section {
          padding: 12rem 0 8rem 0;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background-color: var(--bg-primary);
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Blurs */
        .hero-blur-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          z-index: 1;
          pointer-events: none;
        }

        .orb-1 {
          top: 15%;
          right: 10%;
          width: 350px;
          height: 350px;
          background: #ffffff;
        }

        .orb-2 {
          bottom: 10%;
          left: 5%;
          width: 400px;
          height: 400px;
          background: #7d8191;
        }

        [data-theme="light"] .hero-blur-orb {
          opacity: 0.08;
        }

        .hero-container {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-color);
          border-radius: 100px;
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        [data-theme="light"] .hero-badge {
          background: rgba(0, 0, 0, 0.03);
        }

        .badge-spark {
          color: var(--text-primary);
        }

        .hero-title {
          font-size: 4.25rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.04em;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .hero-desc {
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-secondary);
          max-width: 800px;
          margin-bottom: 3.5rem;
          font-weight: 400;
        }

        .hero-ctas {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.85rem;
          }
          .hero-desc {
            font-size: 1.1rem;
          }
          .hero-ctas {
            flex-direction: column;
            width: 100%;
            max-width: 320px;
            margin: 0 auto;
          }
          .hero-ctas button {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
