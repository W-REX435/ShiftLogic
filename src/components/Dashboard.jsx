import React, { useState, useEffect, useRef } from "react";
import { 
  LayoutDashboard, Boxes, Mail, Bot, LogOut, ArrowUpRight, 
  Activity, Users, Send, RefreshCw, ChevronRight, CheckCircle,
  FileText, Sparkles, Terminal, ArrowRight, UserPlus
} from "lucide-react";
import { revenueMetrics, chartData, recentActivity, supportInbox, aiEmployees } from "../utils/mockData";

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState("overview");
  
  // Dashboard state
  const [products, setProducts] = useState(revenueMetrics.whopStats);
  const [inbox, setInbox] = useState(supportInbox);
  const [selectedTicket, setSelectedTicket] = useState(supportInbox[0]);
  const [replyDraft, setReplyDraft] = useState("");
  
  // Synthesizer State
  const [synthType, setSynthType] = useState("PDF Guide");
  const [synthTitle, setSynthTitle] = useState("");
  const [synthLogs, setSynthLogs] = useState([]);
  const [isSynthesizing, setIsSynthesizing] = useState(false);

  // Chat State
  const [selectedAgent, setSelectedAgent] = useState("alex");
  const [alexChat, setAlexChat] = useState([
    { sender: "agent", text: aiEmployees.alex.initialGreeting, time: "10:00 AM" }
  ]);
  const [sarahChat, setSarahChat] = useState([
    { sender: "agent", text: aiEmployees.sarah.initialGreeting, time: "10:00 AM" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isAgentTyping, setIsAgentTyping] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [alexChat, sarahChat, isAgentTyping]);

  // Product toggle helper
  const toggleProductStatus = (key) => {
    setProducts(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        status: prev[key].status === "Active" ? "Paused" : "Active"
      }
    }));
  };

  // Mock product synthesis
  const handleSynthesizeProduct = (e) => {
    e.preventDefault();
    if (!synthTitle.trim() || isSynthesizing) return;
    
    setIsSynthesizing(true);
    setSynthLogs([]);
    
    const logs = [
      `[AI Synthesizer] Initiating synthesis sequence for category: "${synthType}"`,
      `[AI Synthesizer] Querying active Whop market trend metrics...`,
      `[AI Synthesizer] High demand detected in related niches. Designing outline...`,
      `[AI Synthesizer] Drafting core digital asset blueprints & scripts...`,
      `[AI Synthesizer] Rendering assets and packaging documentation...`,
      `[AI Synthesizer] Product assembly complete! Simulating API endpoint creation...`,
      `[AI Synthesizer] Product successfully drafted in Whop Sandbox environment!`
    ];
    
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setSynthLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setIsSynthesizing(false);
        // Add new mock product to local state
        const productKey = synthTitle.toLowerCase().replace(/\s+/g, "_");
        setProducts(prev => ({
          ...prev,
          [productKey]: {
            name: synthTitle,
            revenue: 0,
            subscribers: 0,
            price: synthType === "PDF Guide" ? 15 : synthType === "Video Pack" ? 25 : 49,
            url: "#",
            status: "Draft (Sandbox)"
          }
        }));
        setSynthTitle("");
      }
    }, 900);
  };

  // Inbox reply helpers
  const handleAutoReply = () => {
    if (selectedTicket) {
      setReplyDraft(selectedTicket.suggestedReply);
    }
  };

  const handleSendReply = () => {
    if (!replyDraft.trim()) return;
    
    // Update inbox status
    setInbox(prev => prev.map(t => {
      if (t.id === selectedTicket.id) {
        return { ...t, status: "Replied" };
      }
      return t;
    }));
    
    // Add success confirmation alert
    alert(`AI system sent secure SMTP response to ${selectedTicket.sender}`);
    setReplyDraft("");
  };

  // Chat message submit
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim() || isAgentTyping) return;

    const userMsg = chatInput;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (selectedAgent === "alex") {
      setAlexChat(prev => [...prev, { sender: "user", text: userMsg, time }]);
    } else {
      setSarahChat(prev => [...prev, { sender: "user", text: userMsg, time }]);
    }

    setChatInput("");
    setIsAgentTyping(true);

    // AI thinking delay
    setTimeout(() => {
      const responseText = selectedAgent === "alex" 
        ? aiEmployees.alex.generateResponse(userMsg)
        : aiEmployees.sarah.generateResponse(userMsg);

      if (selectedAgent === "alex") {
        setAlexChat(prev => [...prev, { sender: "agent", text: responseText, time }]);
      } else {
        setSarahChat(prev => [...prev, { sender: "agent", text: responseText, time }]);
      }
      setIsAgentTyping(false);
    }, 1200);
  };

  const loadQuickPrompt = (promptText) => {
    setChatInput(promptText);
  };

  return (
    <div className="dashboard-container">
      
      {/* Sidebar Panel */}
      <aside className="db-sidebar">
        <div className="db-sidebar-brand">
          <svg viewBox="0 0 500 500" className="db-logo">
            <path d="M 380,135 L 125,230 L 255,230 L 245,310 Z" fill="#ffffff" />
            <path d="M 380,135 L 245,310 L 140,400 L 350,310 Z" fill="#b5b9c8" />
          </svg>
          <span className="db-brand-text">SHIFT<span className="metallic-text">LOGIC</span></span>
        </div>

        <nav className="db-sidebar-nav">
          <button 
            className={`db-nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard size={18} />
            <span>Overview</span>
          </button>
          
          <button 
            className={`db-nav-item ${activeTab === "products" ? "active" : ""}`}
            onClick={() => setActiveTab("products")}
          >
            <Boxes size={18} />
            <span>Product Control</span>
          </button>
          
          <button 
            className={`db-nav-item ${activeTab === "inbox" ? "active" : ""}`}
            onClick={() => setActiveTab("inbox")}
          >
            <Mail size={18} />
            <span>Inquiries Inbox</span>
          </button>
          
          <button 
            className={`db-nav-item ${activeTab === "employees" ? "active" : ""}`}
            onClick={() => setActiveTab("employees")}
          >
            <Bot size={18} />
            <span>AI Workforce</span>
          </button>
        </nav>

        <div className="db-sidebar-footer">
          <button onClick={onLogout} className="db-logout-btn">
            <LogOut size={16} />
            <span>Exit Dashboard</span>
          </button>
        </div>
      </aside>

      {/* Main Terminal Area */}
      <main className="db-main-content">
        
        {/* TOP STATUS HEADER */}
        <header className="db-header">
          <div className="db-header-left">
            <span className="db-welcome">ADMIN PORTAL</span>
            <h1 className="db-title">
              {activeTab === "overview" && "Empire Diagnostics"}
              {activeTab === "products" && "Synthesizer Controls"}
              {activeTab === "inbox" && "Customer Operations"}
              {activeTab === "employees" && "Autonomous Operations Chatroom"}
            </h1>
          </div>
          <div className="db-header-right">
            <div className="system-health-badge">
              <span className="pulse-indicator"></span>
              <span>All AI Systems Operational</span>
            </div>
          </div>
        </header>

        {/* VIEWPORTS */}
        <div className="db-viewport">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="viewport-tab fade-in-section">
              {/* Metrics Grid */}
              <div className="metrics-grid">
                <div className="metric-widget glass-card">
                  <span className="widget-label">Total Empire Revenue</span>
                  <div className="widget-value-group">
                    <h3 className="widget-value">${revenueMetrics.totalRevenue.toLocaleString()}</h3>
                    <span className="growth-indicator">+{revenueMetrics.monthlyGrowth}%</span>
                  </div>
                  <p className="widget-desc">Consolidated from Whop API & Custom Projects</p>
                </div>
                
                <div className="metric-widget glass-card">
                  <span className="widget-label">Total Client Base</span>
                  <div className="widget-value-group">
                    <h3 className="widget-value">{revenueMetrics.totalCustomers.toLocaleString()}</h3>
                    <span className="growth-indicator">+18%</span>
                  </div>
                  <p className="widget-desc">Subscribed editors and book readers</p>
                </div>

                <div className="metric-widget glass-card">
                  <span className="widget-label">Active AI Nodes</span>
                  <div className="widget-value-group">
                    <h3 className="widget-value">{revenueMetrics.activeAIEmployees} / 4</h3>
                    <span className="health-dot active-dot"></span>
                  </div>
                  <p className="widget-desc">Marketing, Outreach, Dev, & Research</p>
                </div>
              </div>

              {/* Chart & Activity Section */}
              <div className="overview-details-grid">
                {/* Custom SVG Line Chart */}
                <div className="chart-container glass-card">
                  <h4 className="card-header-title">Revenue Growth Trend (Past 6 Months)</h4>
                  <div className="chart-wrapper">
                    <svg viewBox="0 0 600 300" className="custom-line-chart">
                      <defs>
                        <linearGradient id="chartGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
                          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </linearGradient>
                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8c90a2" />
                          <stop offset="50%" stopColor="#ffffff" />
                          <stop offset="100%" stopColor="#b5b9c8" />
                        </linearGradient>
                      </defs>
                      
                      {/* Grid Lines */}
                      <line x1="50" y1="50" x2="550" y2="50" stroke="var(--border-color)" strokeDasharray="4" />
                      <line x1="50" y1="110" x2="550" y2="110" stroke="var(--border-color)" strokeDasharray="4" />
                      <line x1="50" y1="170" x2="550" y2="170" stroke="var(--border-color)" strokeDasharray="4" />
                      <line x1="50" y1="230" x2="550" y2="230" stroke="var(--border-color)" strokeDasharray="4" />

                      {/* Area Under Curve */}
                      <path 
                        d="M 50,230 L 50,200 L 150,180 L 250,150 L 350,120 L 450,80 L 550,50 L 550,230 Z" 
                        fill="url(#chartGlow)"
                      />

                      {/* Line Path */}
                      <path 
                        d="M 50,200 L 150,180 L 250,150 L 350,120 L 450,80 L 550,50" 
                        fill="none" 
                        stroke="url(#lineGrad)" 
                        strokeWidth="3.5" 
                      />

                      {/* Data dots */}
                      <circle cx="50" cy="200" r="5" fill="#ffffff" />
                      <circle cx="150" cy="180" r="5" fill="#ffffff" />
                      <circle cx="250" cy="150" r="5" fill="#ffffff" />
                      <circle cx="350" cy="120" r="5" fill="#ffffff" />
                      <circle cx="450" cy="80" r="5" fill="#ffffff" />
                      <circle cx="550" cy="50" r="5" fill="#ffffff" />

                      {/* Label Months */}
                      <text x="50" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Jan</text>
                      <text x="150" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Feb</text>
                      <text x="250" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Mar</text>
                      <text x="350" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Apr</text>
                      <text x="450" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">May</text>
                      <text x="550" y="260" fill="var(--text-secondary)" fontSize="12" textAnchor="middle">Jun</text>

                      {/* Y Axis markings */}
                      <text x="40" y="235" fill="var(--text-muted)" fontSize="10" textAnchor="end">$2k</text>
                      <text x="40" y="175" fill="var(--text-muted)" fontSize="10" textAnchor="end">$6k</text>
                      <text x="40" y="115" fill="var(--text-muted)" fontSize="10" textAnchor="end">$10k</text>
                      <text x="40" y="55" fill="var(--text-muted)" fontSize="10" textAnchor="end">$14k</text>
                    </svg>
                  </div>
                </div>

                {/* System Activity Logs */}
                <div className="activity-container glass-card">
                  <h4 className="card-header-title">System Activity Log</h4>
                  <div className="activity-list">
                    {recentActivity.map((act) => (
                      <div key={act.id} className="activity-item">
                        <div className="activity-marker"></div>
                        <div className="activity-body">
                          <span className="activity-time">{act.time}</span>
                          <p className="activity-text">{act.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCT CONTROL */}
          {activeTab === "products" && (
            <div className="viewport-tab fade-in-section">
              <div className="products-tab-grid">
                
                {/* Left Panel: Active Whop Catalog list */}
                <div className="product-catalog-panel glass-card">
                  <h3 className="panel-title">Product Control Center</h3>
                  <div className="catalog-list">
                    {Object.entries(products).map(([key, prod]) => (
                      <div key={key} className="catalog-item">
                        <div className="catalog-meta">
                          <h4 className="catalog-name">{prod.name}</h4>
                          <div className="catalog-badge-row">
                            <span className="price-tag">${prod.price}</span>
                            <span className={`status-pill ${prod.status.toLowerCase().replace(/\s+/g, '-')}`}>
                              {prod.status}
                            </span>
                          </div>
                        </div>
                        <div className="catalog-actions">
                          <button 
                            onClick={() => toggleProductStatus(key)} 
                            className={`catalog-toggle-btn ${prod.status === "Active" ? "active" : ""}`}
                          >
                            {prod.status === "Active" ? "Pause Product" : "Resume Product"}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Panel: AI Product Synthesizer */}
                <div className="product-synth-panel glass-card">
                  <div className="synth-title-header">
                    <Sparkles size={20} className="spark-icon" />
                    <h3 className="panel-title">Autonomous Product Synthesizer</h3>
                  </div>
                  <p className="synth-instructions">
                    Instruct our AI model to create, compile, package, and listing-draft a new digital product instantly.
                  </p>

                  <form onSubmit={handleSynthesizeProduct} className="synth-form">
                    <div className="form-group">
                      <label className="form-label">Product Niche</label>
                      <select 
                        value={synthType} 
                        onChange={(e) => setSynthType(e.target.value)}
                        className="synth-select"
                        disabled={isSynthesizing}
                      >
                        <option value="PDF Guide">PDF Guide (Prompt blueprints, strategies)</option>
                        <option value="Video Pack">Video Pack (Sound effects, presets)</option>
                        <option value="Automation Script">Automation Script (API hooks, tools)</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Product Title</label>
                      <input 
                        type="text" 
                        placeholder="e.g. YouTube Retention Masterpack"
                        value={synthTitle}
                        onChange={(e) => setSynthTitle(e.target.value)}
                        className="synth-input"
                        required
                        disabled={isSynthesizing}
                      />
                    </div>

                    <button 
                      type="submit" 
                      className="shimmer-button synth-submit-btn" 
                      disabled={isSynthesizing || !synthTitle.trim()}
                    >
                      {isSynthesizing ? (
                        <>
                          <RefreshCw className="spin-icon" size={16} />
                          <span>Synthesizing...</span>
                        </>
                      ) : (
                        <>
                          <Terminal size={16} />
                          <span>Launch AI Synthesizer</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Synthesizer Output Terminal Console */}
                  <div className="synth-terminal-console">
                    <div className="console-header">
                      <span className="dot red"></span>
                      <span className="dot yellow"></span>
                      <span className="dot green"></span>
                      <span className="console-title">synthesizer_core.log</span>
                    </div>
                    <div className="console-body">
                      {synthLogs.length === 0 && (
                        <span className="console-placeholder">Awaiting synthesizer instruction input...</span>
                      )}
                      {synthLogs.map((log, idx) => (
                        <div key={idx} className="console-line">
                          {log}
                        </div>
                      ))}
                      {isSynthesizing && <div className="console-line cursor-blink">█</div>}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          )}

          {/* TAB 3: CUSTOMER INBOX */}
          {activeTab === "inbox" && (
            <div className="viewport-tab fade-in-section">
              <div className="inbox-grid">
                
                {/* Inbox Left Column: List tickets */}
                <div className="inbox-list-panel glass-card">
                  <h3 className="panel-title">Operations Inbox</h3>
                  <div className="tickets-list">
                    {inbox.map((t) => (
                      <div 
                        key={t.id} 
                        className={`ticket-item ${selectedTicket.id === t.id ? "active" : ""}`}
                        onClick={() => {
                          setSelectedTicket(t);
                          setReplyDraft("");
                        }}
                      >
                        <div className="ticket-header">
                          <span className="ticket-sender">{t.sender}</span>
                          <span className="ticket-date">{t.date}</span>
                        </div>
                        <h4 className="ticket-subject">{t.subject}</h4>
                        <div className="ticket-footer">
                          <span className={`ticket-status ${t.status.toLowerCase()}`}>{t.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inbox Right Column: Reading view */}
                <div className="inbox-view-panel glass-card">
                  {selectedTicket ? (
                    <div className="reading-pane">
                      <div className="reading-header">
                        <span className="t-badge">{selectedTicket.id}</span>
                        <h3 className="t-subject">{selectedTicket.subject}</h3>
                        <div className="t-meta-info">
                          <span>From: <strong>{selectedTicket.sender}</strong></span>
                          <span>Received: {selectedTicket.date}</span>
                        </div>
                      </div>
                      
                      <div className="reading-body">
                        <p>{selectedTicket.message}</p>
                      </div>

                      {/* Reply Generator Section */}
                      <div className="reply-section">
                        <div className="reply-header-actions">
                          <h4 className="reply-title">Compose Response</h4>
                          <button onClick={handleAutoReply} className="border-button helper-reply-btn">
                            <Sparkles size={14} />
                            <span>Auto-Generate AI Answer</span>
                          </button>
                        </div>
                        
                        <textarea 
                          value={replyDraft}
                          onChange={(e) => setReplyDraft(e.target.value)}
                          placeholder="Draft your reply here or click 'Auto-Generate AI Answer' for a targeted response..."
                          className="reply-textarea"
                        />
                        
                        <div className="reply-actions">
                          <button onClick={handleSendReply} className="shimmer-button send-reply-btn">
                            <Send size={16} />
                            <span>Send Secure Email</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="reading-pane-empty">
                      <Mail size={48} className="empty-icon" />
                      <h4>No Message Selected</h4>
                      <p>Choose an inquiry from the inbox sidebar to view contents and draft replies.</p>
                    </div>
                  )}
                </div>

              </div>
            </div>
          )}

          {/* TAB 4: AI WORKFORCE */}
          {activeTab === "employees" && (
            <div className="viewport-tab fade-in-section">
              <div className="chat-interface-grid">
                
                {/* Agent Sidebar */}
                <div className="chat-agents-sidebar glass-card">
                  <h3 className="panel-title">Active AI Workforce</h3>
                  <div className="agents-selector-list">
                    
                    <div 
                      className={`agent-selector-card ${selectedAgent === "alex" ? "active" : ""}`}
                      onClick={() => setSelectedAgent("alex")}
                    >
                      <span className="agent-avatar">{aiEmployees.alex.avatar}</span>
                      <div className="agent-selector-meta">
                        <div className="agent-header-row">
                          <h4 className="agent-sel-name">{aiEmployees.alex.name}</h4>
                          <span className="agent-online-indicator"></span>
                        </div>
                        <span className="agent-sel-role">{aiEmployees.alex.role}</span>
                      </div>
                    </div>

                    <div 
                      className={`agent-selector-card ${selectedAgent === "sarah" ? "active" : ""}`}
                      onClick={() => setSelectedAgent("sarah")}
                    >
                      <span className="agent-avatar">{aiEmployees.sarah.avatar}</span>
                      <div className="agent-selector-meta">
                        <div className="agent-header-row">
                          <h4 className="agent-sel-name">{aiEmployees.sarah.name}</h4>
                          <span className="agent-online-indicator"></span>
                        </div>
                        <span className="agent-sel-role">{aiEmployees.sarah.role}</span>
                      </div>
                    </div>

                  </div>

                  {/* Bio panel */}
                  <div className="agent-bio-panel">
                    <h4 className="bio-title">System Definition</h4>
                    <p className="bio-desc">
                      {selectedAgent === "alex" ? aiEmployees.alex.bio : aiEmployees.sarah.bio}
                    </p>
                  </div>
                </div>

                {/* Main Chat Area */}
                <div className="chat-main-terminal glass-card">
                  
                  {/* Chat Header */}
                  <div className="chat-terminal-header">
                    <div className="chat-header-agent-info">
                      <span className="avatar-header">
                        {selectedAgent === "alex" ? aiEmployees.alex.avatar : aiEmployees.sarah.avatar}
                      </span>
                      <div>
                        <h3 className="header-name">
                          {selectedAgent === "alex" ? aiEmployees.alex.name : aiEmployees.sarah.name}
                        </h3>
                        <span className="header-role">
                          {selectedAgent === "alex" ? aiEmployees.alex.role : aiEmployees.sarah.role}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chat Messages Log */}
                  <div className="chat-messages-log">
                    {(selectedAgent === "alex" ? alexChat : sarahChat).map((msg, idx) => (
                      <div key={idx} className={`chat-message-bubble ${msg.sender}`}>
                        <div className="bubble-content">
                          {msg.text.split('\n').map((line, lidx) => (
                            <p key={lidx}>{line}</p>
                          ))}
                        </div>
                        <span className="bubble-time">{msg.time}</span>
                      </div>
                    ))}
                    {isAgentTyping && (
                      <div className="chat-message-bubble agent">
                        <div className="bubble-content typing-indicator-bubble">
                          <span className="dot-typing"></span>
                          <span className="dot-typing"></span>
                          <span className="dot-typing"></span>
                        </div>
                      </div>
                    )}
                    <div ref={chatEndRef}></div>
                  </div>

                  {/* Quick Suggestions Panel */}
                  <div className="chat-quick-suggestions">
                    <span className="suggestion-label">Suggested Directives:</span>
                    <div className="suggestions-row">
                      {(selectedAgent === "alex" ? aiEmployees.alex.quickPrompts : aiEmployees.sarah.quickPrompts).map((prompt, idx) => (
                        <button 
                          key={idx} 
                          onClick={() => loadQuickPrompt(prompt)}
                          className="suggestion-chip"
                          disabled={isAgentTyping}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleSendMessage} className="chat-input-form">
                    <input 
                      type="text"
                      placeholder={`Send a task/message to ${selectedAgent === "alex" ? "Alex" : "Sarah"}...`}
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      className="chat-terminal-input"
                      disabled={isAgentTyping}
                    />
                    <button type="submit" className="shimmer-button chat-send-btn" disabled={isAgentTyping || !chatInput.trim()}>
                      <Send size={16} />
                    </button>
                  </form>

                </div>

              </div>
            </div>
          )}

        </div>

      </main>

      {/* STYLING RULES FOR DASHBOARD */}
      <style>{`
        .dashboard-container {
          display: flex;
          height: 100vh;
          width: 100vw;
          background-color: var(--bg-primary);
          color: var(--text-primary);
          overflow: hidden;
          position: fixed;
          inset: 0;
          z-index: 1500;
        }

        /* Sidebar Styling */
        .db-sidebar {
          width: 260px;
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          flex-shrink: 0;
        }

        .db-sidebar-brand {
          height: 80px;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 1.5rem;
          border-bottom: 1px solid var(--border-color);
        }

        .db-logo {
          width: 32px;
          height: 32px;
        }

        .db-brand-text {
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: var(--text-primary);
        }

        .db-sidebar-nav {
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-grow: 1;
        }

        .db-nav-item {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 1.15rem;
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          border-radius: 8px;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: all 0.2s ease;
        }

        .db-nav-item:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.03);
        }

        .db-nav-item.active {
          color: var(--text-primary);
          background: var(--border-color);
          box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
        }

        .db-sidebar-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-color);
        }

        .db-logout-btn {
          width: 100%;
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-muted);
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .db-logout-btn:hover {
          color: var(--text-primary);
          border-color: var(--border-focus);
          background: rgba(239, 68, 68, 0.05);
        }

        /* Main Workspace Layout */
        .db-main-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
        }

        .db-header {
          height: 80px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2.5rem;
          border-bottom: 1px solid var(--border-color);
          flex-shrink: 0;
        }

        .db-welcome {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .db-title {
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: -0.01em;
          margin-top: 0.15rem;
        }

        .system-health-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.45rem 1rem;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 50px;
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .db-viewport {
          flex-grow: 1;
          padding: 2.5rem;
          overflow-y: auto;
        }

        .viewport-tab {
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        /* View Tab 1: Overview Styles */
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .metric-widget {
          padding: 2rem;
        }

        .widget-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .widget-value-group {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin: 0.5rem 0;
        }

        .widget-value {
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .growth-indicator {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--green-active);
          background: rgba(16, 185, 129, 0.08);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }

        .widget-desc {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .active-dot {
          width: 10px;
          height: 10px;
        }

        .overview-details-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 2rem;
          align-items: stretch;
        }

        .chart-container {
          padding: 2rem;
          display: flex;
          flex-direction: column;
        }

        .card-header-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .chart-wrapper {
          width: 100%;
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .custom-line-chart {
          width: 100%;
          max-height: 250px;
        }

        .activity-container {
          padding: 2rem;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .activity-item {
          display: flex;
          gap: 1rem;
        }

        .activity-marker {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--text-secondary);
          margin-top: 0.35rem;
          flex-shrink: 0;
        }

        .activity-body {
          display: flex;
          flex-direction: column;
        }

        .activity-time {
          font-size: 0.75rem;
          color: var(--text-muted);
          font-family: monospace;
        }

        .activity-text {
          font-size: 0.88rem;
          line-height: 1.4;
          color: var(--text-secondary);
          margin-top: 0.15rem;
        }

        /* View Tab 2: Product Control Styles */
        .products-tab-grid {
          display: grid;
          grid-template-columns: 1fr 1.1fr;
          gap: 2rem;
          align-items: stretch;
        }

        .panel-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
        }

        .catalog-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .catalog-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.01);
          border-radius: 12px;
        }

        .catalog-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .catalog-badge-row {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.35rem;
          align-items: center;
        }

        .price-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          background: var(--border-color);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .status-pill {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .status-pill.active {
          background: rgba(16, 185, 129, 0.1);
          color: var(--green-active);
        }

        .status-pill.paused {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
        }

        .status-pill.in-development {
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .status-pill.draft-sandbox {
          background: var(--border-color);
          color: var(--text-secondary);
        }

        .catalog-toggle-btn {
          background: transparent;
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .catalog-toggle-btn:hover {
          border-color: var(--border-focus);
          background: rgba(255, 255, 255, 0.02);
        }

        .catalog-toggle-btn.active:hover {
          background: rgba(239, 68, 68, 0.05);
          color: #f87171;
        }

        /* Product Synthesizer Form */
        .synth-title-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .spark-icon {
          color: var(--text-primary);
        }

        .synth-instructions {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
        }

        .synth-form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .synth-select, .synth-input {
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          padding: 0.85rem;
          border-radius: 8px;
          outline: none;
          font-size: 0.95rem;
        }

        .synth-select:focus, .synth-input:focus {
          border-color: var(--border-focus);
        }

        .synth-submit-btn {
          width: 100%;
          padding: 0.85rem !important;
        }

        .spin-icon {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* Synthesizer Logs Terminal */
        .synth-terminal-console {
          border: 1px solid var(--border-color);
          border-radius: 8px;
          background-color: #030406;
          overflow: hidden;
          font-family: monospace;
        }

        .console-header {
          height: 34px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0 1rem;
          background: #0d0f14;
          border-bottom: 1px solid var(--border-color);
        }

        .console-header .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .console-header .dot.red { background: #ef4444; }
        .console-header .dot.yellow { background: #f59e0b; }
        .console-header .dot.green { background: #10b981; }

        .console-title {
          font-size: 0.72rem;
          color: var(--text-muted);
          margin-left: 0.5rem;
        }

        .console-body {
          padding: 1.25rem;
          font-size: 0.78rem;
          line-height: 1.6;
          color: #38bdf8;
          min-height: 120px;
          max-height: 180px;
          overflow-y: auto;
        }

        .console-placeholder {
          color: var(--text-muted);
        }

        .console-line {
          margin-bottom: 0.35rem;
          white-space: pre-wrap;
        }

        .cursor-blink {
          display: inline-block;
          animation: blink 1s step-end infinite;
          color: #ffffff;
        }

        @keyframes blink {
          50% { opacity: 0; }
        }

        /* View Tab 3: Customer Inbox Styles */
        .inbox-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 2rem;
          align-items: stretch;
          height: calc(100vh - 210px);
        }

        .inbox-list-panel {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .tickets-list {
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex-grow: 1;
        }

        .ticket-item {
          padding: 1rem;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.01);
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ticket-item:hover {
          border-color: var(--border-focus);
          background: rgba(255, 255, 255, 0.02);
        }

        .ticket-item.active {
          border-color: var(--border-focus);
          background: var(--border-color);
        }

        .ticket-header {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .ticket-sender {
          font-weight: 700;
          color: var(--text-primary);
        }

        .ticket-date {
          color: var(--text-muted);
        }

        .ticket-subject {
          font-size: 0.88rem;
          font-weight: 600;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 0.5rem;
        }

        .ticket-status {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }

        .ticket-status.unread {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
        }

        .ticket-status.read {
          background: rgba(245, 158, 11, 0.1);
          color: #fbbf24;
        }

        .ticket-status.replied {
          background: rgba(16, 185, 129, 0.1);
          color: var(--green-active);
        }

        .inbox-view-panel {
          padding: 2rem;
          overflow-y: auto;
        }

        .reading-pane {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .reading-header {
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .t-badge {
          font-size: 0.7rem;
          font-weight: 700;
          font-family: monospace;
          background: var(--border-color);
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          color: var(--text-secondary);
        }

        .t-subject {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-top: 0.5rem;
        }

        .t-meta-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-top: 0.75rem;
        }

        .reading-body {
          font-size: 0.98rem;
          line-height: 1.6;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .reply-section {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
        }

        .reply-header-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .reply-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .helper-reply-btn {
          padding: 0.45rem 1rem !important;
          font-size: 0.8rem;
        }

        .reply-textarea {
          width: 100%;
          min-height: 120px;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 1rem;
          color: var(--text-primary);
          font-size: 0.92rem;
          outline: none;
          resize: vertical;
          margin-bottom: 1rem;
        }

        .reply-textarea:focus {
          border-color: var(--border-focus);
        }

        .reply-actions {
          display: flex;
          justify-content: flex-end;
        }

        .send-reply-btn {
          width: 180px;
        }

        .reading-pane-empty {
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: var(--text-muted);
          text-align: center;
          padding: 3rem;
        }

        .empty-icon {
          margin-bottom: 1.5rem;
        }

        .reading-pane-empty h4 {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .reading-pane-empty p {
          font-size: 0.88rem;
          max-width: 320px;
        }

        /* View Tab 4: AI Workforce Chatroom Styles */
        .chat-interface-grid {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          gap: 2rem;
          align-items: stretch;
          height: calc(100vh - 210px);
        }

        .chat-agents-sidebar {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .agents-selector-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .agent-selector-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border: 1px solid var(--border-color);
          background: rgba(255, 255, 255, 0.01);
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .agent-selector-card:hover {
          border-color: var(--border-focus);
          background: rgba(255, 255, 255, 0.02);
        }

        .agent-selector-card.active {
          border-color: var(--border-focus);
          background: var(--border-color);
        }

        .agent-avatar {
          font-size: 1.75rem;
        }

        .agent-selector-meta {
          flex-grow: 1;
        }

        .agent-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .agent-sel-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .agent-online-indicator {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green-active);
        }

        .agent-sel-role {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .agent-bio-panel {
          border-top: 1px solid var(--border-color);
          padding-top: 1.5rem;
          flex-grow: 1;
        }

        .bio-title {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 0.75rem;
        }

        .bio-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: var(--text-secondary);
        }

        .chat-main-terminal {
          padding: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chat-terminal-header {
          height: 70px;
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          flex-shrink: 0;
        }

        .chat-header-agent-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .avatar-header {
          font-size: 1.75rem;
        }

        .header-name {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .header-role {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .chat-messages-log {
          flex-grow: 1;
          padding: 1.5rem;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          background: rgba(0,0,0,0.15);
        }

        .chat-message-bubble {
          display: flex;
          flex-direction: column;
          max-width: 75%;
        }

        .chat-message-bubble.agent {
          align-self: flex-start;
        }

        .chat-message-bubble.user {
          align-self: flex-end;
        }

        .bubble-content {
          padding: 0.95rem 1.25rem;
          border-radius: 12px;
          font-size: 0.92rem;
          line-height: 1.5;
        }

        .chat-message-bubble.agent .bubble-content {
          background: var(--bg-card);
          color: var(--text-primary);
          border: 1px solid var(--border-color);
          border-top-left-radius: 2px;
        }

        .chat-message-bubble.user .bubble-content {
          background: var(--text-primary);
          color: var(--bg-primary);
          border-top-right-radius: 2px;
          font-weight: 500;
        }

        [data-theme="light"] .chat-message-bubble.user .bubble-content {
          color: #ffffff;
          background: #121318;
        }

        .bubble-time {
          font-size: 0.7rem;
          color: var(--text-muted);
          margin-top: 0.25rem;
          padding: 0 0.25rem;
        }

        .chat-message-bubble.user .bubble-time {
          align-self: flex-end;
        }

        .bubble-content p {
          margin-bottom: 0.5rem;
        }

        .bubble-content p:last-child {
          margin-bottom: 0;
        }

        /* Typing indicator dots */
        .typing-indicator-bubble {
          display: flex;
          gap: 0.35rem;
          align-items: center;
          padding: 0.75rem 1rem;
        }

        .dot-typing {
          width: 6px;
          height: 6px;
          background: var(--text-secondary);
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }

        .dot-typing:nth-child(1) { animation-delay: -0.32s; }
        .dot-typing:nth-child(2) { animation-delay: -0.16s; }

        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1.0); }
        }

        /* Suggestions chips */
        .chat-quick-suggestions {
          padding: 0.75rem 1.5rem;
          border-top: 1px solid var(--border-color);
          background: rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          overflow-x: auto;
        }

        .suggestion-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 600;
          flex-shrink: 0;
        }

        .suggestions-row {
          display: flex;
          gap: 0.5rem;
        }

        .suggestion-chip {
          background: var(--bg-card);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          padding: 0.35rem 0.75rem;
          border-radius: 50px;
          font-size: 0.78rem;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .suggestion-chip:hover {
          border-color: var(--border-focus);
          color: var(--text-primary);
        }

        /* Input form area */
        .chat-input-form {
          height: 70px;
          border-top: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          padding: 0 1.5rem;
          gap: 1rem;
          flex-shrink: 0;
        }

        .chat-terminal-input {
          flex-grow: 1;
          background: var(--bg-input);
          border: 1px solid var(--border-color);
          border-radius: 8px;
          padding: 0.85rem 1.25rem;
          color: var(--text-primary);
          outline: none;
          font-size: 0.92rem;
        }

        .chat-terminal-input:focus {
          border-color: var(--border-focus);
        }

        .chat-send-btn {
          width: 46px;
          height: 46px;
          padding: 0 !important;
          border-radius: 8px;
          flex-shrink: 0;
        }

        /* Responsive Dashboard styling */
        @media (max-width: 992px) {
          .metrics-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .overview-details-grid {
            grid-template-columns: 1fr;
          }
          .products-tab-grid {
            grid-template-columns: 1fr;
          }
          .inbox-grid {
            grid-template-columns: 1fr;
          }
          .inbox-list-panel {
            height: 250px;
          }
          .chat-interface-grid {
            grid-template-columns: 1fr;
          }
          .chat-agents-sidebar {
            height: 180px;
          }
          .agent-bio-panel {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
