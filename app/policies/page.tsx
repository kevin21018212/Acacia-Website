"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";

import { boxVariants, headingVariants } from "../animations";
import DownloadBox from "../globals/downloadbox";

const Policies: React.FC = () => {
  return (
    <motion.div
      className={styles.policiesContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Scholarship Policys</h2>
        <h4>Click the Boxes to Download</h4>
      </motion.div>
      <motion.div
        className={styles.boxesContainer}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className={styles.box}>
          <DownloadBox
            title="Scholarship Policy"
            file="Scholarship Policy.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="Non-Discrimination Policy"
            file="Non-Discrimination Policy.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="Investment Procedure Policy"
            file="Investment Procedure Policy.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox title="Gift Policy" file="Gift Policy.pdf" />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="Fundraising Policy"
            file="Fundraising Policy.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="Fund Account Policies"
            file="Fund Account Policies.pdf"
          />
        </motion.div>{" "}
        <motion.div className={styles.box}>
          <DownloadBox
            title="Educational Use Reinbursement Policy "
            file="Educational Use Reimbursement Policy.pdf"
          />
        </motion.div>{" "}
        <motion.div className={styles.box}>
          <DownloadBox
            title="Directors Officers Insurance Policy"
            file="Directors Officers Insurance Policy.pdf"
          />
        </motion.div>{" "}
        <motion.div className={styles.box}>
          <DownloadBox
            title="Conflict of Interest Policy"
            file="Conflict of Interest Policy.pdf"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Policies;
