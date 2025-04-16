"use client"
import MonkeyModel from '@/components/MonkeyModel'
import React from 'react'
import { monte } from '../layout'
import Image from 'next/image'
import { motion,useScroll } from "motion/react";


const skills = [
  "React JS", "Node JS", "Express", "JavaScript", "HTML", "CSS", "Tailwind CSS",
  "Bootstrap", "Redux", "MongoDB", "Jest", "Git", "Shadcn", "Material UI",
  "Three JS", "Next JS", "Framer Motion", "Figma", "Postman", "Vercel",
  "Netlify", "Heroku", "Firebase", "Socket IO", "REST API", "GraphQL",
  "TypeScript",
];


const Page = () => {
  const { scrollY } = useScroll()

  return (
    <section className={`${monte.className} pt-20 w-screen h-screen flex justify-evenly bg-[goldenrod]`}>
      <div className='absolute top-0 left-0 right-0 z-0'>
        <MonkeyModel />
      </div>

      <div className='relative flex flex-col w-screen h-screen gap-3 p-10'>
        <h1 className='text-6xl font-extrabold'>ABOUT</h1>
        <h2 className='text-lg font-semibold'>Full-stack dev with a frontend heart and backend brain. <br />
          From crafting sleek React interfaces <br />to building robust Express APIs—I do it all. <br />
          Obsessed with clean architecture, performance,<br /> and user delight.</h2>

        <p className='text-lg'>  I thrive on solving real-world challenges and <br /> turning complex problems into clean, scalable web solutions. <br />
          My approach to development is as dynamic <br /> as the tech landscape itself—there’s no one-size-fits-all,<br /> only continuous learning and adaptation. <br />

          Whether it’s pixels or endpoints, I’m all about crafting <br /> seamless digital experiences with a touch of fun and <br /> a lot of function.
          Always open to exciting opportunities, <br /> creative collaborations, and great conversations.

        </p>
      </div>


      <div className='relative p-5 flex flex-col align-center gap-5'>
        <Image className='min-h-[30%] min-w-[100%] rounded-lg shadow-xl filter grayscale hover:grayscale-0 transition duration-300' src='/MyImg.jpeg' alt='my Image' height={200} width={600} />
        <img className='absolute top-[1%] right-[20%]' src="/bulle.gif" alt="just" />
        <a
        href="/ShubhamN_Resume.pdf"
        download
        className="inline-block text-center w-[50%] py-3 bg-slate-900 text-white font rounded-xl shadow-md hover:bg-blue-700 transition duration-300"
      >
        GET MY RESUME
      </a>
      </div>


      <div className="overflow-hidden absolute bottom-0 whitespace-nowrap w-full bg-white py-4">
        <motion.div
          className="flex gap-8 min-w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="text-lg font-medium text-gray-800">
              {skill} •
            </span>
            
          ))}
        </motion.div>
      </div>


    </section>
  )
}

export default Page