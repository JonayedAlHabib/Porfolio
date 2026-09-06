import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='border-t border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4'>
            <div className='text-xl font-bold text-zinc-800'>
                <span>THE-</span>
                <span className='text-teal-800'>JONAYED</span>
            </div>
            <div className='flex gap-4 text-teal-800 text-xl'>
                <a href='#' aria-label='Twitter' className='hover:text-teal-600 transition duration-300'>
                    <FaTwitter />
                </a>
                <a href='#' aria-label='Github' className='hover:text-teal-600 transition duration-300'>
                    <FaGithub />
                </a>
                <a href='#' aria-label='LinkedIn' className='hover:text-teal-600 transition duration-300'>
                    <FaLinkedin />
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
