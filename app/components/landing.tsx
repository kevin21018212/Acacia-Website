import React from "react";
import { motion } from "framer-motion";
import styles from "../css/landing.module.css";

const Landing = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  const descriptionVariants = {
    hidden: { height: "12.5%" },
    visible: { height: "40%" },
  };

  return (
    <>
      <motion.div
        className={styles.headingContainer}
        initial="hidden"
        animate="visible"
        variants={itemVariants}
      >
        <h1 className={styles.heading}>Iowa State Acacia Chapter Foundation</h1>
      </motion.div>
      <motion.div className={styles.gridContainer}>
        <motion.div className={styles.landingcard}>
          <motion.div
            className={styles.description}
            initial="hidden"
            whileHover="visible"
            variants={descriptionVariants}
          >
            <h5>Ian Louis</h5>
            <p>Scholarship Winner</p>
            <p className={styles.bio}>Description </p>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.buttonContainer}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.clickableBox}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            <p>Donate</p>
          </motion.div>
          <motion.div
            className={styles.clickableBox}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
            }}
          >
            <p>Contact</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Landing;
