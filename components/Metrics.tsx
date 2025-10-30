type Metric = { label: string; value: string; note?: string }

const metrics: Metric[] = [
  { label: '전환율', value: '+18%', note: 'A/B 실험 4주' },
  { label: '리텐션', value: '+12pt', note: '온보딩 개선' },
  { label: '생산성', value: '+25%', note: '빌드/릴리즈 최적화' },
]

export default function Metrics() {
  return (
    <section aria-label="핵심 지표" className="bg-white">
      <div className="container-narrow grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-xl border border-gray-200 p-6 text-center hover:shadow-sm transition-shadow">
            <div className="text-3xl md:text-4xl font-extrabold text-brand-700">{m.value}</div>
            <div className="mt-2 font-semibold text-ink-800">{m.label}</div>
            {m.note && <div className="mt-1 text-xs muted">{m.note}</div>}
          </div>
        ))}
      </div>
    </section>
  )
}


