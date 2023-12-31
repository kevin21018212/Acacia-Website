// BoardMemberCard.jsx
import React from "react";
import { motion } from "framer-motion";
import styles from "./membercard.module.css";

interface BoardMemberCardProps {
  member: {
    name: string;
    position: string;
    bio: string;
    image: string | null;
  };
}

const BoardMemberCard: React.FC<BoardMemberCardProps> = ({ member }) => {
  const descriptionVariants = {
    hidden: { height: "10%" },
    visible: { height: "40%" },
  };

  const infoVariants = {
    hidden: { opacity: 0, height: "0%" },
    visible: { opacity: 1, height: "30%" },
  };

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
        <h5 className={styles.name}>{member.name}</h5>
        <h6>{member.position}</h6>
        <motion.div variants={infoVariants} className={styles.info}>
          <p className={styles.bio}>{member.bio}</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BoardMemberCard;
