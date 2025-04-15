"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Birthstone_Bounce } from "next/font/google";

const bBounce = Birthstone_Bounce({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-wind-song",
});

const greetings = [
    "नमस्ते",        // NAMASTE - Hindi
    "Hello",         // English
    "¡Hola!",        // Spanish
    "Bonjour",       // French
    "Ciao",          // Italian
    "こんにちは",     // Konnichiwa - Japanese
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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white flex gap-2 flex-col">

        <AnimatePresence mode="wait">
          <motion.h1
            key={greetings[index]}
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            exit={{ opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-6xl font-extrabold rainbow-text text-center"
          >
            {greetings[index]}
          </motion.h1>
        </AnimatePresence>


      <motion.h1 className="font-bold">MY NAME IS</motion.h1>
      <motion.h1 className={`${bBounce.className} font-bold text-8xl`}>SHUBHAM</motion.h1>
      <motion.h1 className={`${bBounce.className} font-bold text-9xl pr-10`}>NALBHE</motion.h1>
    </div>
  );
};

export default Heading;