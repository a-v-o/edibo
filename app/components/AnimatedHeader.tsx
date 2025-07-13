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
    <div>
      <h1>
        {text.split(" ").map((word, index) => {
          delay += 0.2;
          return (
            <span
              key={word + index}
              className="overflow-hidden mr-2 inline-flex"
            >
              <motion.span
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: delay, duration: 0.5 }}
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </h1>
    </div>
  );
}
