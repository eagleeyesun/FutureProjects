'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

const LazyThorModel = dynamic(() => import('./ThorModel'), { ssr: false })

const Hero = () => {
  const pathname = usePathname()
  const isHome = pathname === '/'

  if (!isHome) return null

  return (
    <div className='w-screen h-screen pointer-events-none'>
      <LazyThorModel />
    </div>
  )
}

export default Hero