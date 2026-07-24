import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Portfolio from "./components/Portfolio";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Dashboard from "./components/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  if (isAdminLoggedIn) {
    return <Dashboard onLogout={() => setIsAdminLoggedIn(false)} />;
  }

  return (
    <div className="app-shell">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero
          onExploreClick={() => scrollTo("portfolio")}
          onCustomClick={() => scrollTo("contact")}
        />
        <AboutUs />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Pricing />
        <ContactForm />
        <FAQ />
      </main>
      <Footer onAdminClick={() => setIsLoginModalOpen(true)} />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={() => setIsAdminLoggedIn(true)}
      />
    </div>
  );
}

export default App;
