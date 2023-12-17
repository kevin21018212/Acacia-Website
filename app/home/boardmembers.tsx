import React, { useEffect } from "react";
import styles from "../css/boardmembers.module.css";
import boardMembersData from "../memberdata";
import BoardMemberCard from "./membercard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BoardMembers = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: 0.25,
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <div className={styles.membersContainer} ref={ref}>
      <div className={styles.membersTitle}>
        <h1>MEET OUR BOARD</h1>
      </div>
      <div className={styles.cardContainer}>
        {boardMembersData.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            className={styles.cardBox}
          >
            <BoardMemberCard member={member} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
