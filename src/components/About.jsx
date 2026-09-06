import React from 'react'
import { assets, profileData } from '../assets/asstes'
import { FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='py-20 scroll-mt-24'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                <div>
                    <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                        <span className='text-teal-600'>About</span>Me
                    </h2>
                    <p className='text-lg text-zinc-700 mb-6'>
                        I'm a backend-focused MERN Stack Developer passionate about building secure, scalable APIs and AI-powered applications. As a recent BSc in Information Technology graduate, I've spent my final year and beyond architecting production-grade systems — from REST APIs to full authentication flows.
                    </p>
                    <p className='text-lg text-zinc-700 mb-10'>
                        My approach combines strong backend fundamentals (Node.js, Express, MongoDB) with an eye for clean system design — building applications that are secure, well-structured, and genuinely production-ready, not just prototypes.
                    </p>
                    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10'>
                        {
                            profileData.map((profile, index)=>(
                                <div key={index} className='p-6 border border-gray-200 rounded-xl'>
                                    <profile.icon className='w-6 h-6 text-zinc-800 mb-4' />
                                    <h3 className='text-lg font-bold text-zinc-800 mb-2'>{profile.title}</h3>
                                    <p className='text-sm text-zinc-500'>{profile.technologies.join(', ')}</p>
                                </div>
                            ))
                        }
                    </div>
                    <a href={assets.resumeCV} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 w-fit px-10 py-4 bg-zinc-800 rounded-full text-slate-200 hover:bg-zinc-900 transition duration-300 cursor-pointer'>
                        <FaDownload />
                        Download Resume
                    </a>
                </div>

                {/* Image Section right side */}
                <div className='flex justify-center'>
                    <div className='w-full max-w-md rounded-2xl overflow-hidden border-4 border-slate-600/30'>
                        <img className='w-full h-full object-cover' src={assets.profileImg} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
