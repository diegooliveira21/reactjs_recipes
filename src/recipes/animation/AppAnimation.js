import React, { useState, useEffect } from "react";
import "./animation.styles.sass";
import { motion } from "framer-motion";

const AppAnimation = () => {
  const [anime, setAnime] = useState({});

  return (
    <>
      <button
        onClick={() =>
          setAnime(anime.isVisible ? { isVisible: false } : { isVisible: true })
        }
      >
        Show me!
      </button>
      <motion.div animate={{ opacity: anime.isVisible ? 1 : 0 }}>
        <h1>its visible!</h1>
      </motion.div>
    </>
  );
};

export default AppAnimation;
