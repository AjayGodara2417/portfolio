import { useEffect, useState } from 'react'

export function useThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      root.classList.add('dark')
      setIsDark(true)
    } else {
      root.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggleTheme = () => {
    const root = window.document.documentElement
    const isCurrentlyDark = root.classList.contains('dark')

    if (isCurrentlyDark) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return { isDark, toggleTheme }
}
