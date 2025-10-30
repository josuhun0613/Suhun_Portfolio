import CardGrid from '../../components/CardGrid'

export default function ProjectsPage() {
  return (
    <div className="container-narrow py-12">
      <h1 className="section-title">Projects</h1>
      <p className="mt-4 muted">각 프로젝트는 케이스 스터디 구조(문제-접근-해결-임팩트)로 정리됩니다.</p>
      <CardGrid
        items={[
          { title: '프로젝트 A', desc: 'B2B 대시보드 전환율 +18%', href: '/projects/project-a' },
          { title: '프로젝트 B', desc: '온보딩 리텐션 +12pt', href: '/projects/project-b' },
          { title: '프로젝트 C', desc: '개발 생산성 +25%', href: '/projects/project-c' },
        ]}
      />
    </div>
  )
}


