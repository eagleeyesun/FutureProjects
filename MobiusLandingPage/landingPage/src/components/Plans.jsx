import React from 'react'

const Plans = () => {
    return (
        <section className="w-screen h-screen grid grid-cols-5 grid-rows-5 gap-10 text-secondary">
            <div className="row-span-3 col-start-2 border-2 border-secondary rounded-2xl">
                <div className="flex flex-col gap-5">
                    <div>
                        <h3 className='text-[32px]'>April Promo</h3>
                        <h1 className='text-[40px] font-bold'>$35 <span className='text-[24px]'>/week</span></h1>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Curated jobs from 1M+ listings, <br /> refreshed every 48 hours</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Up to 20 human-applied roles per <br /> week (no bots, no fluff — just real <br /> company sites)</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5' />
                        <p>Need more? Add extra apps for just $1.5 each</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Your own dedicated application analyst</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5' />
                        <p>Personalized with up to 10 filters & 5 job titles</p>
                    </div>
                    <div>
                        <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                    </div>
                </div>

            </div>

            <div className="row-span-3 col-start-3  border-2 border-secondary rounded-2xl">
                <div className="row-span-3 col-start-2">
                    <div>
                        <div className='flex justify-around'>
                            <h3 className='text-[32px]'>Starter</h3>
                            <span>popular</span>
                        </div>

                        <h1 className='text-[40px] font-bold'>$50 <span className='text-[24px]'>/week</span></h1>
                    </div>
                    <div className='flex'>
                        <p>All the perks of the Promo Plan, plus:</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5' />
                        <p>Resume review & story-focused feedback</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Dedicated search specialist</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Up to 50 job apps/week</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Extra apps at $1.5 each</p>
                    </div>
                    <div className='flex'>
                        <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                        <p>Analyst support within 6 hours (SLA/PST hours)</p>
                    </div>
                    <div>
                        <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                    </div>
                </div>
            </div>

            <div className="row-span-3 col-start-4 border-2 border-secondary rounded-2xl">
                <div>
                    <h3 className='text-[32px]'>Plus</h3>
                    <h1 className='text-[40px] font-bold'>$100 <span className='text-[24px]'>/week</span></h1>
                </div>
                <div>
                    <p>Everything in Starter, with more muscle:</p>
                </div>
                <div className='flex'>
                    <img src="/truegreen.png" alt="" className='w-5 h-5' />
                    <p>Up to 75 apps/week</p>
                </div>
                <div className='flex'>
                    <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                    <p>Apply to 15 job titles</p>
                </div>
                <div className='flex'>
                    <img src="/truegreen.png" alt="" className='w-5 h-5'/>
                    <p>Analyst + full application team on Pacific hours</p>
                </div>
                <div>
                    <button className='text-primary text-[22px] bg-secondary rounded-full px-7 py-3'>Get Started →</button>
                </div>

            </div>
            <div className="col-span-3 row-span-2 col-start-2 row-start-4">4</div>
        </section>
    )
}

export default Plans