import React from "react";
import "./Footer.css";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const footerLinks = [
  { label: "About", target: "about" },
  { label: "Skills", target: "skills" },
  { label: "Portfolio", target: "portfolio" },
  { label: "Achievements", target: "achievements" },
];

const socialItems = [
  {
    label: "GitHub",
    icon: <FaGithub />,
    href: "https://github.com/ankitku100",
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
    href: "https://www.linkedin.com/in/ankit-kumar-642729321/",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=231fa04e29@gmail.com",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  const handleScroll = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.footer
      className="footer"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div className="footer-inner" variants={sectionVariants}>
        <motion.div className="footer-column footer-brand" variants={itemVariants}>
          <h3>Ankit Kumar</h3>
          <p>Building modern and user-friendly web experiences.</p>
          <a href="/resume.pdf" download className="resume-btn">
            📄 Download Resume
          </a>
        </motion.div>

        <motion.div className="footer-column footer-links" variants={itemVariants}>
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.target}>
                <motion.button
                  type="button"
                  onClick={() => handleScroll(link.target)}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 170, damping: 16 }}
                  style={{ cursor: "pointer" }}
                >
                  {link.label}
                </motion.button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="footer-column footer-social" variants={itemVariants}>
          <h4>Connect</h4>
          <div className="footer-social-icons">
            {socialItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="footer-icon-btn"
                aria-label={item.label}
                title={item.label}
                whileHover={{ scale: 1.18, rotate: 8, y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 180, damping: 14 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="footer-divider" variants={itemVariants} />

      <motion.div className="footer-bottom" variants={itemVariants}>
        <p>&copy; 2026 Ankit Kumar. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
