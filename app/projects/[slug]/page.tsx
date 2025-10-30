import { notFound } from 'next/navigation'

const data: Record<string, { title: string; summary: string }> = {
  'project-a': { title: '프로젝트 A', summary: '문제-접근-해결-임팩트 서사 템플릿' },
  'project-b': { title: '프로젝트 B', summary: '문제-접근-해결-임팩트 서사 템플릿' },
  'project-c': { title: '프로젝트 C', summary: '문제-접근-해결-임팩트 서사 템플릿' },
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = data[params.slug]
  if (!project) return notFound()

  return (
    <article className="container-narrow py-12">
      <h1 className="section-title">{project.title}</h1>
      <p className="mt-4 muted">{project.summary}</p>

      <section className="mt-10 grid gap-8">
        <div>
          <h2 className="font-extrabold text-xl">문제</h2>
          <p className="mt-2 text-ink-700">문제 배경과 맥락을 기술합니다.</p>
        </div>
        <div>
          <h2 className="font-extrabold text-xl">접근</h2>
          <p className="mt-2 text-ink-700">가설, 범위, 실험 설계를 설명합니다.</p>
        </div>
        <div>
          <h2 className="font-extrabold text-xl">해결</h2>
          <p className="mt-2 text-ink-700">구현 및 의사결정, 트레이드오프를 적습니다.</p>
        </div>
        <div>
          <h2 className="font-extrabold text-xl">임팩트</h2>
          <p className="mt-2 text-ink-700">정량/정성 결과와 학습을 정리합니다.</p>
        </div>
      </section>
    </article>
  )
}


