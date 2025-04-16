import React from 'react'
import ThorModel from './ThorModel';
import { Suspense } from 'react';
import Loading from './Loading';

const Hero = () => {
  return (
    <div className='w-screen h-screen pointer-events-none'>
      <ThorModel />
       </div>
      
  )
}

export default Hero