import { motion } from "framer-motion";
import styles from "../css/heading.module.css";
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
      <h1 className={styles.heading}>Iowa State Acacia Chapter Foundation</h1>
    </motion.div>
  );
};

export default Heading;
