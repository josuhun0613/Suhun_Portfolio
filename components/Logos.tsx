export default function Logos() {
  const items = ['KAIST', 'CLIENT A', 'CLIENT B', 'CLIENT C']
  return (
    <div className="flex flex-wrap items-center justify-center gap-8 opacity-80">
      {items.map((t, i) => (
        <span key={i} className="text-ink-600 text-sm md:text-base tracking-wider uppercase">{t}</span>
      ))}
    </div>
  )
}


