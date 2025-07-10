import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
  return (
    <section className='h-screen flex flex-col items-center py-10'>
      <div className='flex items-center gap-3'>
        <Image src='/Logo.svg' height={42} width={42} alt="logo" />
        <h1 className='text-xl font-extrabold'>Admin Dashboard</h1>
      </div>
      <div className='flex flex-col h-full justify-between'>
        <div className='flex items-center gap-5 pt-20 '>
          <Image src='/Category.svg' alt='dashboard' height={20} width={20} />
          <h3 className='text-base text-slate-500 hover:text-[#605BFF] hover:font-bold'>Dashboard</h3>
        </div>

        <div className='flex items-center gap-5'>
          <Image src='/Logo.svg' height={45} width={43} alt="logo" />
          <button><Image src='/Logout.svg' alt='exit' width={18} height={18} /></button>
        </div>

      </div>
    </section>
  )
}

export default Sidebar