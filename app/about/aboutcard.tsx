import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

const AboutCard = () => {
  const descriptionVariants = {
    hidden: { height: "15%" },
    visible: { height: "40%" },
  };

  const cardVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0.75,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div className={styles.cardContainer} variants={cardVariants}>
      <motion.div className={styles.card}>
        <motion.div
          className={styles.description}
          initial="hidden"
          whileHover="visible"
          variants={descriptionVariants}
        >
          <h3>Ian Louis</h3>
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
