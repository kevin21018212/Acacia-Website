import React from "react";
import { motion } from "framer-motion";
import styles from "../css/landing.module.css";

const Landing = () => {
  const buttonVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div className={styles.gridContainer}>
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
