type Item = { year: string; title: string; desc: string }

const items: Item[] = [
  { year: '2025', title: 'Senior Consultant & Developer', desc: '전략 · 제품 · 프론트엔드 이니셔티브 리드' },
  { year: '2023', title: 'Tech Consulting', desc: '데이터 기반 전환/리텐션 프로젝트' },
  { year: '2021', title: 'Product Engineering', desc: '풀스택 웹 제품화 및 사용자 성장' },
]

export default function Timeline() {
  return (
    <ol className="relative border-s-2 border-gray-200">
      {items.map((it, idx) => (
        <li key={idx} className="mb-10 ms-6">
          <span className="absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-brand-100 ring-8 ring-white text-brand-700 text-xs font-bold">
            {it.year.slice(-2)}
          </span>
          <h3 className="font-bold text-ink-800">{it.title}</h3>
          <time className="text-xs muted">{it.year}</time>
          <p className="mt-1 text-sm text-ink-600">{it.desc}</p>
        </li>
      ))}
    </ol>
  )
}


