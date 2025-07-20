'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useTheme } from '../contexts/ThemeContext'
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Gallery', href: '#' },
  { name: 'Products', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className='bg-white  md:bg-background w-full px-4 py-4 md:px-8 md:py-8 sticky z-50 top-0'>
      <div className='flex items-center justify-between'>
        <div>
          <Image className='hidden md:block' src="/QuillNestX.svg" alt='' width={80} height={30}/>
          <Image className='md:hidden' src="/mobilelogo.svg" alt='' width={80} height={30}/>
        </div>
        {/* Hamburger Icon and Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            className="md:hidden flex justify-center items-center w-10 h-10 focus:outline-none bg-transparent"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} color={isDark ? '#fff' : '#000'} />
          </button>
          <button
            className="ml-2 p-2 rounded-full bg-gray-200"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5m0 15V21m8.485-8.485h-1.5m-15 0H3m15.364-6.364l-1.06 1.06m-12.728 0l-1.06-1.06m12.728 12.728l-1.06-1.06m-12.728 0l-1.06 1.06M16.24 7.76A6 6 0 1112 6a6 6 0 014.24 1.76z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-800">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0112 21.75c-5.385 0-9.75-4.365-9.75-9.75 0-4.136 2.664-7.64 6.405-9.093a.75.75 0 01.908.325.75.75 0 01-.026.779A7.501 7.501 0 0012 19.5a7.48 7.48 0 006.188-3.25.75.75 0 01.779-.026.75.75 0 01.325.908z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex flex-col items-end md:hidden">
          <div className="bg-white w-2/3 h-full p-6 flex flex-col gap-6 shadow-lg">
            <button
              className="self-end mb-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} color={isDark ? '#fff' : '#000'} />
            </button>
            <nav className="flex flex-col gap-4 mt-8">
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-[#192CA7] hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  )
}
