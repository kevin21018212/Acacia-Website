"use client";

import DownloadBox from "../reports/downloadbox";
import styles from "./page.module.css";

export default function Scholarships() {
  return (
    <div className={styles.scholarshipsContainer}>
      <div className={styles.heading}>
        <h2>Available Scholarships</h2>
        <h4>Click the Boxes to Download</h4>
      </div>

      <div className={styles.scholarshipBox}>
        <div className={styles.scholarship}>
          <div className={styles.info}>
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
          </div>
          <div className={styles.requirements}>
            <DownloadBox title="Continuing Education Application" file={""} />
          </div>
        </div>
      </div>
    </div>
  );
}
