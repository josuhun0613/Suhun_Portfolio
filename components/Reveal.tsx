"use client"
import { useEffect, useRef, useState } from 'react'

export default function Reveal({ children, y = 16, delay = 0 }: { children: React.ReactNode; y?: number; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setShow(true) })
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-500 will-change-transform ${show ? 'opacity-100 translate-y-0' : `opacity-0 translate-y-[${y}px]`}`}
    >
      {children}
    </div>
  )
}


