"use client"
import { motion, useScroll } from "motion/react";
import React from 'react'
import useMousePosition from '../utils/useMousePosition'
import Image from "next/image";
import { bBounce } from "../layout";

const page = () => {
  const [hovered, setHovered] = React.useState(false);

  const { x, y } = useMousePosition();
  const size = hovered ? 300 : 50

  return (
    <section className='xl:flex-row md:flex-row flex flex-col'>



      <div className="flex text-white flex-col w-screen h-screen text-center justify-center bg-[#1D1D1D] gap-5">

        <div onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="p-8 relative flex flex-col items-center">

          {/* Masked text ABOVE */}
          <motion.h1
            animate={{
              WebkitMaskPosition: `${x - size / 3}px ${y - size / 3}px`,
              WebkitMaskSize: `${size}px ${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut" }}
            className="pointer-events-none mask text-6xl font-bold absolute bottom-[-350] left-[49%] overflow-hidden -translate-x-1/2 z-10"
          >
            Let’s <br /> Build <br /> Something <br /> Cool
          </motion.h1>

          {/* Main visible text */}
          <h1 className="text-8xl relative font-extrabold z-0">GET IN</h1>
          <span className={`${bBounce.className} text-8xl z-0`}>TOUCH</span>
        </div>


        <form className="bg-[#1D1D1D] flex flex-col w-full gap-10">
          <div className="flex gap-5 justify-center">
            <input className="bg-[#1D1D1D] border border-zinc-100 px-3 py-4" type="text" placeholder="Your Name" />
            <input className="bg-[#1D1D1D] border border-zinc-300 px-3 py-4" type="email" placeholder="Your email address" />
          </div>
          <div className="">
            <textarea className="bg-[#1D1D1D] resize-none border border-white p-5 h-[100%]  w-1/2" name="" placeholder="What can i help you with?"></textarea>
          </div>
          <div>
            <button className="hover:bg-white hover:text-black border border-zinc-300 px-10 py-4 rounded-xl " type="submit">Submit Message</button>
          </div>
        </form>

      </div>

      <div className="w-screen h-screen relative flex justify-center items-center">
        <Image className="w-screen h-screen grayscale object-cover " src="/contactFlower.jpg" width={200} height={200} alt="image" />
      </div>
      <div className="absolute flex p-24 bottom-0 gap-5 right-0">
        <a href="https://wa.me/919096630160"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150"
        >
          <img className="w-10" src="/whatsapp.png" alt="whatsapp" />
        </a>
        <a href="https://github.com/eagleeyesun/My-Portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150"
        >
          <img className="w-10 bg-black rounded-full" src="/github.png" alt="github" />
        </a>

        <a href="http://www.linkedin.com/in/shubhamnalbhe/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150"
        >
          <img className="w-10" src="/linkedin.png" alt="linkedin" />
        </a>

        <a href="mailto:shubhamnalbhe9@gmail.com?subject=Let's Connect&body=Hi Shubham, I found your portfolio!"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-150"
        >
          <img className="w-10" src="/email.png" alt="email" />
        </a>

      </div>

    </section>
  )
}

export default page


{/* <motion.div
animate={{
  WebkitMaskPosition: `${x-size / 2}px ${y-size / 2}px`,
  WebkitMaskSize: `${size}px ${size}px`,

}} transition={{type:"tween",ease:"backOut"}}
 id='mask' className='text-4xl'>

  <h1 onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>Let’s Build Something Cool</h1>

</motion.div>
<div>
  <h1 className='text-4xl'>Lets Connect Yeah</h1>
</div> */}