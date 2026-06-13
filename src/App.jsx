import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Sync theme to DOM html tag
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.setAttribute("data-theme", "light");
    }
  }, [darkMode]);

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Render Admin Dashboard or Public Pages
  if (isAdminLoggedIn) {
    return (
      <Dashboard 
        onLogout={() => setIsAdminLoggedIn(false)} 
      />
    );
  }

  return (
    <div className="app-shell">
      {/* Navigation */}
      <Header 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />

      {/* Main Pages */}
      <main>
        <Hero 
          onExploreClick={() => handleScrollToSection("portfolio")}
          onCustomClick={() => handleScrollToSection("services")}
        />
        <AboutUs />
        <Services />
        <Portfolio />
      </main>

      {/* Footer */}
      <Footer 
        onAdminClick={() => setIsLoginModalOpen(true)} 
      />

      {/* Security Authorization Gate */}
      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => setIsAdminLoggedIn(true)}
      />
    </div>
  );
}

export default App;
