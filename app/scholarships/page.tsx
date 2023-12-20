"use client";

import DownloadBox from "../reports/downloadbox";
import styles from "./page.module.css";

export default function Scholarships() {
  return (
    <div className={styles.scholarshipsContainer}>
      <div className={styles.heading}>
        <h2>Available Scholarships</h2>
      </div>

      <div className={styles.scholarshipBox}>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Denis G. McComber Scholarship</h5>
          </div>
          <div className={styles.requirements}>
            <DownloadBox
              title="Denis G. McComber Scholarship Application"
              file={""}
            />
          </div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Continuing Education</h5>
          </div>
          <div className={styles.requirements}>
            <DownloadBox title="Continuing Education Application" file={""} />
          </div>
        </div>
      </div>

      <div className={styles.heading}>
        <h2>Past Winners</h2>
      </div>
    </div>
  );
}
