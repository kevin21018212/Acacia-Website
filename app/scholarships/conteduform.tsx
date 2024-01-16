"use client";
import React, { useState } from "react";
import styles from "./form.module.css";
import DownloadBox from "../reports/downloadbox";

const ContinuingEducationForm = ({ onClose }: any) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h4>Continuing Education Form</h4>
        <DownloadBox
          title={"Download Application"}
          file={"signaturetemplate.png"}
        />
      </div>
    </div>
  );
};

export default ContinuingEducationForm;
