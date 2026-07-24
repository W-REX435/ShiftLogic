import React from "react";
import { Terminal } from "lucide-react";

export default function Footer({ onAdminClick }) {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-title">
              SHIFT<span className="metallic-text">LOGIC</span>
            </span>
            <p className="brand-tagline">
              Premium digital products and custom AI automation. Built for creators and businesses.
            </p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Site</h4>
            <a href="#about" className="footer-link">About</a>
            <a href="#services" className="footer-link">Services</a>
            <a href="#portfolio" className="footer-link">Products</a>
            <a href="#pricing" className="footer-link">Pricing</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Legal</h4>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright-text">
            &copy; {new Date().getFullYear()} ShiftLogic. All rights reserved.
          </div>
          <div className="admin-access-wrapper">
            <button className="admin-access-btn" onClick={onAdminClick} aria-label="Admin access">
              <Terminal size={12} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .footer-section {
          background-color: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 5rem 0 2rem 0;
          color: var(--text-secondary);
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-brand {
          max-width: 340px;
        }

        .brand-title {
          font-size: 1.4rem;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
          margin-bottom: 0.75rem;
          letter-spacing: 0.05em;
        }

        .brand-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .footer-heading {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 1.1rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-link {
          font-size: 0.9rem;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 2rem;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .admin-access-wrapper {
          opacity: 0.08;
          transition: opacity 0.5s ease;
        }

        .admin-access-wrapper:hover {
          opacity: 0.5;
        }

        .admin-access-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 4px;
          display: flex;
          transition: color 0.2s ease;
        }

        .admin-access-btn:hover {
          color: var(--text-primary);
        }

        @media (max-width: 576px) {
          .footer-top {
            flex-direction: column;
            gap: 2rem;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
