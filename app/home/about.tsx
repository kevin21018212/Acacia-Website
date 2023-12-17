import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../css/about.module.css";

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

  const descriptionVariants = {
    hidden: { height: "15%" },
    visible: { height: "40%" },
  };

  return (
    <motion.div
      className={styles.container}
      variants={{ visible: {} }}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className={styles.about}>
        <motion.h4
          className={styles.heading}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.75 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          About
        </motion.h4>
        <motion.p
          className={styles.paragraph}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.9 },
            },
          }}
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
      <div className={styles.cardContainer}>
        <motion.div className={styles.card}>
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
      </div>
    </motion.div>
  );
};

export default About;
