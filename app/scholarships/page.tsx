"use client";

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
            <h5>Academic</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Continuing Education</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Zarr</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>McComber</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Campbell</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h5>Baty</h5>
          </div>
          <div className={styles.requirements}></div>
        </div>
      </div>
    </div>
  );
}
