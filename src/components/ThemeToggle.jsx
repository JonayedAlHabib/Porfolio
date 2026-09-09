import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa6'

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => document.documentElement.classList.contains('dark'))

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    <button
      type='button'
      onClick={() => setIsDark((prev) => !prev)}
      aria-label='Toggle dark mode'
      className='w-11 h-11 flex items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:border-teal-600 hover:text-teal-600 dark:hover:border-teal-400 dark:hover:text-teal-400 transition duration-300 cursor-pointer'
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
