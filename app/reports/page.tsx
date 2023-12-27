import React from "react";
import styles from "./page.module.css";
import DownloadBox from "./downloadbox";

const Reports: React.FC = () => {
  return (
    <div className={styles.reportsContainer}>
      <div className={styles.heading}>
        <h2>Financial Reports</h2>
        <h4>Click the Boxes to Download</h4>
      </div>
      <div className={styles.boxesContainer}>
        <div className={styles.box}>
          <DownloadBox
            title="Scholarship Qualifications PDF"
            file="ScholarshipQualifications.pdf"
          />
        </div>
        <div className={styles.box}>
          <DownloadBox
            title="2022 Year-End Financial Report"
            file="2022 Financial Reports.pdf"
          />
        </div>
        <div className={styles.box}>
          <DownloadBox
            title="2022 Financial Statements"
            file="2022 Financial Statements.pdf"
          />
        </div>
        <div className={styles.box}>
          <DownloadBox
            title="1st Quarter 2023 Donations"
            file="1stQuarter2023Donations.pdf"
          />
        </div>
        <div className={styles.box}>
          <DownloadBox
            title="2nd Quarter Report to Alumni"
            file="2023 - 2nd Quarter Report to Alumni.pdf"
          />
        </div>
      </div>
    </div>
  );
};

export default Reports;
