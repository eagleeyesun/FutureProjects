"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";


const slideVariants = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    animate: {
      y: "0%",
      opacity: 1,
      transition: {
        duration:1 ,
        ease: [0.25, 1, 0.5, 1], 
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 1,
        ease: [0.25, 1, 0.5, 1],
      },
    },
  };

export default function PageTransition({ children }) {
    const pathname = usePathname();
  return (
    <motion.div
      key={pathname}
      
      variants={slideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}