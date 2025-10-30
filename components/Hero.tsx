"use client"
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    title: 'Student-led Interaction : Redefining the Future of Education',
    subtitle: '비즈니스 임팩트를 설계하는 컨설턴트/개발자',
    image: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: '지적이고 창의적인 문제 해결',
    subtitle: '비즈니스 임팩트를 설계하는 컨설턴트/개발자',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop',
  },
  {
    title: 'From Strategy to Shipping',
    subtitle: '비즈니스 임팩트를 설계하는 컨설턴트/개발자',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1920&auto=format&fit=crop',
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0) // image slide index
  const [captionIndex, setCaptionIndex] = useState(0) // caption text index
  const [showCaption, setShowCaption] = useState(true)
  const currentIndexRef = useRef(0)
  useEffect(() => {
    const displayMs = 6000 // 총 체류 시간(6초)
    const fadeMs = 300     // 캡션 페이드 시간(더 빠르게)
    const gapMs = 50       // 완전 종료 후 시작 간격

    const tick = () => {
      // 현재 인덱스 기준으로 다음 슬라이드 계산
      const nextIdx = (currentIndexRef.current + 1) % slides.length
      // 1) 캡션 페이드 아웃 시작과 동시에 이미지 크로스페이드 시작(인덱스 변경)
      setShowCaption(false)
      setIndex(nextIdx)
      // 2) 캡션 완전 종료 후 텍스트 인덱스 교체 → 페이드 인 시작
      setTimeout(() => {
        setCaptionIndex(nextIdx)
        setTimeout(() => setShowCaption(true), gapMs)
      }, fadeMs)
    }

    const id = setInterval(tick, displayMs)
    return () => clearInterval(id)
  }, [])

  // 이미지 인덱스 변경을 ref에 동기화하여 다음 tick 계산에 사용
  useEffect(() => {
    currentIndexRef.current = index
  }, [index])

  const current = slides[index]

  return (
    <section aria-label="Hero" className="relative h-[56vh] md:h-[64vh] overflow-hidden">
      {/* Layered slides with crossfade + kenburns */}
      <div className="absolute inset-0">
        {slides.map((s, i) => {
          const isActive = i === index
          return (
            <div
              key={i}
              className={`absolute inset-0 pointer-events-none transition-opacity duration-[1200ms] ease-in-out ${isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <Image src={s.image} alt="hero" fill priority={isActive} className={`object-cover ${isActive ? 'animate-fade-image-1200' : ''}`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
            </div>
          )
        })}
      </div>

      {/* Captions - single block with strict out→in sequence */}
      <div className="relative z-20 h-full container-narrow flex flex-col justify-end pb-16 md:pb-14 text-white">
        <div className={`transition-opacity duration-[300ms] ease-in-out ${showCaption ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-5xl font-extrabold max-w-3xl leading-tight">{slides[captionIndex].title}</h1>
          <p className="mt-3 md:mt-4 text-white/90 max-w-2xl">{slides[captionIndex].subtitle}</p>
        </div>
        <div className="mt-8 md:mt-9 flex gap-3">
          <Link href="/projects" className="px-5 py-2.5 rounded-md bg-brand-500 hover:bg-brand-600 font-semibold">프로젝트 보기</Link>
          <Link href="/contact" className="px-5 py-2.5 rounded-md bg-white/10 hover:bg-white/20 backdrop-blur font-semibold">문의하기</Link>
        </div>
        {/* Dots */}
        <div className="mt-6 flex gap-2">
          {slides.map((_, i) => (
            <span key={i} className={`h-1 w-8 rounded-full ${i === index ? 'bg-white' : 'bg-white/40'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}


