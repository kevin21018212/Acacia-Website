"use client";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import boardMembersData from "../memberdata";
import BoardMemberCard from "./membercard";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cardVariants } from "../animations";

const BoardMembers = () => {
  const controlsArray = Array.from({ length: boardMembersData.length }, () =>
    useAnimation()
  );

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach((controls) => controls.start("visible"));
    }
  }, [controlsArray, inView]);

  return (
    <div className={styles.membersContainer} ref={ref}>
      <div className={styles.membersTitle}>
        <h2>MEET OUR BOARD</h2>
      </div>
      <div className={styles.cardContainer}>
        {boardMembersData.map((member, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate={controlsArray[index]}
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
