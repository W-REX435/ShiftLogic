import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Flame, BookOpen, Lock, Star } from "lucide-react";
import creatorLabImg from "../assets/creator-lab.webp";
import aiBlueprintImg from "../assets/ai-blueprint.webp";
import aegisImg from "../assets/aegis-engine.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const products = [
  {
    badge: "Best Seller", badgeColor: "#ff5e3a",
    title: "Creator Lab",
    subtitle: "The Complete Editing Workspace",
    desc: "Premium LUTs, transitions, sound design, motion graphics, and rendering presets — all in one place. Works with Premiere Pro, Resolve, and FCP.",
    whopUrl: "https://whop.com/joined/mrnome/",
    icon: <Flame size={22} />,
    iconBg: "linear-gradient(135deg, #ff5e3a, #ff3a2e)",
    stats: ["840+ Subscribers", "Discord Community", "All major NLEs"],
    accent: "rgba(255, 94, 58, 0.1)",
    image: creatorLabImg,
  },
  {
    badge: "Top Guide", badgeColor: "#3b82f6",
    title: "AI Blueprint",
    subtitle: "Prompt Engineering Playbook",
    desc: "Our internal guide to writing better prompts, building automation workflows, and designing custom AI agents. Fully illustrated with practical templates.",
    whopUrl: "https://whop.com/joined/promptvault-ai-af0f/",
    icon: <BookOpen size={22} />,
    iconBg: "linear-gradient(135deg, #3b82f6, #2563eb)",
    stats: ["580+ Copies Sold", "Illustrated PDF", "Copy Templates"],
    accent: "rgba(59, 130, 246, 0.1)",
    image: aiBlueprintImg,
  },
  {
    badge: "Coming Q4", badgeColor: "#8b5cf6",
    title: "Aegis Engine",
    subtitle: "AI Automation Hub",
    desc: "A control hub connecting social APIs, search matrices, and local directories to deploy autonomous customer response and workflow funnels.",
    whopUrl: "#",
    icon: <Lock size={22} />,
    iconBg: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
    stats: ["Q4 2026 Launch", "Beta Signups Open", "Multi-Agent Chat"],
    accent: "rgba(139, 92, 246, 0.05)",
    locked: true,
    image: aegisImg,
  },
];

const reviews = [
  { name: "Dylan Reed", role: "Lead Editor, TechVids", rating: 5, comment: "Creator Lab saved me dozens of hours on manual keyframing. The transition packs drop straight into Premiere. Worth every dollar." },
  { name: "Marcus Vance", role: "Founder, Zenith Media", rating: 5, comment: "The AI Blueprint cut our learning curve by months. Actual structural formulas we use daily for client work." },
  { name: "Elena Rostova", role: "Digital Artist & YouTuber", rating: 5, comment: "ShiftLogic built a custom asset portal for my course launch. Brand matched perfectly, backend runs on autopilot." },
  { name: "James Cole", role: "Video Producer, MotionFirst", rating: 5, comment: "The LUT packs are incredible. Color grading that used to take me an hour now takes 10 minutes. Game changer." },
  { name: "Priya Sharma", role: "Content Creator, 200K subs", rating: 5, comment: "Their AI automation saved my team 15 hours a week. The custom workflow they built handles everything from upload to publish." },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-section">
      <div className="section-divider-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 L0,0 C360,80 720,0 1080,80 C1260,80 1380,40 1440,0 L1440,80 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">Products</span>
          <h2 className="section-title">
            What We <span className="metallic-text">Ship</span>
          </h2>
        </motion.div>

        <div className="products-grid">
          {products.map((p, i) => (
            <motion.div
              key={i}
              className={`product-card gradient-border-card ${p.locked ? "locked" : "glow-card-hover"}`}
              style={{ "--accent": p.accent }}
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp} custom={i + 1}
            >
              <div className="prod-image-wrap">
                <img src={p.image} alt={p.title} className="prod-image" />
              </div>
              <div className="prod-top">
                <span className="prod-badge" style={{ color: p.badgeColor, background: `${p.badgeColor}15` }}>
                  {p.badge}
                </span>
                <div className="prod-icon-box" style={{ background: p.iconBg }}>
                  {p.icon}
                </div>
              </div>
              <h3 className="prod-title">{p.title}</h3>
              <h4 className="prod-sub">{p.subtitle}</h4>
              <p className="prod-desc">{p.desc}</p>
              <ul className="prod-list">
                {p.stats.map((s, si) => (
                  <li key={si}><span className="prod-bullet"></span>{s}</li>
                ))}
              </ul>
              <div className="prod-footer">
                {p.locked ? (
                  <button className="border-button prod-btn-locked" disabled>Coming Q4 2026</button>
                ) : (
                  <a href={p.whopUrl} target="_blank" rel="noopener noreferrer" className="shimmer-button prod-btn">
                    View on Whop <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
          variants={fadeUp} custom={4}
        >
          <span className="subtitle-badge" style={{ display: "table", margin: "0 auto 1rem auto" }}>Testimonials</span>
          <h3 className="test-title">What Our Customers Say</h3>

          <div className="test-marquee-wrap">
            <div className="test-marquee-track">
              {[...reviews, ...reviews].map((r, i) => (
                <div key={i} className="test-marquee-card glass-card">
                  <div className="test-card-top">
                    <img
                      src={`https://i.pravatar.cc/80?u=${r.name.toLowerCase().replace(/\s+/g, "")}`}
                      alt={r.name}
                      className="test-card-avatar"
                    />
                    <div>
                      <h4 className="test-card-name">{r.name}</h4>
                      <span className="test-card-role">{r.role}</span>
                    </div>
                  </div>
                  <div className="test-stars">
                    {[...Array(5)].map((_, si) => <Star key={si} size={12} fill="#fbbf24" color="#fbbf24" />)}
                  </div>
                  <p className="test-card-comment">"{r.comment}"</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .portfolio-section {
          padding: 6rem 0 8rem 0;
          background-color: var(--bg-secondary);
          position: relative;
        }

        .section-header {
          text-align: center;
          max-width: 500px;
          margin: 0 auto 4rem auto;
        }

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .product-card {
          padding: 2.5rem;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--border-color);
        }

        .product-card.locked {
          opacity: 0.55;
          border-style: dashed;
        }

        .prod-image-wrap {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 1.25rem;
          border: 1px solid var(--border-color);
        }

        .prod-image {
          display: block;
          width: 100%;
          height: 160px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .product-card:hover .prod-image {
          transform: scale(1.04);
        }

        .prod-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.25rem;
        }

        .prod-badge {
          font-size: 0.68rem;
          font-weight: 700;
          padding: 0.3rem 0.7rem;
          border-radius: 50px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .prod-icon-box {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .prod-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.02em;
          margin-bottom: 0.2rem;
        }

        .prod-sub {
          font-size: 0.88rem;
          font-weight: 500;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .prod-desc {
          font-size: 0.88rem;
          line-height: 1.55;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          flex-grow: 1;
        }

        .prod-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 2rem;
          padding-top: 1.25rem;
          border-top: 1px solid var(--border-color);
        }

        .prod-list li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.83rem;
          color: var(--text-secondary);
        }

        .prod-bullet {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--text-muted);
          flex-shrink: 0;
        }

        .prod-footer { margin-top: auto; }

        .prod-btn, .prod-btn-locked {
          width: 100%;
          text-decoration: none;
        }

        .prod-btn-locked {
          cursor: not-allowed !important;
          opacity: 0.4;
        }

        /* Testimonials Marquee */
        .testimonials {
          max-width: 100%;
          padding: 3rem 0 2rem 0;
          text-align: center;
          overflow: hidden;
        }

        .test-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 2.5rem;
          letter-spacing: -0.02em;
        }

        .test-marquee-wrap {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .test-marquee-track {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: scroll-reviews 40s linear infinite;
        }

        .test-marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-reviews {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .test-marquee-card {
          width: 340px;
          flex-shrink: 0;
          padding: 1.75rem;
          text-align: left;
          border-radius: 16px;
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
        }

        .test-card-top {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .test-card-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        .test-card-name {
          font-size: 0.92rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .test-card-role {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .test-stars {
          display: flex;
          gap: 1px;
          margin-bottom: 0.75rem;
        }

        .test-card-comment {
          font-size: 0.85rem;
          line-height: 1.55;
          font-style: italic;
          color: var(--text-secondary);
        }

        @media (max-width: 640px) {
          .test-marquee-card { width: 280px; padding: 1.25rem; }
          .test-title { font-size: 1.4rem; margin-bottom: 1.5rem; }
        }

        @media (max-width: 992px) {
          .products-grid { grid-template-columns: 1fr; max-width: 450px; margin-left: auto; margin-right: auto; margin-bottom: 5rem; }
        }
      `}</style>
    </section>
  );
}
