"use client";
import About from "./home/about";
import Landing from "./home/landing";
import BoardMembers from "./home/boardmembers";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div className={styles.home}>
      <Landing />
      <About />
      <BoardMembers />
    </div>
  );
}
