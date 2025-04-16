"use client"
import { motion, useScroll, useTransform, AnimatePresence,useSpring } from 'framer-motion'
import { useRef, useState } from "react"
import { monte } from '../app/layout'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const slides = [
    { id: 1, title: 'ABOUT', img: '/neon1.jpg', href: '/about' },
    { id: 2, title: 'WORK', img: '/neon2.jpg', href: '/projects' },
    { id: 3, title: 'CONTACT', img: '/neon3.jpg', href: '/contact' },
]

const Slider = () => {
    const scrollRef = useRef(null)

    const { scrollYProgress } = useScroll({ target: scrollRef })
    // const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])
    const [selected, setSelected] = useState(null)
    const router = useRouter()

    const rawX = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"])
    const x = useSpring(rawX, { stiffness: 100, damping: 30, restDelta:0.001 })  // 👈 smoother motion

    const handleClick = (slide) => {
        setSelected(slide)
        setTimeout(() => {
            router.push(slide.href)
        }, 800)
    }

    return (
        <section className={`bg-black h-[400vh] pl-[5%] ${monte.className}`} ref={scrollRef}>
            <div className='h-[100vh] sticky top-0 flex items-center overflow-hidden'>
                <motion.div style={{ x }} className='flex gap-[5%]'>
                    {slides.map(slide => (
                        <motion.div
                      
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            key={slide.id}
                            layoutId={`slide-${slide.id}`}
                            onClick={() => handleClick(slide)}
                            className='w-screen relative flex items-center justify-center cursor-pointer'
                        >
                            <Image className='h-[65%] rounded-xl w-full object-cover' width={1600} height={900} src={slide.img} alt={slide.title} />
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <h1 className='text-white text-center xl:text-[10vw] md:text-[8vw] text-[12vw] font-extrabold'>
                                    {slide.title}
                                </h1>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Zoom effect overlay */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        layoutId={`slide-${selected.id}`}
                        className='fixed top-0 left-0 w-screen h-screen z-50 bg-black flex items-center justify-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.img
                            className='absolute w-full h-full object-cover'
                            src={selected.img}
                            alt={selected.title}
                            initial={{ scale: 1 }}
                            animate={{ scale: 3}}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        />
                        <motion.h1
                            className='text-white text-center text-[12vw] font-extrabold z-10'
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 100 }}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                        >
                            {selected.title}
                        </motion.h1>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default Slider