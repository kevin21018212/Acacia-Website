"use client";

import Landing from "./home/landing";

import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <Landing />
    </div>
  );
}
