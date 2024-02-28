// Popup.jsx
import React from "react";
import styles from "./popup.module.css";
import { motion } from "framer-motion";
import { popinVariants } from "../animations";

const DonatePopup = ({ onClose }: any) => {
  return (
    <div className={styles.popupContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={popinVariants}
        className={styles.popupContent}
      >
        <h5>Thank you for considering a donation!</h5>
        <h6>Please choose a method to donate:</h6>
        <a href="/pledge-agreement-form">Pledge Agreement Form</a>
        <a href="/paypal">PayPal</a>
        <a href="/google-pay">Google Pay</a>
        <a href="/apple-pay">Apple Pay</a>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

const ContactPopup = ({ onClose }: any) => {
  return (
    <div className={styles.popupContainer}>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={popinVariants}
        className={styles.popupContent}
      >
        <h5>Contact our board members for more information:</h5>
        <a href="mailto:jimdavisestancia@gmail.com">Jim Davis</a>
        <a href="mailto:tenxrings@gmail.com">Roger Kingery</a>
        <a href="mailto:acacia_814@hotmail.com">Harold Zarr</a>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </div>
  );
};

export { DonatePopup, ContactPopup };
