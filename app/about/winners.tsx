"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import AboutCard from "./aboutcard";

const Winners = () => {
  const [winners, setWinners] = useState<{ name: string; description: string; imageURL: string }[]>([]);

  useEffect(() => {
    fetch("/documents/winners.json")
      .then((response) => response.json())
      .then((data) => setWinners(data))
      .catch((error) => console.error("Failed to fetch winners:", error));
  }, []);

  return (
    <motion.div className={styles.cardContainer} variants={{ visible: {} }} initial="hidden" animate="visible">
      {winners.map(({ name, description, imageURL }) => (
        <AboutCard key={name} name={name} description={description} imageURL={imageURL} />
      ))}
    </motion.div>
  );
};

export default Winners;
