import React from 'react'
import { skillsData } from '../assets/asstes';

const Skill = () => {
  return (
    <div id='skills' className='py-20 scroll-mt-24'>
        <div className='max-w-7xl mx-auto px-6'>
            <div className='text-center mb-16'>
                <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                    <span className='text-teal-600 dark:text-teal-400'>Technical</span>
                    Skills
                </h2>
                <p className='text-xl mb-6 max-w-3xl mx-auto'>Mastering the tools power modern web experiences</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
                {
                    skillsData.map((skill, index)=>(
                        <div key={index} className='p-6 border bg-teal-50/10 dark:bg-teal-900/10 border-teal-700 dark:border-teal-600 rounded-xl text-center cursor-pointer hover:border-b-4 hover:border-b-teal-800 dark:hover:border-b-teal-500 hover:border-r-4 hover:border-r-teal-800 dark:hover:border-r-teal-500 hover:translate-y-1 transition-all duration-300'>
                            <div className='w-16 h-16 mx-auto rounded-full flex items-center justify-center border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 mb-4'>
                                <skill.icon className='w-8 h-8 text-teal-800 dark:text-teal-400' />
                            </div>
                            <h3 className='text-xl mb-2 font-bold text-zinc-600 dark:text-zinc-300'>{skill.title}</h3>
                            <p className='text-sm text-zinc-500 dark:text-zinc-400'>
                                {skill.technologies.join(', ')}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skill
