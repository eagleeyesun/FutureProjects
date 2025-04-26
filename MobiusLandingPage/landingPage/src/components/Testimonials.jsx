import React from 'react'


const Testimonials = () => {
  return (
    <section className='w-screen h-screen'>
          <h2 className='text-[40px] pl-66 py-20 text-secondary'>What our clients have to say</h2>
          <div className='flex justify-center gap-10 px-28'>
            <img src="/testi1.png" alt="testimonial" />
            <img src="/testi1.png" alt="estimonial" />
            <img src="/testi1.png" alt="estimonial" />
          </div>

          <div className='flex justify-center pt-16 gap-14'>
            <button className='border-1 border-secondary rounded-full text-secondary px-10 py-4'>More customer testimonials ↗</button>
            <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
            </div>

            
    </section>
  )
}

export default Testimonials