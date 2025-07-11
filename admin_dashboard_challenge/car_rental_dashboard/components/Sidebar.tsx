"use client";
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session } = useSession();

  return (
    <div className="relative">
      {/* Toggle Button (visible only on small screens) */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-16 left-1 bg-white shadow"
      >
        <Image src="/sidebar.png" alt="Open Sidebar" width={10} height={10} />
      </button>

      {/* Sidebar */}
      <section
        className={`
          ${isOpen ? 'flex' : 'hidden'} 
          md:flex
          fixed md:static top-0 left-0 z-40 
          h-screen w-64 bg-white shadow-md 
          flex-col items-center py-5
        `}
      >
        {/* Close Button for small screens */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden self-end mr-4 mb-2 text-xl font-bold text-gray-500"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="flex items-center gap-3 mb-6">
          <Image src="/Logo.svg" height={42} width={42} alt="logo" />
          <h1 className="text-sm sm:text-base md:text-xl font-extrabold whitespace-nowrap">
            Admin Dashboard
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1 w-full px-4">
          {/* Navigation */}
          <div className="flex flex-col gap-4 pt-10">
            <div className="flex items-center gap-5">
              <Image src="/Category.svg" alt="dashboard" height={20} width={20} />
              <h3 className="text-base text-slate-500 hover:text-[#605BFF] hover:font-bold">
                Dashboard
              </h3>
            </div>
          </div>

          {/* Logout at Bottom */}
          <div className="flex items-center justify-around mt-auto mb-4">
            {session?.user?.image ? (
            <Image
              src={session.user.image}
              height={42}
              width={42}
              alt="avatar"
              className="rounded-full"
            />
          ) : (
            <Image src="/globe.svg" height={42} width={42} alt="logo" />
          )}
            <button onClick={() => signOut({ callbackUrl: '/login' })}>
              <Image src="/Logout.svg" alt="exit" width={18} height={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;