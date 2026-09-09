import React from 'react'
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { projectData } from '../assets/asstes';

const Work = () => {
  return (
    <div id='work' className='py-20 scroll-mt-24'>
        <div className='max-w-7xl mx-auto px-6 py-6'>
            <div className='mb-16 text-center'>
                <h2 className='text-4xl sm:text-5xl font-bold text-slate-700 dark:text-slate-200 mb-6'>
                    Featured
                    <span className='text-teal-600 dark:text-teal-400'>Project</span>
                </h2>
                <p className="text-xl max-w-3xl mx-auto">
                    Cutting-edge web applications build with modern technologies.
                </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12'>
                {
                    projectData.map((project, index)=>(
                       <div key={index} className='group flex flex-col rounded-xl overflow-hidden hover:shadow-lg dark:hover:shadow-black/40 transition cursor-pointer border border-gray-200 dark:border-zinc-700 hover:-translate-y-1 duration-300'>
                        <div className='relative aspect-video overflow-hidden bg-slate-100 dark:bg-zinc-800'>
                            <img className='w-full h-full object-cover object-top group-hover:opacity-100' src={project.image} alt={project.title} />
                        </div>
                        <div className='p-6 flex flex-col flex-1'>
                            <h3 className='text-xl font-bold mb-2 text-zinc-900 dark:text-zinc-100'>{project.title}</h3>
                            <p className='text-slate-900 dark:text-slate-300 text-sm'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mt-6'>
                                {project.tech.map((language, index)=>(
                                    <span key={index} className='px-4 py-1 text-xs font-semibold rounded-full text-zinc-700 dark:text-zinc-300'>
                                        {language}
                                    </span>
                                ))}
                            </div>
                            {(project.live || project.github) && (
                                <div className='flex items-center gap-4 mt-auto pt-4'>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            onClick={(e) => e.stopPropagation()}
                                            className='flex items-center gap-2 text-sm font-semibold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300'
                                        >
                                            <FaArrowUpRightFromSquare /> Live Demo
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            onClick={(e) => e.stopPropagation()}
                                            className='flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100'
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                       </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Work
