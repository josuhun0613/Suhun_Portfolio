const principles = [
  { title: '문제 먼저', desc: '솔루션이 아니라 문제정의에서 출발합니다.' },
  { title: '가설·실험', desc: '작게 가설을 세우고 빠르게 검증합니다.' },
  { title: '지표로 말하기', desc: '임팩트는 전환·리텐션·생산성으로 측정합니다.' },
  { title: '서사', desc: '결정에는 맥락과 서사가 따라야 합니다.' },
]

export default function Principles() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {principles.map((p, i) => (
        <div key={i} className="rounded-xl border border-gray-200 p-5 bg-white hover:shadow-sm transition-shadow">
          <div className="text-sm font-semibold text-brand-700">PRINCIPLE {i + 1}</div>
          <h3 className="mt-2 text-lg font-bold text-ink-800">{p.title}</h3>
          <p className="mt-2 text-sm text-ink-600">{p.desc}</p>
        </div>
      ))}
    </div>
  )
}


