"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import AboutCard from "./aboutcard";
import AboutText from "./abouttext";
import History from "./history";
import Winners from "./winners";
const About = () => {
  return (
    <motion.div>
      <motion.div className={styles.aboutContainer} variants={{ visible: {} }} initial="hidden" animate="visible">
        <AboutText />
      </motion.div>

      <Winners />

      <motion.div className={styles.historyContainer}>
        <History />
      </motion.div>
      <motion.div className={styles.policiesContainer}></motion.div>
    </motion.div>
  );
};

export default About;
