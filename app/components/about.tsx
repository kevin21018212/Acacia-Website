// About.jsx
import React, { useEffect } from "react";
import styles from "../css/about.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DownloadBox from "./downloadbox";
import Link from "next/link";

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
        <h4 className={styles.downloadText}>Click to Explore</h4>
        <motion.div className={styles.downloadBoxes}>
          <Link href="/about" className={styles.box}>
            <p>About Us</p>
          </Link>

          <Link href="/scholarships" className={styles.box}>
            <p>Scholarships</p>
          </Link>

          <Link href="/donors" className={styles.box}>
            <p>Donors</p>
          </Link>

          <Link href="/financial-reports" className={styles.box}>
            <p>Financial Reports</p>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
