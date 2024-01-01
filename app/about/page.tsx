"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import AboutCard from "./aboutcard";
import AboutText from "./abouttext";

const About = () => {
  return (
    <motion.div
      className={styles.aboutContainer}
      variants={{ visible: {} }}
      initial="hidden"
      animate="visible"
    >
      <AboutText />
      <AboutCard />
    </motion.div>
  );
};

export default About;
