import React, { useState } from "react";
import { ExternalLink, Flame, BookOpen, Lock, Star, ChevronLeft, ChevronRight } from "lucide-react";

export default function Portfolio() {
  const [activeReview, setActiveReview] = useState(0);

  const products = [
    {
      badge: "ACTIVE UTILITY",
      title: "Creator Lab",
      subtitle: "The Editor's Holy Grail",
      desc: "An all-in-one editing asset workspace hosting premium LUTs, audio overlays, sound design assets, visual presets, and speed-rendering workflows.",
      whopUrl: "https://whop.com/joined/mrnome/",
      icon: <Flame className="prod-icon-lab" size={24} />,
      metrics: ["840+ Subscribers", "Discord Community Access", "Universal App Preset Supports"],
      themeGlow: "rgba(255, 255, 255, 0.04)"
    },
    {
      badge: "AI EDUCATIONAL BLUEPRINT",
      title: "AI Blueprint PDF",
      subtitle: "Prompt Engineering Protocols",
      desc: "Our complete internal playbook. Learn how to script custom tools, automate copy creation, and design AI agent nodes that execute complex operations.",
      whopUrl: "https://whop.com/joined/promptvault-ai-af0f/",
      icon: <BookOpen className="prod-icon-blueprint" size={24} />,
      metrics: ["580+ Copies Acquired", "Fully Illustrated PDF Guide", "Copywriting Templates Included"],
      themeGlow: "rgba(255, 255, 255, 0.04)"
    },
    {
      badge: "IN DEVELOPMENT",
      title: "Aegis Engine",
      subtitle: "AI Automation Infrastructure",
      desc: "An upcoming control hub designed to hook into social APIs, scraped search matrices, and local directories to deploy autonomous customer response funnels.",
      whopUrl: "#",
      icon: <Lock className="prod-icon-lock" size={24} />,
      metrics: ["Releasing Q4 2026", "Closed Beta Applications Open", "Multi-Agent Chat Integrations"],
      themeGlow: "rgba(255, 255, 255, 0.01)",
      isLocked: true
    }
  ];

  const reviews = [
    {
      name: "Dylan Reed",
      role: "Lead Editor, TechVids (1.2M Subs)",
      rating: 5,
      comment: "Creator Lab has saved me dozens of hours on manual keyframing. The transition packs are super clean and drop straight into Premiere without lag. Absolutely worth the monthly subscription.",
      avatar: "🎬"
    },
    {
      name: "Marcus Vance",
      role: "Founder, Zenith Media Agency",
      rating: 5,
      comment: "The AI Blueprint cut down our learning curve by months. Most prompt courses are generic, but this is highly structural. We used their templates to automate our client cold pitches.",
      avatar: "💼"
    },
    {
      name: "Elena Rostova",
      role: "Digital Artist & YouTuber",
      rating: 5,
      comment: "ShiftLogic's team built a custom asset portal for my course launch. The visual style matches my brand perfectly and the backend is completely automated. Extremely satisfied!",
      avatar: "🎨"
    }
  ];

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextReview = () => {
    setActiveReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="portfolio" className="portfolio-section fade-in-section">
      <div className="container">
        
        {/* Header */}
        <div className="portfolio-header">
          <span className="subtitle-badge">Portfolio</span>
          <h2 className="section-title">
            Our Digital <span className="metallic-text">Empire</span>
          </h2>
          <p className="portfolio-subtitle-text">
            These are our current active digital products available on Whop. Explore the tools and learn how we construct automated passive pipelines.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {products.map((prod, idx) => (
            <div 
              key={idx} 
              className={`product-card glass-card ${prod.isLocked ? "locked-product" : "glow-card-hover"}`}
              style={{ boxShadow: `0 8px 32px 0 ${prod.themeGlow}` }}
            >
              <div className="product-top">
                <span className="prod-badge">{prod.badge}</span>
                <div className="prod-icon-box">{prod.icon}</div>
              </div>

              <div className="product-body">
                <h3 className="prod-title">{prod.title}</h3>
                <h4 className="prod-subtitle">{prod.subtitle}</h4>
                <p className="prod-desc">{prod.desc}</p>
                
                <ul className="prod-metrics-list">
                  {prod.metrics.map((metric, midx) => (
                    <li key={midx} className="prod-metric-item">
                      <span className="bullet"></span>
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="product-footer">
                {prod.isLocked ? (
                  <button className="border-button disabled-btn" disabled>
                    Locked in Development
                  </button>
                ) : (
                  <a 
                    href={prod.whopUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="shimmer-button whop-btn"
                  >
                    <span>Acquire on Whop</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="testimonials-container glass-card">
          <span className="subtitle-badge center-badge">Client Testimonials</span>
          <h3 className="testimonials-title">What the Community Says</h3>
          
          <div className="reviews-carousel">
            <button className="nav-arrow" onClick={handlePrevReview} aria-label="Previous Review">
              <ChevronLeft size={20} />
            </button>

            <div className="review-slide">
              <div className="review-avatar">{reviews[activeReview].avatar}</div>
              <div className="stars-row">
                {[...Array(reviews[activeReview].rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" className="star-icon" />
                ))}
              </div>
              <p className="review-comment">"{reviews[activeReview].comment}"</p>
              <h4 className="review-name">{reviews[activeReview].name}</h4>
              <span className="review-role">{reviews[activeReview].role}</span>
            </div>

            <button className="nav-arrow" onClick={handleNextReview} aria-label="Next Review">
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="carousel-dots">
            {reviews.map((_, idx) => (
              <span 
                key={idx} 
                className={`dot ${idx === activeReview ? "active" : ""}`}
                onClick={() => setActiveReview(idx)}
              ></span>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .portfolio-section {
          padding: 8rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .portfolio-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem auto;
        }

        .portfolio-subtitle-text {
          font-size: 1.1rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-top: 1rem;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-bottom: 7rem;
        }

        .product-card {
          display: flex;
          flex-direction: column;
          border-radius: 24px;
          padding: 2.5rem;
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          min-height: 520px;
        }

        .locked-product {
          opacity: 0.65;
          border-style: dashed;
        }

        .product-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .prod-badge {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--text-secondary);
          background: var(--border-color);
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          letter-spacing: 0.05em;
        }

        .prod-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          border: 1px solid var(--border-color);
        }

        .prod-icon-lab {
          color: #ff5e3a;
        }

        .prod-icon-blueprint {
          color: #3b82f6;
        }

        .prod-icon-lock {
          color: var(--text-muted);
        }

        .product-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .prod-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
        }

        .prod-subtitle {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-top: -0.25rem;
        }

        .prod-desc {
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .prod-metrics-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          margin-bottom: 2rem;
        }

        .prod-metric-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
        }

        .bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--text-muted);
        }

        .product-footer {
          width: 100%;
        }

        .whop-btn {
          width: 100%;
        }

        .disabled-btn {
          width: 100%;
          cursor: not-allowed;
          opacity: 0.5;
        }

        /* Testimonials Styles */
        .testimonials-container {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 4rem;
        }

        .center-badge {
          margin: 0 auto 1.5rem auto;
        }

        .testimonials-title {
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 3rem;
          letter-spacing: -0.02em;
        }

        .reviews-carousel {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .nav-arrow {
          background: var(--border-color);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .nav-arrow:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-focus);
        }

        .review-slide {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: slide-in 0.4s ease-out;
        }

        @keyframes slide-in {
          from {
            opacity: 0;
            transform: scale(0.97);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .review-avatar {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .stars-row {
          display: flex;
          gap: 0.25rem;
          color: #fbbf24;
          margin-bottom: 1.5rem;
        }

        .review-comment {
          font-size: 1.25rem;
          line-height: 1.6;
          font-style: italic;
          color: var(--text-primary);
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .review-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .review-role {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2.5rem;
        }

        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--border-color);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dot.active {
          width: 20px;
          border-radius: 4px;
          background-color: var(--text-primary);
        }

        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .product-card {
            min-height: auto;
          }
        }

        @media (max-width: 768px) {
          .testimonials-container {
            padding: 2rem;
          }
          .review-comment {
            font-size: 1.05rem;
          }
          .nav-arrow {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
