import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] } }),
};

const faqs = [
  { q: "What kind of products do you sell?", a: "We sell premium editing asset packs — LUTs, transitions, overlays, sound libraries — for video creators. We also publish educational guides on AI prompt engineering and automation. Everything is available on Whop." },
  { q: "Can you build custom products for my brand?", a: "Yes — that's a core part of what we do. We build custom asset packs, branded presets, workflow automations, and AI tools tailored to your needs. Use the contact form to start." },
  { q: "How does the AI automation service work?", a: "We design and deploy custom AI agents and pipelines — automated customer support, lead generation, content scheduling, and internal workflow tools. We handle everything from discovery to deployment." },
  { q: "How long does a custom project take?", a: "Most projects are delivered in 1-4 weeks depending on scope. You'll get a clear timeline after our first conversation, and regular progress updates throughout." },
  { q: "Subscription or one-time purchase?", a: "Creator Lab is $20/month with ongoing access to the asset library. AI Blueprint is a one-time $15 purchase with lifetime access. Custom projects are quoted per engagement." },
  { q: "What software do your assets support?", a: "Premiere Pro, DaVinci Resolve, Final Cut Pro, and CapCut. Notion templates work in any Notion workspace. PDF guides work everywhere." },
  { q: "What's your refund policy?", a: "Whop products follow Whop's platform refund policy. For custom agency projects, we offer a satisfaction guarantee — revisions until you're happy." },
];

function FAQItem({ faq, i }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className={`faq-item ${open ? "open" : ""}`}
      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}
      variants={fadeUp} custom={i + 1}
    >
      <button className="faq-trigger" onClick={() => setOpen(!open)}>
        <HelpCircle size={15} className="faq-q-icon" />
        <span>{faq.q}</span>
        <motion.span className="faq-chevron" animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown size={15} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="faq-answer-wrap"
          >
            <p className="faq-answer">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <motion.div
          className="faq-header"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp} custom={0}
        >
          <span className="subtitle-badge">FAQ</span>
          <h2 className="section-title">
            Got <span className="metallic-text">Questions?</span>
          </h2>
        </motion.div>

        <div className="faq-list">
          {faqs.map((f, i) => <FAQItem key={i} faq={f} i={i} />)}
        </div>
      </div>

      <style>{`
        .faq-section {
          padding: 7rem 0;
          background-color: var(--bg-primary);
          position: relative;
        }

        .faq-header {
          text-align: center;
          max-width: 450px;
          margin: 0 auto 3rem auto;
        }

        .faq-list {
          max-width: 660px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .faq-item {
          background: var(--bg-card);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.25s;
        }
        .faq-item.open { border-color: var(--border-focus); }

        .faq-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          background: none;
          border: none;
          padding: 1.1rem 1.25rem;
          color: var(--text-primary);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          text-align: left;
        }

        .faq-q-icon { color: var(--text-muted); flex-shrink: 0; }
        .faq-trigger span { flex-grow: 1; }

        .faq-chevron {
          color: var(--text-muted);
          flex-shrink: 0;
          display: flex;
        }

        .faq-answer-wrap { overflow: hidden; }
        .faq-answer {
          padding: 0 1.25rem 1.1rem 2.5rem;
          font-size: 0.86rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        /* Mobile */
        @media (max-width: 640px) {
          .faq-section { padding: 4rem 0; }
          .faq-trigger { font-size: 0.85rem; padding: 1rem 1.15rem; gap: 0.5rem; }
          .faq-answer { padding: 0 1.15rem 1rem 2.25rem; font-size: 0.81rem; }
        }
      `}</style>
    </section>
  );
}
