import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";



const navItems = [
  { label: "About me", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Achievements", target: "achievements" },
  { label: "Portfolio", target: "portfolio" },
];

const navbarVariants = {
  hidden: { y: -24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { y: -14, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("About me");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 130;
      setScrolled(window.scrollY > 50);

      const currentItem =
        [...navItems]
          .reverse()
          .find((item) => {
            const section = document.getElementById(item.target);
            return section && section.offsetTop <= scrollPosition;
          }) ?? navItems[0];

      setActiveItem(currentItem.label);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.label);
    const section = document.getElementById(item.target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleContactClick = () => {
    const footer = document.querySelector("footer");

    if (footer) {
      footer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.nav
      className={`navbar${scrolled ? " scrolled" : ""}`}
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        type="button"
        className="logo"
        variants={itemVariants}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        AK
      </motion.button>

      <motion.div className="navbar-links-wrap" variants={itemVariants}>
        <ul className="navbar-links">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              className={`navbar-link-item${
                activeItem === item.label ? " is-active" : ""
              }`}
              onClick={() => handleNavClick(item)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              aria-current={activeItem === item.label ? "page" : undefined}
            >
              <span>{item.label}</span>
              <AnimatePresence>
                {activeItem === item.label && <motion.span className="navbar-active-line" layoutId="navbar-active-line" />}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>

        <a href="/resume.pdf" download className="nav-resume-btn">
          Resume
        </a>

        <motion.button
          type="button"
          className="contact-btn"
          variants={itemVariants}
          whileHover={{ y: -1, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleContactClick}
        >
          Contact Me
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
