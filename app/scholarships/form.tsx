/* ScholarshipForm component */
"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./form.module.css";

import { buttonVariants, popinVariants } from "../animations";
import DownloadBox from "../globals/downloadbox";

const ScholarshipForm = ({ onClose, scholarship }: any) => {
  // Determine the values based on the scholarship prop
  const formTitle = scholarship
    ? "Scholarship Application Form"
    : "Denis G. McComber Scholarship Application Form";
  const downloadTitle = scholarship
    ? "Download Scholarship Application"
    : "Denis G. McComber Scholarship Application";
  const downloadFile = scholarship
    ? "ISACF Continuing Education Scholarship Application.docx"
    : "McComber Scholarship Application.docx";

  const handleApplyOnline = () => {
    window.location.href = scholarship
      ? "/scholarship-application"
      : "/continuing-education-application";
  };

  return (
    <motion.div
      className={styles.popupContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={popinVariants}
      >
        <h4>{formTitle}</h4>

        <motion.div className={styles.download}>
          <DownloadBox title={downloadTitle} file={downloadFile} />
        </motion.div>
        <div className={styles.application}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            onClick={handleApplyOnline}
          >
            Apply Online
          </motion.button>
        </div>
        <div className={styles.close}>
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            onClick={onClose}
          >
            Close
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ScholarshipForm;
