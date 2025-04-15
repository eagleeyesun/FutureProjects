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
    <header className={`flex ${monte.className} flex-row items-cente w-screen`}>
      <div>
        <Canvas camera={{ position: [0.7, 0.7, 3.7], fov: 38 }}>
          <OrbitControls autoRotate={true} autoRotateSpeed={10} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}/>
          <Logo scale={0.10} position={[0,-0.7,0]} />
          <Environment preset="studio" />
        </Canvas>
      </div>
      <nav className='text-white font-bold flex flex-grow justify-evenly items-center'>
        <Link href='/about'>About Me</Link>
        <Link href='/projcts'>Projects</Link>
        <Link href='/contact'>Contact</Link>
        <Link
          href="https://wa.me/919096630160"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-all"
        >
          <Image src="/whatsapp.png" alt="whatsapp" width={30} height={30} />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar