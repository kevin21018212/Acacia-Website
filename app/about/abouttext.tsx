import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { textVariants } from "../animations";

const AboutText = () => {
  return (
    <div className={styles.about}>
      <motion.h3 variants={textVariants} initial="hidden" animate="visible">
        About
      </motion.h3>
      <motion.p
        className={styles.paragraph}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        The Iowa State Acacia Chapter Foundation ("ISACF") is a non-profit
        foundation with the mission to raise funds for the benefit of the
        undergraduate members of the Iowa State chapter of Acacia Fraternity.
        The ISACF provides scholarships and other financial support for
        educational purposes as allowed by the IRS.
      </motion.p>
    </div>
  );
};

export default AboutText;
