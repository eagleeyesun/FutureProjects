import React from 'react'

const About = () => {
    return (
        <section className='w-screen h-screen relative text-primary leading-none pt-20'>
            <img src="/bg2.png" alt="background" className='absolute top-0 left-0 w-full h-full object-cover -z-10' />
            <div>
                <h2 className='text-[40px] pb-16 pl-66'>About Us</h2>
            </div>
            

            <div className='flex flex-col items-center gap-16'>
                <div className='flex gap-x-20'>
                    <div>
                        <img src="/ashlink.png" alt="founder" />
                    </div>
                    <div>
                        <p className='font-[18px] pt-12'>
                            Ashwin is the founder of mobiusengine.ai. He is an accomplished <br /> senior executive with over 20 years of
                            experience in cloud <br /> infrastructure and financial services.
                            With over 2 decades of <br /> experience at Google and JP Morgan, Ashwin held various product <br /> and GTM roles.
                            Ashwin is an MBA holder from Yale University. <br /> <br />

                            Ashwin's vision with Mobius is to give job seekers a significant <br /> advantage in securing the roles of their dreams.

                        </p>
                    </div>
                </div>

                <div className='flex gap-x-20'>
                    <div>
                        <img src="/nicolecoach.png" alt="coach" />
                    </div>
                    <div>
                        <p className='font-[18px] pt-12'>
                            Nicole is an Executive coach at Mobius specializing in resume <br /> builds and career advisory. <br />
                            <br />
                            With a B.S. in Business Administration from UC Berkeley and 7+ <br /> years of
                            experience in AI-driven product strategy,
                            she has seen <br /> firsthand how the proper positioning opens doors. She takes a <br /> targeted,
                            results-driven approach to help clients confidently stand <br /> out and land roles that truly
                            match their skills and potential.
                        </p>
                    </div>
                </div>

            </div>
            <div className='flex flex-col text-center pt-10 gap-y-5'>
                <p className=' text-[18px] pl-50'>Learn more about our Board of Advisors <span className='text-xs'>↗</span></p>
                <p className=' text-[18px] pl-30'>Follow us on our Linkedin page<span className='text-xs'>↗</span></p>
            </div>

        </section>
    )
}

export default About