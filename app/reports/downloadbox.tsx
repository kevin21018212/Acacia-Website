"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "./downloadbox.module.css";

interface DownloadBoxProps {
  title: string;
  file: string;
}

const DownloadBox = ({ title, file }: DownloadBoxProps) => {
  const boxVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.15,
        delay: 0.25,
        type: "spring",
      },
    },
    hover: { scale: 1.1, duration: 0, delay: 0 },
  };

  const handleDownload = () => {
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
    <motion.div
      variants={boxVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      className={styles.box}
      onClick={handleDownload}
    >
      <div className={styles.title}>
        <h3>{title}</h3>
      </div>
    </motion.div>
  );
};

export default DownloadBox;
