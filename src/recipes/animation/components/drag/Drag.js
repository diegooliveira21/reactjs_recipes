import React, { useState, useEffect, useRef } from "react";
import styles from "./drag.styles.sass";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Drag = () => {
  const constraintsRef = useRef(null);
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 0, 200], [-45, 0, 45], {
    clamp: false
  });

  return (
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
  );
};

export default Drag;
