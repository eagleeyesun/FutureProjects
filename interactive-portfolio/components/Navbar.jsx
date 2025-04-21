"use client"
import React from 'react'
import Link from 'next/link'
import LogoModel from './LogoModel'
import { monte } from '@/app/layout'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  const hideContact = pathname === "/contact" 
  const hideProject = pathname === "/projects"
  const hideAbout = pathname === "/about"
  const hideHome = pathname === "/"


  return (
    <header className={`flex ${monte.className} flex-row w-screen`}>
      <div className="hidden lg:block">
        <LogoModel />
      </div>
      <nav className='text-white font-bold flex pb-16 flex-grow justify-around items-center sm:gap-5'>
  {!hideAbout && (
    <Link href="/about" className="relative group">
      About
      <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )}
  {!hideProject && (
    <Link href="/projects" className="relative group">
      Projects
      <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )}
  {!hideContact && (
    <Link href="/contact" className="relative group">
      Contact
      <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )}
  {!hideHome && (
    <Link href="/" className="relative group">
      Home
      <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )}
  <a
    href="/ShubhamN_Resume.pdf"
    download
    className="sm:hover:scale-125 text-center md:px-5 md:py-2 border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]"
  >
    GET MY RESUME
  </a>
</nav>
    </header>
  )
}

export default Navbar