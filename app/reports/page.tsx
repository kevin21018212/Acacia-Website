"use client";

import styles from "./page.module.css";
import DownloadBox from "./downloadbox";
export default function Reports() {
  const handleDownload = (file: string) => {
    const fileUrl = `documents/${file}`;

    fetch(fileUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to download ${file}`);
        }
        return response.blob();
      })
      .then((blob) => {
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = file;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.reportsContainer}>
      <div className={styles.heading}>
        <h1>Financial Reports</h1>
      </div>

      <div className={styles.boxesContainer}>
        <DownloadBox
          title="Financial Reports to Alumni"
          handleDownload={() => handleDownload("2022 Financial Reports.pdf")}
        />
        <DownloadBox
          title="2022 Financial Statememnts"
          handleDownload={() => handleDownload("2022 Financial Reports.pdf")}
        />
        <DownloadBox
          title="1st Quarter 2023 Donations"
          handleDownload={() => handleDownload("1stQuarter2023Donations.pdf")}
        />
        <DownloadBox
          title="Scholarship Qualifications PDF"
          handleDownload={() => handleDownload("ScholarShipQualifications.pdf")}
        />
        <DownloadBox
          title="2nd Quarter Report to Alumni"
          handleDownload={() =>
            handleDownload("2023 - 2nd Quarter Report to Alumni.pdf")
          }
        />
      </div>
    </div>
  );
}
