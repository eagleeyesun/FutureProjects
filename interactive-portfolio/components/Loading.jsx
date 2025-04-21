"use client"
import Image from 'next/image'
import { doto } from '../app/layout'
import { motion } from 'motion/react'
import { useTime, useTransform, animate } from "motion/react"
import { useEffect, useRef, useState } from 'react'

export default function Loading() {
  const [show, setShow] = useState(true);
  const time = useTime();
  const rotate = useTransform(time, [0, 5000], [0, 360], { clamp: false });

  const countRef = useRef(null)

  useEffect(() => {
    animate(0,100, {
      duration: 5,
      ease: 'circOut',
      onUpdate: (latest) => {
        if (countRef.current) {
          countRef.current.textContent = Math.round(latest)
        }
      },
    })

  }, [])

  return (
    <div className={`${doto.className} relative w-screen h-screen flex justify-center items-center bg-black`}>
    
      <motion.h1
        className="absolute top-[60%] text-5xl text-white z-10 text-center"
        animate={{
          color: ["#FFFFFF", "#FFFFC5", "#FFFFFF"]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative flex items-center gap-4">
          {/* Left animated line */}
          <motion.div
            className="h-[2px] bg-[#FFFFC5]"
            initial={{ width: 0 }}
            animate={{ width: "30rem" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          
          <h1 className="text-base md:text-2xl whitespace-nowrap">Shubham Nalbhe</h1>

          {/* Right animated line */}
          <motion.div
            className="h-[2px] bg-[#FFFFC5]"
            initial={{ width: 0 }}
            animate={{ width: "30rem" }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.h1>

      {/* Rotating logo above text */}
      <motion.div style={{ rotate }} className="z-0">
        <Image
          src="/Final SUN logo.svg"
          alt="logo"
          width={400}
          height={400}
          priority
          style={{ height: "auto" }} 
          className="animate-pulse"
        />
      </motion.div>
      <div className="absolute z-0">
   <h2 className="text-white text-[clamp(2rem, 10vw, 10rem)] opacity-10" ref={countRef}>0</h2>
       </div>
    </div>
  );
}