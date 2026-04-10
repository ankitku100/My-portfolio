import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Programming",
    items: ["C", "Java", "Python", "JavaScript", "SQL"],
  },
  {
    title: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Database",
    items: ["MongoDB", "SQL"],
  },
  {
    title: "Core Skills",
    items: [
      "Problem-solving",
      "Debugging",
      "Logic Building",
      "Code Optimization",
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
  marginBottom: "24px",
  color: "#ffffff",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const cardStyle = {
  background: "#171717",
  border: "1px solid #2a2a2a",
  borderRadius: "18px",
  padding: "24px",
};

const titleStyle = {
  color: "#00ffc3",
  fontSize: "1.05rem",
  marginBottom: "14px",
};

const listStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  color: "#d0d0d0",
  lineHeight: 1.6,
};

const descriptionStyle = {
  color: "#bdbdbd",
  lineHeight: 1.8,
  marginBottom: "24px",
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      style={sectionStyle}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={headingStyle} variants={itemVariants}>
          Skills
        </motion.h2>

        <motion.p style={descriptionStyle} variants={itemVariants}>
          Strong foundation in programming, web development, and problem-solving
          with hands-on experience in building real-world applications.
        </motion.p>

        <motion.div style={gridStyle} variants={sectionVariants}>
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              style={cardStyle}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 170, damping: 16 }}
            >
              <h3 style={titleStyle}>{group.title}</h3>
              <ul style={listStyle}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;