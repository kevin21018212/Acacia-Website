import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { cardVariants, descriptionVariants } from "../animations";

const AboutCard = () => {
  return (
    <motion.div className={styles.cardContainer} variants={cardVariants}>
      <motion.div initial="hidden" whileHover="visible" className={styles.card}>
        <motion.div
          className={styles.description}
          variants={descriptionVariants}
        >
          <h4>Ian Louis</h4>
          <p>Scholarship Winner</p>
          <p className={styles.bio}>
            The Denis G. McComber Scholarship helped assist me with paying the
            ever-mounting cost of gaining a higher education
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
