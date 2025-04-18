"use client"
import React from 'react'
import { Logo } from './Logo'
import Link from 'next/link'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Point } from '@react-three/drei'
import { monte } from '@/app/layout'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className={`flex ${monte.className} flex-row w-screen`}>
      <div className="hidden lg:block">
        <Canvas camera={{ position: [0.7, 0.7, 3.7], fov: 38 }}>
          <OrbitControls
            autoRotate={true}
            autoRotateSpeed={10}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Logo scale={0.1} position={[0, -0.3, 0]} />
          <Environment preset="studio" />
        </Canvas>
      </div>
      <nav className='text-white font-bold flex pb-16 flex-grow justify-evenly items-center sm:gap-5'>
        <Link href='/about'>About Me</Link>
        <Link href='/projcts'>Projects</Link>
        <Link href='/contact'>Contact</Link>
        <a
          href="/ShubhamN_Resume.pdf"
          download
          className="hover:scale-125 text-center px-5 py-2 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
        >
          GET MY RESUME
        </a>
      </nav>
    </header>
  )
}

export default Navbar