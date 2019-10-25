import React, { useState, useEffect, useRef } from "react";
import styles from "./scroll.module.sass";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className={styles.scroll}>
      <div className={styles.wrapper}>
        <motion.div
          className={styles.container}
          style={{
            scale
          }}
        >
          <motion.div
            className={styles.item}
            style={{
              scaleY: scrollYProgress
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Scroll;
