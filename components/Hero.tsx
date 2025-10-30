"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    title: 'Student-led Interaction : Redefining the Future of Education',
    subtitle: '학생 주도의 상호작용과 질문 중심 수업',
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: '지적이고 창의적인 문제 해결',
    subtitle: '컨설팅과 개발의 교차점에서 임팩트를 설계합니다',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'From Strategy to Shipping',
    subtitle: '가설 → 실험 → 제품화로 이어지는 빠른 실행',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  const current = slides[index]

  return (
    <section aria-label="Hero" className="relative h-[56vh] md:h-[64vh] overflow-hidden">
      <Image src={current.image} alt="hero" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/10" />
      <div className="relative z-10 h-full container-narrow flex flex-col justify-end pb-10 text-white">
        <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">{current.title}</h1>
        <p className="mt-3 md:mt-4 text-white/90 max-w-2xl">{current.subtitle}</p>
        <div className="mt-6 flex gap-3">
          <Link href="/projects" className="px-5 py-2.5 rounded-md bg-brand-500 hover:bg-brand-600 font-semibold">프로젝트 보기</Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur font-semibold">문의하기</Link>
        </div>
        <div className="mt-6 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-1 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}


