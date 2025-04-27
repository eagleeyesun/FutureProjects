import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center px-20 py-10 text-[25px] font-sans'>
            <div>
                <img src="/logo.png" alt="logo" />
            </div>

            <div className='flex gap-8 items-center text-primary'>
                <a href="/">Home</a>
                <a href="#about">About Us</a>
                <a href="#plans">Plans</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#privacy">Privacy Policy</a>

                <div className="relative w-24">
                    <select className="appearance-none w-full bg-transparent px-0 py-2 pr-6 rounded">
                        <option>More</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-[20px] flex items-center">
                        <img src="/dropArrow.svg" alt="droparrow" />
                    </div>
                </div>
            </div>

            <div>
                <button className='text-navyBlue bg-primary rounded-full px-7 py-2 hover:bg-[#022183] hover:text-primary'>
                    Get Started
                </button>
            </div>
        </nav>
    )
}

export default Navbar