import React from "react";
import { motion } from "framer-motion";
import styles from "./about.module.css";
import { cardVariants, descriptionVariants } from "../animations";

const AboutCard = ({ name, description, imageURL }: any) => {
  // Function to return background style

  const cardStyle = {
    backgroundImage: `url(${imageURL})`,
  };

  return (
    <motion.div className={styles.cardContainer} variants={cardVariants}>
      <motion.div
        initial="hidden"
        whileHover="visible"
        className={styles.card}
        style={cardStyle}
      >
        <motion.div
          className={styles.description}
          variants={descriptionVariants}
        >
          <h4>{name}</h4>
          <p>Scholarship Winner</p>
          <div className={styles.bio}>
            <p>{description}</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutCard;
