// BoardMemberCard.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./membercard.module.css";
import { descriptionVariants, infoVariants } from "../animations";

interface BoardMemberCardProps {
  member: {
    name: string;
    position: string;
    bio: string;
    image: string | null;
  };
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  const imagePath = `${member.image}`;

  const cardStyle = {
    backgroundImage: `url(${imagePath})`,
  };

  return (
    <motion.div className={styles.card} style={cardStyle}>
      <motion.div
        className={styles.description}
        variants={descriptionVariants}
        initial="hidden"
        whileHover="visible"
      >
        <h6>{member.name}</h6>
        <p>{member.position}</p>
        <motion.div variants={infoVariants} className={styles.info}>
          <p className={styles.bio}>{member.bio}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BoardMemberCard;
