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

{
  /* <DownloadBox
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
            handleDownload={() =>
              handleDownload("ScholarShipQualifications.pdf")
            }
          />
          <DownloadBox
            title="2nd Quarter Report to Alumni"
            handleDownload={() =>
              handleDownload("2023 - 2nd Quarter Report to Alumni.pdf")
            }
          /> */
}
export default DownloadBox;
