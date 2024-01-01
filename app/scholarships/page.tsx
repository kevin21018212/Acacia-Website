"use client";
import React from "react";
import styles from "./page.module.css";
import Heading from "./heading";
import ScholarshipSection from "./section";

const Scholarships = () => {
  return (
    <div className={styles.scholarshipsContainer}>
      <Heading />
      <ScholarshipSection />
    </div>
  );
};

export default Scholarships;
