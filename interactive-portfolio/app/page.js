"use client";
import Loading from "@/components/Loading";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'
import Heading from "@/components/Heading";


export default function Home() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],

  });
  let { y } = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  return (
    <div className="w-screen h-screen" ref={ref}>
      <div className="relative w-full h-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0 transition-transform ease-in-out duration-500">
          <Hero className="w-full h-full z-0 " />
        </motion.div >
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>

        <div className="z-30 pt-[35%] relative flex justify-end">
          <Heading />
        </div>


      </div>
      <div className="z-20 relative">
        <Slider />
      </div>

    </div>

  );
}
