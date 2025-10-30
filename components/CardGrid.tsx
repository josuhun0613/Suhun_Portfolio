import Link from 'next/link'

type Item = { title: string; desc: string; href?: string; icon?: 'strategy' | 'dev' | 'impact' }

export default function CardGrid({ items }: { items: Item[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((it, idx) => (
        <Card key={idx} {...it} />
      ))}
    </div>
  )
}

function Card({ title, desc, href, icon }: Item) {
  const Icon = () => (
    <span aria-hidden className="inline-block h-9 w-9 rounded-md bg-brand-50 text-brand-700 grid place-items-center">
      {icon === 'strategy' && 'Σ'}
      {icon === 'dev' && '</>'}
      {icon === 'impact' && '∆'}
      {!icon && '•'}
    </span>
  )
  const content = (
    <div className="rounded-xl border border-gray-200 bg-white p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-center gap-3">
        <Icon />
        <h3 className="text-lg font-bold text-ink-800">{title}</h3>
      </div>
      <p className="mt-2 text-sm text-ink-600">{desc}</p>
      {href && <span className="mt-4 inline-block text-sm font-semibold text-brand-700">자세히 보기 →</span>}
    </div>
  )
  return href ? <Link href={href}>{content}</Link> : content
}


