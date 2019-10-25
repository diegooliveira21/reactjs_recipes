import React, { useState, useEffect, useRef } from "react";
import "./scroll.styles.sass";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);

  return (
    <div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        />
      </motion.div>
    </div>
  );
};

export default Scroll;
