import React from "react";
import { FolderCode, Workflow, Film, ArrowRight } from "lucide-react";

export default function Services() {
  const serviceItems = [
    {
      icon: <FolderCode size={32} />,
      title: "Bespoke Digital Products",
      subtitle: "Tailored to convert",
      desc: "We build custom asset packs, notion hubs, presets, software utilities, and PDF knowledge courses designed specifically to monetize your audience and expand your product catalog."
    },
    {
      icon: <Workflow size={32} />,
      title: "AI Integration & Automation",
      subtitle: "Optimize operations",
      desc: "Hire your first autonomous team. We design custom AI agents, automated database workflows, and automated customer support frameworks to reduce overhead down to zero."
    },
    {
      icon: <Film size={32} />,
      title: "Creator Assets & Presets",
      subtitle: "Boost editor output",
      desc: "For editors, production teams, and YouTubers. We compile high-end LUTs, transition packs, overlay suites, and sound library platforms that reduce rendering cycles and editing hours."
    }
  ];

  return (
    <section id="services" className="services-section fade-in-section">
      <div className="container">
        
        {/* Header */}
        <div className="services-header">
          <span className="subtitle-badge">Services</span>
          <h2 className="section-title">
            Our Agency <span className="metallic-text">Capabilities</span>
          </h2>
          <p className="services-subtitle-text">
            We operate in two modes: producing high-performing commercial digital assets of our own, and engineering tailored solutions to automate operations for creator businesses and tech firms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {serviceItems.map((item, idx) => (
            <div key={idx} className="service-card glass-card glow-card-hover">
              <div className="service-icon-container">
                {item.icon}
              </div>
              <div className="service-meta">
                <span className="service-badge">{item.subtitle}</span>
                <h3 className="service-card-title">{item.title}</h3>
              </div>
              <p className="service-card-desc">{item.desc}</p>
              <div className="service-action">
                <span className="action-text">Inquire for custom builds</span>
                <ArrowRight size={16} className="arrow-icon" />
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .services-section {
          padding: 8rem 0;
          background-color: var(--bg-secondary);
          position: relative;
        }

        .services-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem auto;
        }

        .services-subtitle-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-top: 1rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .service-card {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          height: 100%;
          padding: 2.5rem;
          border-radius: 20px;
          background: var(--bg-card);
        }

        .service-icon-container {
          color: var(--text-primary);
          background: var(--border-color);
          width: 64px;
          height: 64px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          border: 1px solid var(--border-color);
        }

        [data-theme="light"] .service-icon-container {
          background: rgba(0, 0, 0, 0.05);
        }

        .service-meta {
          margin-bottom: 1rem;
        }

        .service-badge {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          display: inline-block;
          margin-bottom: 0.25rem;
        }

        .service-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .service-card-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          flex-grow: 1;
        }

        .service-action {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-primary);
          cursor: pointer;
          transition: gap 0.2s ease;
        }

        .service-card:hover .service-action {
          gap: 0.75rem;
        }

        .arrow-icon {
          transition: transform 0.2s ease;
        }

        .service-card:hover .arrow-icon {
          transform: translateX(3px);
        }

        .action-text {
          border-bottom: 1px solid transparent;
        }

        .service-card:hover .action-text {
          border-color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
