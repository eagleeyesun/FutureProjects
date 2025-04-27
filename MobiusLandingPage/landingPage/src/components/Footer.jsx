import React from 'react'

const Footer = () => {
    return (
        <footer id='privacy' className="flex flex-col text-secondary mt-32">


            <div className='px-18'>
                <img src="/footerlogo.png" alt="logo" loading='lazy' />
            </div>
            <div className="border-b-1 w-96 ml-18 mt-10 border-[#BCBCBC]"></div>

            <div className="flex justify-between items-start px-18 mt-10">

                <div className="flex gap-42">
                    <div>
                        <p className='underline'>Address</p>
                        <p>1875 Mission St Ste 103 #450</p>
                        <p>San Francisco, CA 94103</p>
                    </div>
                    <div>
                        <p className='underline'>Email</p>
                        <p>finance@mobiusengine.ai</p>
                    </div>
                    <div>
                        <p className='underline'>Telephone</p>
                        <p>650-889-6026</p>
                    </div>
                </div>


                <div className="flex flex-col items-end gap-3">
                    <p className='underline pr-24'>Socials</p>
                    <div className="flex gap-2 pr-14">

                        <div className="border border-secondary rounded-full p-2">
                            <img src="/footerLink.svg" alt="social 1" className="w-6 h-6" />
                        </div>

                        <div className="border border-secondary rounded-full p-2">
                            <img src="/footerLink.svg" alt="social 2" className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-screen bg-secondary px-18 text-primary mt-14 py-4 flex flex-row justify-between'>
                <div>
                    <p>© 2023 Mobiusservices LLC</p>
                </div>
                <div className='flex gap-8'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer