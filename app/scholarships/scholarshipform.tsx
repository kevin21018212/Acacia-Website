"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import DownloadBox from "../reports/downloadbox";

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
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h4>{formTitle}</h4>

        <div className={styles.download}>
          <DownloadBox title={downloadTitle} file={downloadFile} />
        </div>
        <button onClick={handleApplyOnline}>Apply Online</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ScholarshipForm;
