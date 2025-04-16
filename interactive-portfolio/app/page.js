"use client";
import Loading from "@/components/Loading";
import Hero from "../components/Hero";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'framer-motion'
import Heading from "@/components/Heading";


export default function Home() {


  return (
    <div className="w-screen h-screen">
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute inset-0 transition-transform ease-in-out duration-500">
          <Hero className="w-full h-full z-0 " />
        </div >
        {/* <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div> */}

        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10 z-30">
          <Heading />
        </div>


      </div>

      <div className="z-20 relative">
        <Slider />
      </div>

    </div>

  );
}
