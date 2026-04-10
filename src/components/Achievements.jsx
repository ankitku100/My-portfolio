import { motion } from "framer-motion";
import React from "react";

const achievements = [
  {
    icon: "🏆",
    segments: [
      { text: "Solved " },
      { text: "250+", accent: true },
      {
        text: " problems on LeetCode, strengthening data structures and problem-solving skills",
      },
    ],
  },
  {
    icon: "🏆",
    segments: [
      { text: "Achieved " },
      { text: "1★", accent: true },
      { text: " rating on CodeChef and earned " },
      { text: "Problem Solving badge", accent: true },
      { text: " on HackerRank" },
    ],
  },
  {
    icon: "🏆",
    segments: [
      { text: "Completed " },
      { text: "B1 Preliminary (PET)", accent: true },
      { text: " - Cambridge English certification" },
    ],
  },
  {
    icon: "💻",
    segments: [
      { text: "Built multiple web applications using " },
      { text: "React", accent: true },
      { text: ", " },
      { text: "JavaScript", accent: true },
      { text: ", and " },
      { text: "MongoDB", accent: true },
    ],
  },
  {
    icon: "💻",
    segments: [
      { text: "Developed a recommendation system to improve product discovery using " },
      { text: "content-based filtering", accent: true },
    ],
  },
  {
    icon: "🏆",
    segments: [
      { text: "Consistently practicing " },
      { text: "DSA", accent: true },
      { text: " and improving logical thinking skills" },
    ],
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const sectionStyle = {
  padding: "100px clamp(24px, 6vw, 80px)",
  background: "#0f0f0f",
  scrollMarginTop: "100px",
};

const contentStyle = {
  maxWidth: "980px",
  margin: "0 auto",
};

const headingStyle = {
  fontSize: "clamp(1.9rem, 3vw, 2.2rem)",
  marginBottom: "18px",
  color: "#ffffff",
};

const descriptionStyle = {
  color: "#bdbdbd",
  lineHeight: 1.8,
  marginBottom: "28px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "#171717",
  border: "1px solid #2a2a2a",
  borderRadius: "20px",
  padding: "24px",
  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)",
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
  minHeight: "168px",
};

const iconWrapStyle = {
  width: "46px",
  height: "46px",
  borderRadius: "14px",
  background: "rgba(0, 255, 195, 0.08)",
  border: "1px solid rgba(0, 255, 195, 0.16)",
  display: "grid",
  placeItems: "center",
  fontSize: "1.35rem",
  lineHeight: 1,
  boxShadow: "0 0 20px rgba(0, 255, 195, 0.08)",
  flexShrink: 0,
};

const cardTextStyle = {
  color: "#d0d0d0",
  lineHeight: 1.8,
  fontSize: "1rem",
  margin: 0,
};

const accentStyle = {
  color: "#00ffc3",
  fontWeight: 700,
};

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      style={sectionStyle}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={headingStyle} variants={itemVariants}>
          Achievements
        </motion.h2>

        <motion.p style={descriptionStyle} variants={itemVariants}>
          Highlights from my coding journey, certifications, and hands-on project work.
        </motion.p>

        <motion.div style={gridStyle} variants={sectionVariants}>
          {achievements.map((achievement, index) => (
            <motion.article
              key={index}
              style={cardStyle}
              variants={itemVariants}
              whileHover={{
                y: -5,
                scale: 1.01,
                boxShadow: "0 22px 48px rgba(0, 0, 0, 0.22)",
              }}
              whileTap={{ scale: 0.99 }}
              transition={{ type: "spring", stiffness: 170, damping: 16 }}
            >
              <div style={iconWrapStyle} aria-hidden="true">
                {achievement.icon}
              </div>

              <p style={cardTextStyle}>
                {achievement.segments.map((segment, segmentIndex) => (
                  <span
                    key={segmentIndex}
                    style={segment.accent ? accentStyle : undefined}
                  >
                    {segment.text}
                  </span>
                ))}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
