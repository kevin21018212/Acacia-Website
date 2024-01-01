import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./page.module.css";

const Heading = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: true,
  });

  const headingVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <motion.div
      className={styles.heading}
      variants={headingVariants}
      initial="hidden"
      animate={headingInView ? "visible" : "hidden"}
      ref={headingRef}
    >
      <h2>Available Scholarships</h2>
      <h4>Click the Boxes to Download</h4>
    </motion.div>
  );
};

export default Heading;
