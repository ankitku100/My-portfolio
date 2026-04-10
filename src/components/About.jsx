import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.14,
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

const cardStyle = {
  background: "#171717",
  border: "1px solid #2a2a2a",
  borderRadius: "20px",
  padding: "28px",
  boxShadow: "0 18px 40px rgba(0, 0, 0, 0.16)",
};

const paragraphStyle = {
  color: "#bdbdbd",
  lineHeight: 1.8,
  fontSize: "1rem",
  marginBottom: "18px",
};

const accentStyle = {
  color: "#00ffc3",
  fontWeight: 600,
  marginBottom: "10px",
  display: "block",
};

const About = () => {
  return (
    <motion.section
      id="about"
      style={sectionStyle}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div style={contentStyle}>
        <motion.h2 style={headingStyle} variants={itemVariants}>
          About Me
        </motion.h2>

        <motion.div
          style={cardStyle}
          variants={itemVariants}
          whileHover={{ y: -5 }}
          transition={{ type: "spring", stiffness: 170, damping: 16 }}
        >
          <motion.span style={accentStyle} variants={itemVariants}>
            Ankit Kumar
          </motion.span>

          <motion.p style={paragraphStyle} variants={itemVariants}>
            I am a B.Tech Computer Science student with a strong passion for
            software development and building real-world applications. I enjoy
            solving problems through code and continuously improving my skills
            in modern technologies.
          </motion.p>

          <motion.p style={paragraphStyle} variants={itemVariants}>
            My core strengths include Python, data structures and algorithms,
            and web development. I have hands-on experience working with C,
            Java, JavaScript, and SQL, and I focus on writing clean, efficient,
            and maintainable code.
          </motion.p>

          <motion.p
            style={{ ...paragraphStyle, marginBottom: 0 }}
            variants={itemVariants}
          >
            As a Developer Intern at Program Analytics, I worked on practical
            projects and strengthened my debugging, logic-building, and
            development skills. I have built applications like a Ticket Booking
            Website and an E-commerce Recommendation System, where I focused on
            usability, performance, and real-world problem-solving.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;