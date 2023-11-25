// About.jsx
import React, { useEffect } from "react";
import styles from "../css/about.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DownloadBox from "./downloadbox";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleDownload = (file: string) => {
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
      className={styles.container}
      variants={{ visible: {} }}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      <div className={styles.about}>
        <motion.h4
          className={styles.heading}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.75 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          About
        </motion.h4>
        <motion.p
          className={styles.paragraph}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.5, delay: 0.9 },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          The Iowa State Acacia Chapter Foundation ("ISACF") is a non-profit
          foundation with the mission to raise funds for the benefit of the
          undergraduate members of the Iowa State chapter of Acacia Fraternity.
          The ISACF provides scholarships and other financial support for
          educational purposes as allowed by the IRS.
        </motion.p>
      </div>
      <div className={styles.downloads}>
        <h5 className={styles.downloadText}>Click here to download</h5>
        <motion.div className={styles.downloadBoxes}>
          <DownloadBox
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
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
