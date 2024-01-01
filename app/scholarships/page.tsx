"use client";
import React from "react";
import { motion } from "framer-motion";
import DownloadBox from "../reports/downloadbox";
import styles from "./page.module.css";

const Scholarships = () => {
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

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5, // Adjust delay as needed
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
        delay: 1, // Adjust delay as needed
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <div className={styles.scholarshipsContainer}>
      <motion.div
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Available Scholarships</h2>
        <h4>Click the Boxes to Download</h4>
      </motion.div>

      <div className={styles.scholarshipBox}>
        <div className={styles.scholarship}>
          <motion.div
            className={styles.info}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h4>Denis G. McComber Scholarship</h4>
            <p>
              The Dennis G. McComber Scholarship was established by his brother,
              Larry J. McComber to recognize and honor Dennis for his many
              contributions to the Acacia Fraternity Chapter at Iowa State
              University. Funding for this scholarship was provided by Larry J.
              McComber #525, his wife Diane, Dennis’ wife Rita McComber, with
              supplemental contributions made by a number of friends and
              Brothers in the Fraternity.
            </p>
          </motion.div>
          <motion.div
            className={styles.requirements}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
          >
            <DownloadBox
              title="Denis G. McComber Scholarship Application"
              file={""}
            />
          </motion.div>
        </div>
        <div className={styles.scholarship}>
          <motion.div
            className={styles.info}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <h4>Continuing Education</h4>
            <p>
              The Iowa State Acacia Chapter Foundation was formed in 2019 with
              the express purpose being to raise funds for scholarships or other
              educational-uses expenses designed to benefit members of the
              active chapter of Acacia Fraternity at Iowa State University.
              Funds raised are invested and the earnings from those investments
              are disbursed as they become available and at the discretion of
              the ISACF Board of Directors.
            </p>
          </motion.div>
          <motion.div
            className={styles.requirements}
            variants={boxVariants}
            initial="hidden"
            animate="visible"
          >
            <DownloadBox title="Continuing Education Application" file={""} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
