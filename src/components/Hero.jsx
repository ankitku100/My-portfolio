import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profileImage from "../assets/profile.png";

const featureItems = [
  "Frontend & Backend Development",
  "Solving Complex Problems",
  "Creating User-Friendly Experiences",
];

const particles = [
  { top: "14%", left: "24%", size: "6px", delay: "0s", duration: "5.6s" },
  { top: "22%", left: "11%", size: "3px", delay: "1.2s", duration: "6.4s" },
  { top: "34%", left: "8%", size: "4px", delay: "2.4s", duration: "5.2s" },
  { top: "68%", left: "9%", size: "5px", delay: "0.8s", duration: "6.8s" },
  { top: "79%", left: "18%", size: "4px", delay: "1.9s", duration: "5.8s" },
  { top: "17%", right: "15%", size: "4px", delay: "0.5s", duration: "6.2s" },
  { top: "30%", right: "6%", size: "3px", delay: "2.1s", duration: "5.5s" },
  { top: "61%", right: "4%", size: "5px", delay: "1.5s", duration: "6s" },
  { top: "80%", right: "12%", size: "4px", delay: "2.8s", duration: "5.4s" },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const visualVariants = {
  hidden: { opacity: 0, x: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <motion.section
      className="hero"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
    >
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="hero-layout">
        <motion.div className="hero-copy" variants={contentVariants}>
          <motion.p className="hero-intro" variants={itemVariants}>
            Hi there, I{"\u2019"}m
          </motion.p>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Ankit Kumar
          </motion.h1>

          <motion.p className="hero-role" variants={itemVariants}>
            Software Developer | Web Developer
          </motion.p>

          <motion.div className="hero-divider" variants={itemVariants} />

          <motion.p className="hero-description" variants={itemVariants}>
            I{"\u2019"}m a passionate software developer with a knack for building
            dynamic and responsive web applications. I have a strong foundation
            in front-end and back-end technologies, and I excel at solving
            complex problems, optimizing code, and delivering user-friendly
            digital experiences. I{"\u2019"}m always eager to learn new things and
            keep up with the latest trends in web development.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="/resume.pdf" download className="resume-btn">
              📄 Download Resume
            </a>
          </motion.div>

          <motion.ul className="hero-checklist" variants={contentVariants}>
            {featureItems.map((item) => (
              <motion.li key={item} className="hero-check-item" variants={itemVariants}>
                <span className="hero-check-icon" aria-hidden="true">
                  <span className="hero-check-mark" />
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="hero-visual" variants={visualVariants}>
          <div className="profile-stage">
            <div className="profile-glow-spread" aria-hidden="true" />

            {particles.map((particle, index) => (
              <span
                key={`${particle.top ?? particle.bottom}-${index}`}
                className="profile-particle"
                style={{
                  ...particle,
                  "--particle-size": particle.size,
                  "--particle-delay": particle.delay,
                  "--particle-duration": particle.duration,
                }}
                aria-hidden="true"
              />
            ))}

            <motion.div
              className="profile-ring-orbit"
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            />

            <div className="profile-ring-inner" aria-hidden="true" />

            <motion.div
              className="profile-shell"
              animate={{
                y: [0, -14, 0],
                scale: [1, 1.012, 1],
              }}
              transition={{
                duration: 5.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="profile-image-wrap">
                <img
                  className="profile-image"
                  src={profileImage}
                  alt="Portrait of Ankit Kumar"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
