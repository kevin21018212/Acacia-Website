import { motion } from "framer-motion";
import styles from "../css/heading.module.css";
import Link from "next/link";
const Heading = () => {
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className={styles.headingContainer}
      initial="hidden"
      animate="visible"
      variants={itemVariants}
    >
      <div className={styles.title}>
        <div className={styles.logo} />
        <div className={styles.heading}>
          <h1>Iowa State Acacia Chapter Foundation</h1>
        </div>
      </div>
      <div className={styles.links}>
        <Link href="/" className={styles.box}>
          <p>Home</p>
        </Link>
        <Link href="/about" className={styles.box}>
          <p>About</p>
        </Link>
        <Link href="/scholarships" className={styles.box}>
          <p>Scholarships</p>
        </Link>
        <Link href="/board" className={styles.box}>
          <p>Board</p>
        </Link>
        <Link href="/reports" className={styles.box}>
          <p>Reports</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Heading;
