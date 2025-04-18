"use client"
import MonkeyModel from '@/components/MonkeyModel'
import React from 'react'
import { monte } from '../layout'
import Image from 'next/image'
import { motion, useScroll } from "motion/react";


const skills = [
  "React JS", "Node JS", "Express", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Bootstrap", "Redux", "MongoDB", "Jest", "Git", "Shadcn", "Material UI",
  "Three JS", "Next JS", "Framer Motion", "Figma", "Postman", "Vercel",
  "Netlify", "Heroku", "Firebase", "Socket IO", "REST API", "GraphQL",
  "TypeScript",
];



const Page = () => {

  return (
    <>
      <section className={`${monte.className} relative pt-20 w-screen h-screen flex justify-evenly bg-[goldenrod]`}>
        <div className='absolute top-0 left-0 right-0 z-0'>
          <MonkeyModel />
        </div>

      <div className='flex flex-col w-screen h-screen text-wrap sm:flex md:flex-row'>
         <div className='relative flex flex-wrap flex-col w-screen h-screen gap-3 sm:p-10'>
          <h1 className='text-2xl font-extrabold md:text-6xl'>ABOUT</h1>
          <h2 className='text-xs sm:text-lg font-semibold'>Full-stack dev with a frontend heart and backend brain. <br />
            From crafting sleek React interfaces to engineering scalable and
            <br /> secure backends with Node.js, Express, and beyond—I do it all. <br />
            Obsessed with clean architecture, performance,<br /> and user delight.</h2>

          <p className='text-xs sm:text-lg font-semibold'>  I thrive on solving real-world challenges and <br /> turning complex problems into clean, scalable web solutions. <br />
            My approach to development is as dynamic <br /> as the tech landscape itself—there’s no one-size-fits-all,<br /> only continuous learning and adaptation. <br />

            Whether it’s pixels or endpoints, I’m all about crafting <br /> seamless digital experiences with a touch of fun and <br /> a lot of function.
            Always open to exciting opportunities, <br /> creative collaborations, and great conversations.

          </p>
        </div>


        <div className='relative p-5 flex flex-col align-center gap-5'>
          <Image className='pt-[10%] md:h-[40%] md:w-[100%] rounded-lg shadow-xl filter grayscale hover:grayscale-0 transition duration-300' src='/MyImg.jpeg' alt='my Image' height={200} width={600} />
          <img className='absolute top-[1%] right-[20%]' src="/bulle.gif" alt="just" />
          <a
            href="/ShubhamN_Resume.pdf"
            download
            className="hidden md:block font-bold text-center py-2 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
          >
            GET MY RESUME
          </a>
        </div>
      </div>
       


        <div className="overflow-hidden absolute bottom-0 whitespace-nowrap w-full bg-[goldenrod] py-4">
          <motion.div
            className="flex gap-8 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="text-lg font-bold text-black">
                {skill} •
              </span>

            ))}
          </motion.div>
        </div>


      </section>

      <div className='relative flex justify-center align-center bg-[goldenrod] sm:pt-8 sm:bottom-80'>
        <div className="flex flex-col text-center group relative  dark:bg-black border border-black dark:border-white rounded-lg p-3 transition-transform duration-300 hover:scale-105 shadow-[2px_2px_0_rgba(0,0,0)] dark:shadow-[2px_2px_0_rgba(255,255,255)] w-[50%] text-sm">
          <h1 className=" text-xl sm:text-2xl font-bold mb-1 text-black dark:text-white">WORK EXPERIENCE</h1>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Software Engineer</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">@ Bizkriege Solutions Pvt Ltd, Pune</p>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-300">Aug 2022 – Present</p>

          <div className="mt-2">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
              Building fast, responsive UIs with <span className="font-semibold text-black dark:text-white">React.js</span> and robust APIs using <span className="font-semibold text-black dark:text-white">Node.js</span> + <span className="font-semibold text-black dark:text-white">Express.js</span>. I focus on writing clean, testable code, enhancing app performance, and collaborating in agile teams to deliver scalable solutions.
            </p>
          </div>
        </div>

      </div>
    </>

  )
}

export default Page




// animate={{
//   WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,

// }} transition={{type:"tween",ease:"backOut"}}  id='mask' 