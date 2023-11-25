import React, { useEffect } from "react";
import styles from "../css/about.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.75 } },
  };

  const paragraphVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 } },
  };
  const boxVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0.25,
        type: "spring",
        stiffness: 50,
      },
    },
    hover: { scale: 1.1, duration: 0, delay: 0 },
  };

  const handleDownload = (file: string) => {
    // Perform download logic here
    console.log(`Downloading ${file}`);
  };

  return (
    <motion.div
      className={styles.container}
      variants={{ visible: {} }} // define a variant for the container
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className={styles.about}>
        <motion.h4
          className={styles.heading}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          About
        </motion.h4>
        <motion.p
          className={styles.paragraph}
          variants={paragraphVariants}
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
      <div className={styles.downloads}>
        <h5 className={styles.downloadText}>Click here to download</h5>
        <motion.div className={styles.downloadBoxes}>
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            className={styles.box}
            onClick={() => handleDownload("Financial_Reports.pdf")}
          >
            <p className={styles.heading}>Financial Reports to Alumni</p>
          </motion.div>
          <motion.div
            variants={boxVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            className={styles.box}
            onClick={() => handleDownload("Operating_Procedures.pdf")}
          >
            <p className={styles.heading}>ISACF Operating Procedures</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
