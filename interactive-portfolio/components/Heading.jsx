"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bBounce } from "@/app/layout";

const greetings = [
    "नमस्ते",        
    "Hello",         
    "¡Hola!",       
    "Bonjour",       
    "Ciao",         
    "こんにちは",    
   "नमस्ते",
  "SALAM",
  "SATSRIKAL",
  "MERHABA",
];

const Heading = () => {
  const [index, setIndex] = useState(0);

  // Change greeting every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white  flex gap-2 flex-col">

        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[index]}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-2xl sm:text-2xl md:text-4xl lg:text-6xl font-extrabold rainbow-text text-center"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>


      <motion.h1 className="font-bold">MY NAME IS</motion.h1>
      <motion.h1 className={`${bBounce.className} text-2xl sm:text-3xl md:text-6xl lg:text-8xl`}>SHUBHAM</motion.h1>
      <motion.h1 className={`${bBounce.className} text-2xl sm:text-4xl md:text-6xl lg:text-9xl pr-1`}>NALBHE</motion.h1>
    </div>
  );
};

export default Heading;