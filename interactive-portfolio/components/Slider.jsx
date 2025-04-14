"use client"
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, useEffect, useState } from "react"
import { monte } from '../app/layout'
import Link from 'next/link'


const Slider = () => {
    const scrollRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: scrollRef })

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])


    return (
        <section className={`bg-black h-[400vh] pl-[5%] ${monte.className}`} ref={scrollRef}>
            <div className='h-[100vh] sticky top-0 flex items-center overflow-hidden'>
                <motion.div
                    style={{ x }}
                    className='flex gap-[5%]'
                >
                    {/* Slide 1 */}
                    <Link href='/about' className='w-screen relative flex items-center justify-center'>
                        <img className='h-[65%] rounded-xl w-full object-cover' src="/neon1.jpg" alt="neon1" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <h1 className='text-white text-center xl:text-[10vw] md:text-[8vw] text-[12vw] font-extrabold'>ABOUT</h1>
                        </div>
                    </Link>

                    {/* Slide 2 */}
                    <Link href='/projects' className='w-screen relative flex items-center justify-center'>
                        <img className='h-[65%] rounded-xl w-full object-cover' src="/neon2.jpg" alt="neon2" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <h1 className='text-white text-center xl:text-[10vw] md:text-[8vw] text-[12vw] font-extrabold'>WORK</h1>
                        </div>
                    </Link>

                    {/* Slide 3 */}
                    <Link href='/contact' className='w-screen relative flex items-center justify-center'>
                        <img className='h-[65%] rounded-xl w-full object-cover' src="/neon3.jpg" alt="neon3" />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <h1 className='text-white text-center xl:text-[10vw] md:text-[8vw] text-[12vw] font-extrabold'>CONTACT</h1>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    )
}

export default Slider