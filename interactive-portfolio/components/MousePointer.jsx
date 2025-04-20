"use client"
import React from 'react'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MousePointer = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1485 1673"
        width={40}
        height={40}
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
      >
        <path
          fill="#b277de"
          fillRule="nonzero"
          d="M730 858c661-1144-636-1144 25 0-661-1144-1309-22 13-22-1322 0-674 1123-13-22-661 1145 636 1145-25 0 661 1145 1309 22-13 22 1322 0 674-1122 13 22"
        />
      </svg>
    </motion.div>
    );
}

export default MousePointer