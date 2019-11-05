import React, { useState, useEffect, useRef } from "react";
import styles from "./drag.module.sass";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Drag = () => {
  console.log(styles);
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
    clamp: false
  });

  return (
    <div className={styles.drag}>
      <motion.div
        className={styles.container}
        ref={constraintsRef}
        style={{
          rotateY
        }}
      >
        <motion.div
          className={styles.item}
          drag="x"
          dragConstraints={constraintsRef}
          style={{
            x
          }}
        />
      </motion.div>
    </div>
  );
};

export default Drag;
