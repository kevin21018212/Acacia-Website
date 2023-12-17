"use client";

import styles from "./page.module.css";

export default function Scholarships() {
  return (
    <div className={styles.scholarshipsContainer}>
      <div className={styles.heading}>
        <h1>Available Scholarships</h1>
      </div>
      <div className={styles.scholarshipBox}>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>Academic</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>Continuing Education</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>Zarr</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>McComber</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>Campbell</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
        <div className={styles.scholarship}>
          <div className={styles.info}>
            <h3>Baty</h3>
          </div>
          <div className={styles.requirements}></div>
        </div>
      </div>
    </div>
  );
}
