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
        <h1 className={styles.heading}>Iowa State Acacia Chapter Foundation</h1>
      </div>
      <div className={styles.links}>
        <Link href="/about" className={styles.box}>
          <p>About Us</p>
        </Link>
        <Link href="/scholarships" className={styles.box}>
          <p>Scholarships</p>
        </Link>
        <Link href="/donors" className={styles.box}>
          <p>Donors</p>
        </Link>
        <Link href="/financial-reports" className={styles.box}>
          <p>Financial Reports</p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Heading;
