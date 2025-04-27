import React from 'react'

const Hero = () => {
    return (
        <section className='flex justify-center align-center gap-x-36 px-30 py-28'>
            <div>
                <h1 className='font-sora text-[80px] pb-8 font-semibold leading-none text-primary'>Land job interviews <br />
                    <span className='text-secondary'>10x</span> faster</h1>
                <p className='text-[20px] text-primary pb-10'>Custom-built resumes that match your goals, keywords, and <br /> recruiter expectations.</p>
                <button className='text-navyBlue text-[22px] bg-primary rounded-full px-7 py-3 hover:bg-[#022183] hover:text-primary'>Get Started →</button>
            </div>

            <div>
                <div>
                    <img src="/bookall.png" alt="bookcover" />
                 </div>
                

            </div>

        </section>
    )
}

export default Hero