import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div id='contact' className='py-20 scroll-mt-24'>
        <div className='max-w-3xl mx-auto px-6 text-center'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
                Get In <span className='text-teal-600'>Touch</span>
            </h2>
            <p className='text-xl text-zinc-700 mb-12'>
                Have a project in mind or want to discuss potential opportunities?
            </p>
            <form onSubmit={handleSubmit} className='text-left'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        placeholder='Enter Name'
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                    />
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter Email'
                        required
                        className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                    />
                </div>
                <input
                    type='text'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder='Enter Subject'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 focus:outline-none focus:border-teal-600'
                />
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Enter Message here'
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 resize-y focus:outline-none focus:border-teal-600'
                />
                <div className='text-center'>
                    <button type='submit' className='flex items-center gap-2 mx-auto px-10 py-4 bg-zinc-900 rounded-full text-slate-200 hover:bg-black transition duration-300 cursor-pointer'>
                        Send Message
                        <FaArrowRight />
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
