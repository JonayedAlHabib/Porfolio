import React, { useState } from 'react'
import {navMenu, assets} from '../assets/asstes.js'
import { FaArrowRight } from 'react-icons/fa';
import { FaBars, FaXmark } from 'react-icons/fa6';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='fixed w-full py-4 z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <div className='text-xl sm:text-2xl font-bold text-zinc-800 dark:text-zinc-100'>
            <span>Jonayed</span>
            <span className='text-teal-800 dark:text-teal-400 front-orbitron'>.dev</span>
          </div>
          {/* Menu */}
          <div className='hidden md:flex space-x-8 border border-gray-200 dark:border-zinc-700 rounded-full px-10 py-4'>
            {
              navMenu.map((item, index)=>(
                <a key={index} href={`#${item.toLowerCase()}`}>{item}</a>
              ))
            }
          </div>
          {/* button */}
          <div className='flex items-center gap-2 sm:gap-4'>
            <ThemeToggle />
            <a href={assets.resumeCV} target='_blank' rel='noopener noreferrer' className='hidden sm:flex px-6 md:px-10 py-3 md:py-4 border border-zinc-800 dark:border-zinc-300 rounded-full items-center gap-2 cursor-pointer text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 hover:translate-x-1 transition duration-300'>
              Resume
              <FaArrowRight className='text-gray-500 dark:text-slate-400 text-sm'/>
            </a>
            <button
              type='button'
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label='Toggle menu'
              aria-expanded={isMenuOpen}
              className='md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-200 cursor-pointer'
            >
              {isMenuOpen ? <FaXmark /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className='md:hidden mt-4 flex flex-col gap-1 border border-gray-200 dark:border-zinc-700 rounded-2xl p-4 bg-white/95 dark:bg-zinc-900/95'>
            {
              navMenu.map((item, index)=>(
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className='px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition duration-300'
                >
                  {item}
                </a>
              ))
            }
            <a
              href={assets.resumeCV}
              target='_blank'
              rel='noopener noreferrer'
              onClick={() => setIsMenuOpen(false)}
              className='flex sm:hidden items-center justify-center gap-2 mt-2 px-6 py-3 border border-zinc-800 dark:border-zinc-300 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100 transition duration-300'
            >
              Resume
              <FaArrowRight className='text-sm'/>
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
