"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import ScholarshipForm from "./form";
import { boxVariants, headingVariants, textVariants } from "../animations";

const Scholarships = () => {
  const [popupType, setPopupType] = useState(null);

  const handleButtonClick = (type: any) => setPopupType(type);

  const handlePopupClose = () => setPopupType(null);

  const renderScholarship = (title: string, content: string, type: string) => (
    <div className={styles.scholarship}>
      <motion.div
        className={styles.info}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <h4>{title}</h4>
        <p>{content}</p>
      </motion.div>
      <motion.div
        className={styles.requirements}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className={styles.clickableBox}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
          }}
          onClick={() => handleButtonClick(type)}
        >
          <p>Click to Apply</p>
        </motion.div>
      </motion.div>
    </div>
  );

  return (
    <div className={styles.scholarshipsContainer}>
      <motion.div
        className={styles.heading}
        variants={headingVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Available Scholarships</h2>
        <h4>Click the Boxes to Download</h4>
      </motion.div>

      <div className={styles.scholarshipBox}>
        {renderScholarship(
          "Denis G. McComber Scholarship",
          " The Dennis G. McComber Scholarship was established by his brother, Larry J. McComber to recognize and honor Dennis for his many contributions to the Acacia Fraternity Chapter at Iowa State University. Funding for this scholarship was provided by Larry J. McComber #525, his wife Diane, Dennis’ wife Rita McComber, with supplemental contributions made by a number of friends and Brothers in the Fraternity.",
          "mcComber"
        )}

        {renderScholarship(
          "Continuing Education",
          " The Iowa State Acacia Chapter Foundation was formed in 2019 with the express purpose being to raise funds for scholarships or other educational-uses expenses designed to benefit members of the active chapter of Acacia Fraternity at Iowa State University. Funds raised are invested and the earnings from those investments are disbursed as they become available and at the discretion of the ISACF Board of Directors.",
          "edu"
        )}
      </div>

      {popupType && (
        <ScholarshipForm
          onClose={handlePopupClose}
          scholarship={popupType === "edu"}
        />
      )}
    </div>
  );
};

export default Scholarships;
