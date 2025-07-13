"use client";
import { motion } from "motion/react";
export default function AnimatedText({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  return (
    <div className="overflow-hidden">
      <p>
        {text.split("").map((letter, index) => {
          delay += 0.025;
          return (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: delay, duration: 0.5 }}
            >
              {letter}
            </motion.span>
          );
        })}
      </p>
    </div>
  );
}
