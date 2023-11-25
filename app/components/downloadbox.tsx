// DownloadBox.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "../css/about.module.css";

interface DownloadBoxProps {
  title: string;
  handleDownload: () => void;
}

const DownloadBox: React.FC<DownloadBoxProps> = ({ title, handleDownload }) => {
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

  return (
    <motion.div
      variants={boxVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
      className={styles.box}
      onClick={handleDownload}
    >
      <p className={styles.heading}>{title}</p>
    </motion.div>
  );
};

export default DownloadBox;
