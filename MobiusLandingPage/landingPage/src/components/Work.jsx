import React from 'react'

const Work = () => {
  return (
   <section className='flex flex-col py-14 gap-14'>
    <h2 className='text-secondary text-[40px] pl-64'>How we work?</h2>
    <div className='flex justify-center gap-14'>
        <div>
            <h2 className='text-[56px] w-20 h-20 flex items-center justify-center rounded-full border-1 border-black'>1</h2>
            <div className="w-52 border-b-2 border-secondary my-4"></div> 
        <p className='text-secondary text-[26px]'>Submit Intake Form</p>
        </div>

        <div>
            <h2 className='text-[56px] w-20 h-20 flex items-center justify-center rounded-full border-1 border-black'>2</h2>
            <div className="w-52 border-b-2 border-secondary my-4"></div> 

        <p className='text-secondary text-[26px]'>We do the search and <br /> curation for list of jobs</p>
        </div>

        <div>
            <h2 className='text-[56px] w-20 h-20 flex items-center justify-center rounded-full border-1 border-black'>3</h2>
            <div className="w-52 border-b-2 border-secondary my-4"></div> 

        <p className='text-secondary text-[26px]'>You approve, we do the <br /> tedious part (applying)</p>
        </div>

        <div>
            <h2 className='text-[56px] w-20 h-20 flex items-center justify-center rounded-full border-1 border-black'>4</h2>
            <div className="w-52 border-b-2 border-secondary my-4"></div> 

        <p className='text-secondary text-[26px]'>You get the interviews</p>
        </div>
        
    </div>
   </section>
  )
}

export default Work