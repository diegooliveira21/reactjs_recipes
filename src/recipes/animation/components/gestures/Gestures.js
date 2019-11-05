import * as React from "react";
import { motion } from "framer-motion";
import styles from "./gestures.module.sass";

const Gestures = () => (
  <div className={styles.gestures}>
    <motion.div
      className={styles.container}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    />
  </div>
);

export default Gestures;
