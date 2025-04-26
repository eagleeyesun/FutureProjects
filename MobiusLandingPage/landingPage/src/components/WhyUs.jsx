import React from 'react'

const WhyUs = () => {
  return (
    <section className='w-screen h-screen mt-10'>
        <div>
            <h2 className='text-[40px] text-navyBlue pl-66'>Why Choose Us?</h2>
        </div>
        <div className='flex justify-center align-center pt-14 gap-14'>
            <div className='relative'>
                 <img src="/whyus1.png" alt="trust" />
                 <img src="/trust.png" alt="trust" className='absolute top-0 pl-8 pt-8' />
            </div>

            <div className='relative'>
                 <img src="/whyus2.png" alt="people" />
                 <img src="/Profile.png" alt="people" className='absolute top-0 pl-8 pt-8' />
            </div>

            <div className='relative'>
                 <img src="/whyus3.png" alt="star" className='' />
                 <img src="Star.png" alt="star" className='absolute top-0 pl-8 pt-8' />
            </div>
           
        </div>
        

    </section>
  )
}

export default WhyUs