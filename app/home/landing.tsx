// Landing.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./landing.module.css";
import { ContactPopup, DonatePopup } from "./popup";
import { buttonVariants } from "../animations";

const Landing = () => {
  const [popupType, setPopupType] = useState(null);

  const handleButtonClick = (type: any) => {
    setPopupType(type);
  };

  const handlePopupClose = () => {
    setPopupType(null);
  };

  return (
    <>
      <motion.div className={styles.gridContainer}>
        <motion.div
          className={styles.buttonContainer}
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.clickableBox}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
            }}
            onClick={() => handleButtonClick("donate")}
          >
            <p>Donate</p>
          </motion.div>
          <motion.div
            className={styles.clickableBox}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 6px 10px rgba(0, 0, 0, 0.4)",
            }}
            onClick={() => handleButtonClick("contact")}
          >
            <p>Contact</p>
          </motion.div>
        </motion.div>
      </motion.div>

      {popupType === "donate" && <DonatePopup onClose={handlePopupClose} />}
      {popupType === "contact" && <ContactPopup onClose={handlePopupClose} />}
    </>
  );
};

export default Landing;
