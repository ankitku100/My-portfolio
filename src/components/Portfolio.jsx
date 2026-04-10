import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ticket Booking Website",
    tech: "HTML, CSS, JavaScript",
    description:
      "Built a multi-service booking platform for train, bus, flight, and hotel reservations. Designed a responsive interface with search and filter functionality to make booking faster and easier for users.",
  },
  {
  title: "CalcPro – JavaScript Calculator",
  tech: "HTML, CSS, JavaScript",
  description:
    "Developed a responsive calculator web application using HTML, CSS, and JavaScript with real-time arithmetic operations and accurate result computation. Designed a clean and intuitive user interface with smooth interactions and responsive layout, focusing on efficient logic implementation and seamless user experience.",
},
  {
    title: "Smart E-Commerce Recommendation System",
    tech: "React, MongoDB",
    description:
      "Developed a recommendation system that suggests products based on user behavior and interests. Implemented the project with React and MongoDB using basic content-based filtering logic to improve product discovery.",
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
  padding: "100px clamp(24px, 6vw, 80px) 120px",
  background: "#111111",
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

const cardListStyle = {
  display: "grid",
  gap: "22px",
};

const cardStyle = {
  background: "#171717",
  border: "1px solid #2a2a2a",
  borderRadius: "20px",
  padding: "28px",
  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)",
  cursor: "pointer",
};

const titleStyle = {
  color: "#ffffff",
  fontSize: "1.15rem",
  marginBottom: "10px",
};

const techStyle = {
  display: "inline-block",
  color: "#00ffc3",
  marginBottom: "12px",
  fontSize: "0.95rem",
};

const descriptionStyle = {
  color: "#c5c5c5",
  lineHeight: 1.8,
};

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      style={sectionStyle}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={headingStyle} variants={itemVariants}>
          Portfolio
        </motion.h2>
        <motion.div style={cardListStyle} variants={sectionVariants}>
          {projects.map((project) => (
            <motion.article
              key={project.title}
              style={cardStyle}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 170, damping: 16 }}
              tabIndex={0}
              aria-label={project.title}
            >
              <h3 style={titleStyle}>{project.title}</h3>
              <span style={techStyle}>{project.tech}</span>
              <p style={descriptionStyle}>{project.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
