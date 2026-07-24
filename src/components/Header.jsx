import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header({ darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "how-it-works", label: "Process" },
    { id: "portfolio", label: "Products" },
    { id: "pricing", label: "Pricing" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo-group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="logo-wrapper">
            <svg viewBox="0 0 500 500" className="logo-svg">
              <defs>
                <linearGradient id="metal-light" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#eceef4" />
                  <stop offset="70%" stopColor="#b5b9c8" />
                  <stop offset="100%" stopColor="#8d91a1" />
                </linearGradient>
                <linearGradient id="metal-dark" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#858896" />
                  <stop offset="50%" stopColor="#555866" />
                  <stop offset="100%" stopColor="#25262c" />
                </linearGradient>
                <filter id="chisel-shadow" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#000000" floodOpacity="0.4" />
                </filter>
              </defs>
              <g filter="url(#chisel-shadow)">
                <path d="M 380,135 L 125,230 L 255,230 L 245,310 Z" fill="url(#metal-light)" />
                <path d="M 380,135 L 245,310 L 140,400 L 350,310 Z" fill="url(#metal-dark)" />
              </g>
            </svg>
          </div>
          <span className="logo-text">
            SHIFT<span className="logo-text-sub">LOGIC</span>
          </span>
        </div>

        <nav className="desktop-nav">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="nav-link">
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="shimmer-button nav-cta-btn"
          >
            Get Started
          </button>
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle" aria-label="Toggle theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        <div className="mobile-actions">
          <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle mobile-theme-btn" aria-label="Toggle theme">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu glass-card">
          {[...navItems, { id: "contact", label: "Get Started" }].map((item) => (
            <button key={item.id} onClick={() => handleNavClick(item.id)} className="mobile-nav-link">
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 80px;
          z-index: 1000;
          display: flex;
          align-items: center;
          border-bottom: 1px solid transparent;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .header.scrolled {
          height: 70px;
          background: rgba(13, 14, 18, 0.85);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-color: var(--border-color);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
        }

        [data-theme="light"] .header.scrolled {
          background: rgba(244, 245, 248, 0.85);
        }

        .header-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
        }

        .logo-wrapper {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
        }

        .logo-group:hover .logo-wrapper {
          transform: scale(1.08) rotate(3deg);
        }

        .logo-svg {
          width: 100%;
          height: 100%;
        }

        .logo-text {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .logo-text-sub {
          background: var(--chrome-silver);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 500;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .nav-link {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          position: relative;
          padding: 0.5rem 0;
          transition: color 0.25s ease;
        }

        .nav-link:hover {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--chrome-silver);
          transition: width 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-cta-btn {
          padding: 0.55rem 1.25rem !important;
          font-size: 0.85rem;
        }

        .theme-toggle {
          background: var(--border-color);
          border: 1px solid var(--border-color);
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-primary);
          transition: all 0.2s ease;
        }

        .theme-toggle:hover {
          border-color: var(--border-focus);
          background: rgba(255, 255, 255, 0.05);
          transform: scale(1.05);
        }

        .mobile-actions {
          display: none;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-menu-btn {
          background: transparent;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }

        .mobile-menu {
          position: absolute;
          top: 85px;
          left: 1.5rem;
          right: 1.5rem;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
          z-index: 999;
        }

        .mobile-nav-link {
          background: transparent;
          border: none;
          color: var(--text-primary);
          font-size: 1.05rem;
          font-weight: 500;
          text-align: left;
          padding: 0.75rem 0;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
        }

        .mobile-nav-link:last-child {
          border-bottom: none;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-actions {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
