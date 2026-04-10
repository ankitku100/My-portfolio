import React, { useState } from "react";
import "./SocialIcons.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion, useAnimationControls } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      delay: 0.35,
      staggerChildren: 0.12,
    },
  },
};

const iconVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const iconSpring = {
  type: "spring",
  stiffness: 200,
  damping: 14,
};

const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = useState("email");
  const emailControls = useAnimationControls();
  const githubControls = useAnimationControls();
  const linkedinControls = useAnimationControls();

  const iconMap = {
    email: emailControls,
    github: githubControls,
    linkedin: linkedinControls,
  };

  const handleIconClick = async (icon) => {
    setActiveIcon(icon);
    await iconMap[icon].start({
      scale: [1, 1.2, 1],
      rotate: [0, 15, 0],
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 12,
      },
    });
  };

  return (
    <motion.div
      className="icons"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        variants={iconVariants}
        animate={emailControls}
        onClick={() => handleIconClick("email")}
        whileHover={{ scale: 1.2, rotate: 8 }}
        whileTap={{ scale: 0.94 }}
        transition={iconSpring}
        style={{
          filter:
            activeIcon === "email"
              ? "drop-shadow(0 0 10px rgba(0, 255, 195, 0.3))"
              : "drop-shadow(0 0 0 rgba(0, 255, 195, 0))",
        }}
      >
        <FaEnvelope />
      </motion.div>

      <motion.div
        variants={iconVariants}
        animate={githubControls}
        onClick={() => handleIconClick("github")}
        whileHover={{ scale: 1.2, rotate: 8 }}
        whileTap={{ scale: 0.94 }}
        transition={iconSpring}
        style={{
          filter:
            activeIcon === "github"
              ? "drop-shadow(0 0 10px rgba(0, 255, 195, 0.3))"
              : "drop-shadow(0 0 0 rgba(0, 255, 195, 0))",
        }}
      >
        <FaGithub />
      </motion.div>

      <motion.div
        variants={iconVariants}
        animate={linkedinControls}
        onClick={() => handleIconClick("linkedin")}
        whileHover={{ scale: 1.2, rotate: 8 }}
        whileTap={{ scale: 0.94 }}
        transition={iconSpring}
        style={{
          filter:
            activeIcon === "linkedin"
              ? "drop-shadow(0 0 10px rgba(0, 255, 195, 0.3))"
              : "drop-shadow(0 0 0 rgba(0, 255, 195, 0))",
        }}
      >
        <FaLinkedin />
      </motion.div>
    </motion.div>
  );
};

export default SocialIcons;
