"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react' // <-- Import both icons
import LogoModel from './LogoModel'
import { monte } from '@/app/layout'
import { usePathname } from 'next/navigation'
// import useIsLargeScreen from '@/app/utils/useIsLargeScreen'

const Navbar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const hideContact = pathname === "/contact" 
  const hideProject = pathname === "/projects"
  const hideAbout = pathname === "/about"
  const hideHome = pathname === "/"

  const toggleMenu = () => setIsMenuOpen(prev => !prev)

  return (
    <header className={`flex ${monte.className} flex-row w-screen justify-between items-center px-4 py-2`}>
      {/* Logo */}
      <div className="w-[150px] md:[300px]">
        <LogoModel />
      </div>

      {/* Menu toggle for small screens */}
      <div className="block sm:hidden pb-8 z-50">
        <button onClick={toggleMenu}>
          {isMenuOpen ? <X size={25} className="text-white mt-5" /> : <Menu size={28} className="text-white" />}
        </button>
      </div>

      {/* Navigation for large screens */}
      <nav className="hidden sm:flex text-white font-bold justify-around items-center gap-5 pb-8 flex-grow">
        {!hideAbout && (
          <Link href="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        )}
        {!hideProject && (
          <Link href="/projects" className="relative group">
            Projects
            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        )}
        {!hideContact && (
          <Link href="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full" />
          </Link>
        )}
        {!hideHome && (
          <Link href="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-white transition-all duration-300 group-hover:w-full" />
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

      {/* Dropdown Menu for small screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-black text-white shadow-lg rounded-md flex flex-col gap-3 p-4 sm:hidden z-40 w-[200px]">
          {!hideAbout && <Link href="/about" onClick={toggleMenu}>About</Link>}
          {!hideProject && <Link href="/projects" onClick={toggleMenu}>Projects</Link>}
          {!hideContact && <Link href="/contact" onClick={toggleMenu}>Contact</Link>}
          {!hideHome && <Link href="/" onClick={toggleMenu}>Home</Link>}
          <a href="/ShubhamN_Resume.pdf" download className="text-white underline" onClick={toggleMenu}>
            GET MY RESUME
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar