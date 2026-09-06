import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const CONTACT_EMAIL = 'jonayedalhabibm135@gmail.com'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!EMAIL_REGEX.test(formData.email.trim())) newErrors.email = 'Enter a valid email address'
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== 'sending') setStatus('idle')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validate()
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    setStatus('sending')
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch(() => {
        setStatus('error')
      })
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
            <form onSubmit={handleSubmit} noValidate className='text-left'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6'>
                    <div>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            placeholder='Enter Name'
                            required
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                        />
                        {errors.name && <p className='text-xs text-red-500 mt-1'>{errors.name}</p>}
                    </div>
                    <div>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Email'
                            required
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600'
                        />
                        {errors.email && <p className='text-xs text-red-500 mt-1'>{errors.email}</p>}
                    </div>
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
                {errors.subject && <p className='text-xs text-red-500 -mt-4 mb-6'>{errors.subject}</p>}
                <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Enter Message here'
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg mb-6 resize-y focus:outline-none focus:border-teal-600'
                />
                {errors.message && <p className='text-xs text-red-500 -mt-4 mb-6'>{errors.message}</p>}
                <div className='text-center'>
                    <button
                        type='submit'
                        disabled={status === 'sending'}
                        className='flex items-center gap-2 mx-auto px-10 py-4 bg-zinc-900 rounded-full text-slate-200 hover:bg-black transition duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'
                    >
                        {status === 'sending' ? 'Sending...' : 'Send Message'}
                        <FaArrowRight />
                    </button>
                    {status === 'success' && (
                        <p className='text-sm text-teal-600 mt-4'>Message sent! I'll get back to you soon.</p>
                    )}
                    {status === 'error' && (
                        <p className='text-sm text-red-500 mt-4'>Something went wrong. Please try again or email me directly at {CONTACT_EMAIL}.</p>
                    )}
                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact
