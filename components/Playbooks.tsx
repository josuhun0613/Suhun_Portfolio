const steps = [
  { k: 'Diagnosis', t: '진단', d: '문제 구조화 · 원인/기회 도출' },
  { k: 'Strategy', t: '전략 수립', d: '목표/제약/우선순위 · 로드맵' },
  { k: 'Execution', t: '실행 설계', d: '이니셔티브 설계 · 거버넌스/역할' },
  { k: 'Productize', t: '제품화·스케일', d: '릴리즈 · 운영 · 지표 관리' },
]

export default function Playbooks() {
  return (
    <ol className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {steps.map((s, i) => (
        <li key={i} className="rounded-xl border border-gray-200 p-5 bg-white group transition-transform hover:-translate-y-0.5">
          <div className="text-xs font-semibold text-brand-700">{s.k}</div>
          <h3 className="mt-2 text-lg font-bold text-ink-800">{s.t}</h3>
          <p className="mt-1 text-sm text-ink-600">{s.d}</p>
          <div className="mt-3 h-1 w-12 bg-brand-200 group-hover:bg-brand-500 transition-colors" />
        </li>
      ))}
    </ol>
  )
}


