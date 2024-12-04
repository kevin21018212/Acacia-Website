"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import { boxVariants, headingVariants } from "../animations";
import DownloadBox from "../globals/downloadbox";

const Reports: React.FC = () => {
  const [files, setFiles] = useState<{ title: string; file: string }[]>([]);

  useEffect(() => {
    fetch("/api/files/reports")
      .then((res) => res.json())
      .then((data) => setFiles(data))
      .catch((error) => console.error("Failed to fetch files:", error));
  }, []);

  return (
    <motion.div className={styles.reportsContainer} initial="hidden" animate="visible">
      <motion.div className={styles.heading} variants={headingVariants} initial="hidden" animate="visible">
        <h2>Financial Reports</h2>
        <h4>Click the Boxes to Download</h4>
      </motion.div>
      <motion.div className={styles.boxesContainer} variants={boxVariants} initial="hidden" animate="visible">
        {files.map(({ title, file }) => (
          <motion.div className={styles.box} key={file}>
            <DownloadBox title={title} file={`reports/${file}`} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Reports;
