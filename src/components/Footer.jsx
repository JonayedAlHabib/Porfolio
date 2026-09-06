import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  return (
    <div className='border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='text-xl font-bold text-zinc-800'>
                <span>THE-</span>
                <span className='text-teal-800'>JONAYED</span>
            </div>
            <div className='flex gap-4 text-teal-800 text-xl'>
                <a href='https://www.linkedin.com/in/jonayed-al-habib-673b132b1/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='hover:text-teal-600 transition duration-300'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/JonayedAlHabib' target='_blank' rel='noopener noreferrer' aria-label='Github' className='hover:text-teal-600 transition duration-300'>
                    <FaGithub />
                </a>
                <a href='https://leetcode.com/u/_jonayed_/' target='_blank' rel='noopener noreferrer' aria-label='Leetcode' className='hover:text-teal-600 transition duration-300'>
                    <SiLeetcode />
                </a>
            </div>
            <p className='text-sm text-zinc-500'>
                © {new Date().getFullYear()} The-Jonayed Developer. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
