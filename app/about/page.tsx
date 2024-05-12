"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import AboutCard from "./aboutcard";
import AboutText from "./abouttext";
import History from "./history";
const About = () => {
  return (
    <motion.div>
      <motion.div
        className={styles.aboutContainer}
        variants={{ visible: {} }}
        initial="hidden"
        animate="visible"
      >
        <AboutText />
      </motion.div>
      <motion.div
        className={styles.cardContainer}
        variants={{ visible: {} }}
        initial="hidden"
        animate="visible"
      >
        <AboutCard
          name="Ian Louis"
          description="The Denis G. McComber Scholarship helped assist me with paying the ever-mounting cost of gaining a higher education"
          imageURL="/images/ian.jpg"
        />

        <AboutCard
          name="Bryce Aufrecht"
          description="I would like to thank to board for this shcolarship. This will really help me out with paying for paying for college and my future career path"
          imageURL="/images/bryce.jpg"
        />
        <AboutCard
          name="Matthew Bennett"
          description="The Denis G. McComber Scholarship has been a pivotal support in my studies, letting me focus on achieving my academic goals"
          imageURL="/images/matthew.jpg"
        />
      </motion.div>

      <motion.div className={styles.historyContainer}>
        <History />
      </motion.div>
      <motion.div className={styles.policiesContainer}></motion.div>
    </motion.div>
  );
};

export default About;
