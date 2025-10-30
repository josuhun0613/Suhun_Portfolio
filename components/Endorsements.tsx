type Endorsement = { quote: string; name: string; title: string }

const endorsements: Endorsement[] = [
  { quote: '문제를 정확히 정의하고 실행으로 연결합니다.', name: '김OO', title: 'Head of Product' },
  { quote: '데이터와 스토리 사이의 균형 감각이 뛰어납니다.', name: '이OO', title: 'Consulting Partner' },
]

export default function Endorsements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {endorsements.map((e, i) => (
        <figure key={i} className="rounded-xl border border-gray-200 p-6 bg-white">
          <blockquote className="text-ink-800 font-semibold">“{e.quote}”</blockquote>
          <figcaption className="mt-3 text-sm muted">{e.name} · {e.title}</figcaption>
        </figure>
      ))}
    </div>
  )
}


