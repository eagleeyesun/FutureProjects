import React from 'react'

const Header = () => {
  return (
    <header className='bg-white py-10 flex flex-col m-5 rounded-xl shadow-xl '>
       <div className='flex items-center justify-around'>
        <input type="search" placeholder='Search' className='bg-white outline-none border-1 px-4 py-2 border-gray-400 rounded-md' />
        <h2 className='text-md md:font-2xl font-extrabold'>Welcome Username</h2>

       </div>
      
    </header>
  )
}

export default Header