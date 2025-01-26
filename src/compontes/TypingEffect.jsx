import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingEffect = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index]);
        setIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 9000); // Wait 2 seconds before restarting the animation

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div>
      {displayedText.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export default TypingEffect;
