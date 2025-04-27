import React from 'react'

const Plans = () => {
    return (
        <>
            <h2 className='text-secondary text-[40px] mb-14 pl-66'>Job Application Service Plans</h2>
            <section id='plans' className="w-screen h-screen grid grid-cols-3 grid-rows-5 gap-12 pt-4 text-secondary px-66 leading-none">

                {/* First Card */}
                <div className="row-span-3 border-2 border-secondary rounded-4xl px-6 py-4">
                    <div className="flex flex-col gap-3">
                        <div className='flex flex-col gap-8'>
                            <h3 className='text-[32px]'>April Promo</h3>
                            <h1 className='text-[56px] font-bold pb-4'>$35<span className='text-[24px]'>/week</span></h1>
                        </div>
                        <div className="border-b-1 border-[#BCBCBC]"></div>
                        <div className='flex gap-2 pt-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Curated jobs from 1M+ listings, <br /> refreshed every 48 hours</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Need more? Add extra apps for just $1.5 each</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Your own dedicated application analyst</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Personalized with up to 10 filters & 5 job titles</p>
                        </div>
                        <div className='pt-10'>
                            <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="row-span-3 border-2 border-secondary rounded-4xl px-6 py-4">
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-between items-center'>
                                <h3 className='text-[32px]'>Starter</h3>
                                <span className='border border-secondary rounded-full px-3 py-1 text-center bg-[#EBF1FF] text-[14px]'>Popular</span>
                            </div>
                            <h1 className='text-[56px] font-bold pb-4'>$50<span className='text-[24px]'>/week</span></h1>
                        </div>
                        <div className="border-b-1 border-[#BCBCBC]"></div>
                        <div className='flex gap-2'>
                            <p className='text-[16px]'>All the perks of the Promo Plan, plus:</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Resume review & story-focused feedback</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Dedicated search specialist</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Up to 50 job apps/week</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Extra apps at $1.5 each</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Analyst support within 6 hours (SLA/PST hours)</p>
                        </div>
                        <div className='pt-10'>
                            <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                        </div>
                    </div>
                </div>

                {/* Third Card */}
                <div className="row-span-3 border-2 border-secondary rounded-4xl px-6 py-4">
                    <div className="flex flex-col gap-4">
                        <div className='flex flex-col gap-8'>
                            <h3 className='text-[32px]'>Plus</h3>
                            <h1 className='text-[56px] font-bold pb-4'>$100<span className='text-[24px]'>/week</span></h1>
                        </div>
                        <div className="border-b-1 border-[#BCBCBC]"></div>
                        <div className='flex gap-2'>
                            <p className='text-[16px]'>Everything in Starter, with more muscle:</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Up to 75 apps/week</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Apply to 15 job titles</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Analyst + full application team on Pacific hours</p>
                        </div>
                        <div className='pt-30'>
                            <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                        </div>
                    </div>
                </div>

                {/* Last bottom box */}
                <div className="col-span-3 px-8 py-6 row-span-2 text-primary row-start-4 border-2 bg-secondary border-secondary rounded-4xl flex justify-between">
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h3 className='text-[32px] pb-1'>Advance</h3>
                            <p className='text-[16px]'>Top-tier support for serious job hunters:</p>
                        </div>
                        <div className="border-b-1 w-94 border-[#BCBCBC] py-2"></div>
                        <div className='flex gap-2 pt-4'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Everything in Plus</p>
                            <img src="/truegreen.png" alt="" className='w-5 h-5 ml-4' />
                            <p className='text-[16px]'>Custom Resumes & Cover Letters</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>20 fully customized applications/week</p>
                            <img src="/truegreen.png" alt="" className='w-5 h-5 ml-4' />
                            <p className='text-[16px]'>Help with complex job searchess</p>
                        </div>
                        <div className='flex gap-2'>
                            <img src="/truegreen.png" alt="" className='w-5 h-5' />
                            <p className='text-[16px]'>Access to senior resume experts, Founder & Exec Coaches</p>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div>
                            <h1 className='text-[56px] font-bold pb-4'>$150<span className='text-[24px]'>/week</span></h1>
                        </div>
                        <div>
                            <button className='text-secondary text-[22px] bg-primary rounded-full px-7 py-3'>Get Started →</button>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Plans