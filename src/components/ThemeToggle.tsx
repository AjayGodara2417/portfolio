'use client'

import { useThemeToggle } from '@/lib/use-theme'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/Button'

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeToggle()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="rounded-full"
    >
      {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </Button>
  )
}
