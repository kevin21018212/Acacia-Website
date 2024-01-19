"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import DownloadBox from "./downloadbox";
import { boxVariants, headingVariants } from "../animations";

const Reports: React.FC = () => {
  return (
    <motion.div
      className={styles.reportsContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Financial Reports</h2>
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
            title="Scholarship Qualifications PDF"
            file="ScholarshipQualifications.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="2022 Year-End Financial Report"
            file="2022 Financial Reports.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="2022 Financial Statements"
            file="2022 Financial Statements.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="1st Quarter 2023 Donations"
            file="1stQuarter2023Donations.pdf"
          />
        </motion.div>
        <motion.div className={styles.box}>
          <DownloadBox
            title="2nd Quarter Report to Alumni"
            file="2023 - 2nd Quarter Report to Alumni.pdf"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Reports;
