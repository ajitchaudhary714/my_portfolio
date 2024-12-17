// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X } from "lucide-react";
// import HomeSection from "./_components/HomeSection";
// import ContactSection from "./_components/ContactSection";
// import ProjectsSection from "./_components/ProjectsSection";
// import SkillsSection from "./_components/SkillsSection";
// import Footer from "@/components/sub/Footer";

// const Navigation = ({ activeSection, setActiveSection }) => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navItems = [
//     { label: "Home", section: "home" },
//     { label: "Skills", section: "skills" },
//     { label: "Projects", section: "projects" },
//     { label: "Contact", section: "contact" },
//   ];

//   const handleNavigation = (section) => {
//     setActiveSection(section);
//     setMenuOpen(false);
//     document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 120 }}
//       className="bg-gray-600 fixed left-0 right-0 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-3 z-40"
//     >
//       {/* Logo */}
//       <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//         <img
//           src="/ajitverma.png"
//           className="w-16 h-10 object-contain"
//           alt="Logo"
//         />
//       </motion.div>

//       {/* Desktop Navigation */}
//       <div className="hidden md:flex space-x-12">
//         {navItems.map((item) => (
//           <motion.button
//             key={item.section}
//             onClick={() => handleNavigation(item.section)}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             aria-label={`Navigate to ${item.label}`}
//             className={`transition-colors duration-300 ${
//               activeSection === item.section
//                 ? "text-blue-400"
//                 : "text-gray-300 hover:text-blue-400"
//             }`}
//           >
//             {item.label}
//           </motion.button>
//         ))}
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden">
//         <motion.button
//           onClick={() => setMenuOpen(!menuOpen)}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.9 }}
//           className="text-white"
//         >
//           {menuOpen ? <X size={24} /> : <Menu size={24} />}
//         </motion.button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="absolute top-full left-0 w-full bg-gray-800 md:hidden"
//           >
//             {navItems.map((item) => (
//               <motion.button
//                 key={item.section}
//                 onClick={() => handleNavigation(item.section)}
//                 whileHover={{ backgroundColor: "#2a4365" }}
//                 className={`block w-full text-left p-3 border-t border-gray-700 ${
//                   activeSection === item.section
//                     ? "bg-blue-900 text-white"
//                     : "text-gray-300 hover:text-white"
//                 }`}
//               >
//                 {item.label}
//               </motion.button>
//             ))}
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// const Portfolio = () => {
//   const [activeSection, setActiveSection] = useState("home");

//   const sectionVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <div className="bg-gray-100 text-black min-h-screen">
//       <Navigation
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//       />
//       <motion.div
//         className=""
//         initial="hidden"
//         animate="visible"
//         variants={sectionVariants}
//         transition={{ duration: 0.5 }}
//       >
//         <div id="home">
//           <HomeSection />
//         </div>
//         <div id="skills">
//           <SkillsSection />
//         </div>
//         <div id="projects">
//           <ProjectsSection />
//         </div>
//         <div id="contact">
//           <ContactSection />
//         </div>
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };

// export default Portfolio;"use client";

"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import HomeSection from "./_components/HomeSection";
import SkillsSection from "./_components/SkillsSection";
import ProjectsSection from "./_components/ProjectsSection";
import ContactSection from "./_components/ContactSection";
import Footer from "@/components/sub/Footer";

const navItems = [
  { label: "Home", section: "home" },
  { label: "Skills", section: "skills" },
  { label: "Projects", section: "projects" },
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
    <div className="flex justify-between items-center px-4 py-2 fixed left-0 right-0 bg-slate-900">
      <img src="/ajitlogo.png" className="w-16 h-10 object-contain" />
      <button
        className="text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation"
      >
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
      </button>
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 right-0 bg-slate-900 md:static md:flex md:items-center md:gap-4`}
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
    <div className="bg-gray-100 text-black min-h-screen">
      <ChipTabs />
      <div id="home" className=" ">
        <HomeSection />
      </div>
      <div id="skills" className="">
        <SkillsSection />
      </div>
      <div id="projects" className="">
        <ProjectsSection />
      </div>
      <div id="contact" className="">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
