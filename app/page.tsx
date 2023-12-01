"use client";
import About from "./components/about";
import Landing from "./components/landing";
import BoardMembers from "./components/boardmembers";
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
