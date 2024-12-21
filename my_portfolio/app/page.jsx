"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeSection from "../components/sub/HomeSection";
import SkillsSection from "../components/sub/SkillsSection";
import ProjectsSection from "../components/sub/ProjectsSection";
import ContactSection from "../components/sub/ContactSection";
import Footer from "@/components/sub/Footer";

const navItems = [
  { label: "Home", section: "home" },
  { label: "Projects", section: "projects" },
  { label: "Skills", section: "skills" },
  { label: "Contact", section: "contact" },
];

const ChipTabs = () => {
  const [selected, setSelected] = useState(navItems[0].section);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setSelected(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false); // Close menu on navigation
  };

  return (
    <div className="flex justify-between items-center px-4 py-2 fixed left-0 right-0 bg-slate-900 max-w-7xl mx-auto z-50">
      {/* Logo */}
      <img
        src="/Ajitvermalogo.png"
        className="w-16 h-10 object-contain cursor-pointer"
        alt="Logo"
        onClick={() =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />

      {/* Mobile Menu Button */}
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMenuOpen ? (
          // Cross Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // Hamburger Icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5M3.75 18.25h16.5"
            />
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col absolute top-full left-0 right-0 bg-slate-900 z-50 md:static md:flex md:flex-row md:items-center md:gap-4 transition-all duration-300`}
      >
        {navItems.map((item) => (
          <Chip
            key={item.section}
            text={item.label}
            selected={selected === item.section}
            onClick={() => handleNavigation(item.section)}
          />
        ))}
      </div>
    </div>
  );
};

const Chip = ({ text, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${
        selected
          ? "text-white"
          : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-2.5 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};

const Portfolio = () => {
  return (
    <div className="text-black bg-gray-900 min-h-screen">
      {/* Navbar */}
      <ChipTabs />

      {/* Sections */}
      <div id="home" className="">
        <HomeSection />
      </div>
      <div id="projects" className="">
        <ProjectsSection />
      </div>
      <div id="skills" className="">
        <SkillsSection />
      </div>
      <div id="contact" className="">
        <ContactSection />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;
