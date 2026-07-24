import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] } }),
};

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setForm({ name: "", email: "", service: "", message: "" });
      setTimeout(() => setSent(false), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-divider-top">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 L0,0 C360,80 720,0 1080,80 C1260,80 1380,40 1440,0 L1440,80 Z" fill="var(--bg-secondary)" />
        </svg>
      </div>

      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp} custom={0}
          >
            <span className="subtitle-badge">Contact</span>
            <h2 className="section-title">
              Let's Build <span className="metallic-text">Together</span>
            </h2>
            <p className="section-desc">
              Tell us about your project. We'll respond within 24 hours with a clear plan, price estimate, and timeline.
            </p>
            <div className="contact-alt">
              <div className="contact-alt-item">
                <Mail size={16} />
                <span>hello@shiftlogic.io</span>
              </div>
              <div className="contact-alt-item">
                <MessageSquare size={16} />
                <span>DM us on X / Twitter</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form glass-card"
            onSubmit={submit}
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
            variants={fadeUp} custom={1}
          >
            <div className="form-row">
              <div className="form-group">
                <label><User size={13} /> Name</label>
                <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" required />
              </div>
              <div className="form-group">
                <label><Mail size={13} /> Email</label>
                <input type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" required />
              </div>
            </div>

            <div className="form-group">
              <label><MessageSquare size={13} /> What do you need?</label>
              <select value={form.service} onChange={e => setForm({...form, service: e.target.value})} required>
                <option value="" disabled>Select a service...</option>
                <option value="custom-product">Custom Digital Product</option>
                <option value="ai-automation">AI & Workflow Automation</option>
                <option value="creator-assets">Creator Asset Packs</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="form-group">
              <label><MessageSquare size={13} /> Tell us more</label>
              <textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Describe your project, goals, timeline, or any questions..." rows={4} required />
            </div>

            <button type="submit" className="shimmer-button form-btn" disabled={loading}>
              {sent ? (
                <><CheckCircle size={16} /><span>Sent!</span></>
              ) : loading ? (
                <span>Sending...</span>
              ) : (
                <><Send size={16} /><span>Send Message</span><ArrowRight size={15} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 6rem 0 7rem 0;
          background-color: var(--bg-secondary);
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: flex-start;
        }

        .contact-info .section-desc { margin-bottom: 2rem; }

        .contact-alt {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .contact-alt-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.87rem;
          color: var(--text-secondary);
        }
        .contact-alt-item svg { color: var(--text-muted); }

        .contact-form { padding: 2.25rem; }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 0;
        }

        .form-group { margin-bottom: 1.15rem; }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.73rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.45rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.8rem 1rem;
          color: var(--text-primary);
          font-size: 0.9rem;
          font-family: 'Outfit', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: var(--border-focus);
        }

        .form-group select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .form-btn {
          width: 100%;
          padding: 0.85rem !important;
          font-size: 0.93rem;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .contact-section { padding: 4rem 0 5rem 0; }
          .contact-grid { grid-template-columns: 1fr; gap: 2rem; }
          .contact-form { padding: 1.5rem; }
        }

        @media (max-width: 480px) {
          .form-row { grid-template-columns: 1fr; }
          .form-group input,
          .form-group select,
          .form-group textarea { font-size: 0.85rem; padding: 0.7rem 0.85rem; }
        }
      `}</style>
    </section>
  );
}
