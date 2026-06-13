import React from "react";
import { Brain, Cpu, Users, BarChart3 } from "lucide-react";

export default function AboutUs() {
  const aiStaff = [
    {
      icon: <BarChart3 size={24} />,
      title: "Alex (AI Marketing)",
      desc: "Autonomously drafts high-converting campaigns, runs copy optimization, and manages distribution channels."
    },
    {
      icon: <Users size={24} />,
      title: "Sarah (AI Lead Gen)",
      desc: "Scours digital ecosystems to filter outreach targets, analyzes client conversion metrics, and drafts pitches."
    },
    {
      icon: <Cpu size={24} />,
      title: "Synthesizer AI (Product Dev)",
      desc: "Generates templates, code assets, and educational material dynamically based on trending market demands."
    },
    {
      icon: <Brain size={24} />,
      title: "Insight AI (Research)",
      desc: "Processes massive search data to locate niches, analyzes competitors, and evaluates Whop trend curves."
    }
  ];

  return (
    <section id="about" className="about-section fade-in-section">
      <div className="container">
        <div className="about-grid">
          
          {/* Left Column: Narrative */}
          <div className="about-content">
            <span className="subtitle-badge">Our Genesis</span>
            <h2 className="section-title">
              An Empire Powered Entirely by <span className="metallic-text">Autonomous Intellect</span>
            </h2>
            <p className="about-text">
              ShiftLogic represents the next evolutionary step in company structures. We don't hire standard overhead. Instead, our entire operation runs on a highly specialized network of custom artificial intelligence nodes.
            </p>
            <p className="about-text">
              By using AI at our core, we scale digital product development in fractions of the traditional time. We create bespoke digital assets, launch high-yield products on platforms like Whop, and help creators build their own digital monetization frameworks.
            </p>
            <div className="stats-row">
              <div className="stat-box">
                <span className="stat-number">100%</span>
                <span className="stat-label">AI Managed</span>
              </div>
              <div className="stat-box border-left">
                <span className="stat-number">2+</span>
                <span className="stat-label">Active Products</span>
              </div>
              <div className="stat-box border-left">
                <span className="stat-number">14K+</span>
                <span className="stat-label">Clients Reached</span>
              </div>
            </div>
          </div>

          {/* Right Column: AI Node Map */}
          <div className="ai-nodes-container">
            <h3 className="nodes-title">Autonomous Core Operations</h3>
            <div className="nodes-grid">
              {aiStaff.map((staff, idx) => (
                <div key={idx} className="node-card glass-card glow-card-hover">
                  <div className="node-icon-wrapper">
                    {staff.icon}
                  </div>
                  <h4 className="node-card-title">{staff.title}</h4>
                  <p className="node-card-desc">{staff.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .about-section {
          padding: 8rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 5rem;
          align-items: center;
        }

        .section-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.2;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        .about-text {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .stats-row {
          display: flex;
          gap: 2rem;
          margin-top: 3rem;
        }

        .stat-box {
          display: flex;
          flex-direction: column;
        }

        .border-left {
          padding-left: 2rem;
          border-left: 1px solid var(--border-color);
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          background: var(--chrome-silver);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 0.25rem;
        }

        .ai-nodes-container {
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.01) 0%, rgba(255, 255, 255, 0.03) 100%);
          border: 1px solid var(--border-color);
          border-radius: 24px;
          padding: 2.5rem;
          box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.02);
        }

        .nodes-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
          text-align: center;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .nodes-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        .node-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          border-radius: 12px;
          background: var(--bg-card);
        }

        .node-icon-wrapper {
          color: var(--text-primary);
          background: var(--border-color);
          width: 45px;
          height: 45px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.25rem;
        }

        [data-theme="light"] .node-icon-wrapper {
          background: rgba(0, 0, 0, 0.05);
        }

        .node-card-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .node-card-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        @media (max-width: 992px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 2.25rem;
          }
          .stats-row {
            flex-direction: column;
            gap: 1.5rem;
          }
          .border-left {
            padding-left: 0;
            border-left: none;
            border-top: 1px solid var(--border-color);
            padding-top: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
