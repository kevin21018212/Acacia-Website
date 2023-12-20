// Popup.jsx
import React from "react";
import styles from "../css/popup.module.css";

const DonatePopup = ({ onClose }: any) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h4>Thank you for considering a donation!</h4>
        <p>Please choose a method to donate:</p>
        <a href="/pledge-agreement-form">Pledge Agreement Form</a>
        <a href="/paypal">PayPal</a>
        <a href="/google-pay">Google Pay</a>
        <a href="/apple-pay">Apple Pay</a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const ContactPopup = ({ onClose }: any) => {
  return (
    <div className={styles.popupContainer}>
      <div className={styles.popupContent}>
        <h4>Contact our board members for more information:</h4>
        <a href="mailto:boardmember1@example.com">Board Member 1</a>
        <a href="mailto:boardmember2@example.com">Board Member 2</a>
        <a href="mailto:boardmember3@example.com">Board Member 3</a>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export { DonatePopup, ContactPopup };
