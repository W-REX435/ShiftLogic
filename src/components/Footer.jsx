import React from "react";
import { Sparkles, Terminal } from "lucide-react";

export default function Footer({ onAdminClick }) {
  return (
    <footer className="footer-section">
      <div className="container">
        
        <div className="footer-top">
          <div className="footer-brand">
            <span className="brand-title">SHIFT<span className="metallic-text">LOGIC</span></span>
            <p className="brand-tagline">
              Engineering autonomous digital products and asset pipelines powered fully by artificial intelligence.
            </p>
          </div>
          <div className="footer-links">
            <h4 className="footer-heading">Legal</h4>
            <a href="#" className="footer-link">Terms of Service</a>
            <a href="#" className="footer-link">Privacy Policy</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright-text">
            © {new Date().getFullYear()} ShiftLogic. All rights reserved.
          </div>
          
          {/* Hidden Admin Access Button */}
          <div className="admin-access-wrapper">
            <button className="admin-access-btn" onClick={onAdminClick}>
              <Terminal size={12} />
              <span>Core System</span>
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
          max-width: 400px;
        }

        .brand-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          display: block;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
        }

        .brand-tagline {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .footer-heading {
          font-size: 0.88rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-link {
          font-size: 0.92rem;
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
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        /* Semi-Hidden Login Access */
        .admin-access-wrapper {
          opacity: 0.25;
          transition: opacity 0.3s ease;
        }

        .admin-access-wrapper:hover {
          opacity: 1;
        }

        .admin-access-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          font-size: 0.75rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-family: monospace;
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
