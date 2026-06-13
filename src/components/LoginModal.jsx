import React, { useState, useEffect } from "react";
import { Lock, Unlock, ShieldAlert, X } from "lucide-react";

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPasscode("");
      setError(false);
      setIsUnlocked(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === "shiftlogic2026") {
      setIsUnlocked(true);
      setError(false);
      setTimeout(() => {
        onLoginSuccess();
        onClose();
      }, 1000); // 1s delay for transition animation
    } else {
      setError(true);
      setPasscode("");
      // Flash error for 1.5s
      setTimeout(() => setError(false), 1500);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="login-modal-overlay">
      <div className="login-modal-card glass-card">
        
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Lock Screen Header */}
        <div className="modal-header">
          <div className={`lock-icon-wrapper ${isUnlocked ? "unlocked" : ""} ${error ? "shake-error" : ""}`}>
            {isUnlocked ? <Unlock size={24} /> : <Lock size={24} />}
          </div>
          <h3 className="modal-title">System Authorization</h3>
          <p className="modal-subtitle">
            Enter administrative credentials to access the ShiftLogic main core console.
          </p>
        </div>

        {/* Passcode Form */}
        <form onSubmit={handleSubmit} className="passcode-form">
          <div className="input-group">
            <input 
              type="password" 
              placeholder="••••••••••••"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className={`passcode-input ${error ? "error-border" : ""}`}
              autoFocus
              disabled={isUnlocked}
            />
          </div>

          {error && (
            <div className="auth-alert error-alert">
              <ShieldAlert size={14} />
              <span>Access Denied: Invalid Passcode</span>
            </div>
          )}

          {isUnlocked && (
            <div className="auth-alert success-alert">
              <Unlock size={14} />
              <span>Decryption Successful. Redirecting...</span>
            </div>
          )}

          <button 
            type="submit" 
            className="shimmer-button auth-submit-btn"
            disabled={isUnlocked}
          >
            {isUnlocked ? "Decrypting..." : "Access Core Terminal"}
          </button>
        </form>

        {/* Help Tip */}
        <span className="passcode-hint">Hint: enter `shiftlogic2026` to bypass</span>

      </div>

      <style>{`
        .login-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(4, 5, 8, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 1.5rem;
          animation: fade-overlay 0.3s ease-out;
        }

        @keyframes fade-overlay {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .login-modal-card {
          width: 100%;
          max-width: 440px;
          padding: 3rem 2.5rem;
          text-align: center;
          border-radius: 24px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
          position: relative;
          animation: slide-modal 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slide-modal {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .modal-close-btn:hover {
          color: var(--text-primary);
        }

        .modal-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 2rem;
        }

        .lock-icon-wrapper {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--border-color);
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-primary);
          margin-bottom: 1.25rem;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .lock-icon-wrapper.unlocked {
          background: var(--green-active);
          border-color: var(--green-active);
          color: #ffffff;
          transform: scale(1.1);
        }

        .lock-icon-wrapper.shake-error {
          animation: shake 0.4s ease;
          border-color: #ef4444;
          color: #ef4444;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-6px); }
          40%, 80% { transform: translateX(6px); }
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .modal-subtitle {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .passcode-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .passcode-input {
          width: 100%;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 1rem;
          font-size: 1.25rem;
          color: var(--text-primary);
          text-align: center;
          letter-spacing: 0.25em;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .passcode-input:focus {
          border-color: var(--border-focus);
        }

        .passcode-input.error-border {
          border-color: #ef4444 !important;
        }

        .auth-alert {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          padding: 0.6rem;
          border-radius: 6px;
        }

        .error-alert {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .success-alert {
          background: rgba(16, 185, 129, 0.1);
          color: #34d399;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .auth-submit-btn {
          width: 100%;
          padding: 1rem !important;
          font-size: 0.95rem;
        }

        .passcode-hint {
          display: block;
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: monospace;
          margin-top: 1.5rem;
        }
      `}</style>
    </div>
  );
}
