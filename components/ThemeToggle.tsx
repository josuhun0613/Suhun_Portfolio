"use client"
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    const ls = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = ls ? ls === 'dark' : prefersDark
    root.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    const root = document.documentElement
    root.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={dark}
      aria-label={dark ? '라이트 모드로 전환' : '다크 모드로 전환'}
      className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm border border-gray-200 bg-white hover:bg-gray-50 dark:bg-[#0f1830] dark:border-white/10 dark:hover:bg-[#121d3a]"
    >
      <span className="h-4 w-4">
        {dark ? '🌙' : '☀️'}
      </span>
      <span className="hidden sm:inline">{dark ? 'Dark' : 'Light'}</span>
    </button>
  )
}


