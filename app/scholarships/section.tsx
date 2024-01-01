import React from "react";
import { motion } from "framer-motion";
import DownloadBox from "../reports/downloadbox";
import styles from "./page.module.css";
import { useInView } from "react-intersection-observer";

const ScholarshipSection = () => {
  const [textRef, textInView] = useInView({
    triggerOnce: true,
  });

  const [boxRef1, boxInView1] = useInView({
    triggerOnce: true,
  });

  const [boxRef2, boxInView2] = useInView({
    triggerOnce: true,
  });

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const boxVariants = {
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
    <div className={styles.scholarshipBox}>
      <div className={styles.scholarship}>
        <motion.div
          className={styles.info}
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          ref={textRef}
        >
          <h4>Denis G. McComber Scholarship</h4>
          <p>
            The Dennis G. McComber Scholarship was established by his brother,
            Larry J. McComber to recognize and honor Dennis for his many
            contributions to the Acacia Fraternity Chapter at Iowa State
            University. Funding for this scholarship was provided by Larry J.
            McComber #525, his wife Diane, Dennis’ wife Rita McComber, with
            supplemental contributions made by a number of friends and Brothers
            in the Fraternity.
          </p>
        </motion.div>
        <motion.div
          className={styles.requirements}
          variants={boxVariants}
          initial="hidden"
          animate={boxInView1 ? "visible" : "hidden"}
          ref={boxRef1}
        >
          <DownloadBox
            title="Denis G. McComber Scholarship Application"
            file=""
          />
        </motion.div>
      </div>
      <div className={styles.scholarship}>
        <motion.div
          className={styles.info}
          variants={textVariants}
          initial="hidden"
          animate={textInView ? "visible" : "hidden"}
          ref={textRef}
        >
          <h4>Continuing Education</h4>
          <p>
            The Iowa State Acacia Chapter Foundation was formed in 2019 with the
            express purpose being to raise funds for scholarships or other
            educational-uses expenses designed to benefit members of the active
            chapter of Acacia Fraternity at Iowa State University. Funds raised
            are invested and the earnings from those investments are disbursed
            as they become available and at the discretion of the ISACF Board of
            Directors.
          </p>
        </motion.div>
        <motion.div
          className={styles.requirements}
          variants={boxVariants}
          initial="hidden"
          animate={boxInView2 ? "visible" : "hidden"}
          ref={boxRef2}
        >
          <DownloadBox title="Continuing Education Application" file="" />
        </motion.div>
      </div>
    </div>
  );
};

export default ScholarshipSection;
