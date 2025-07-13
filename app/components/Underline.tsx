"use client";
import { motion } from "motion/react";

export default function Underline({ children }: { children: React.ReactNode }) {
  const underline = {
    initial: { width: "4px" },
    animate: { width: "100%" },
  };
  return (
    <motion.div
      className="w-fit p-0 relative flex justify-center items-center"
      whileHover="animate"
    >
      {children}
      <motion.div
        variants={underline}
        className="absolute -bottom-1 w-1 h-1 bg-light-green rounded-full transition-all hover:text-light-green pointer-events-none"
      ></motion.div>
    </motion.div>
  );
}
