import Image from 'next/image'
import Link from 'next/link'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CardGrid from '../components/CardGrid'
import Timeline from '../components/Timeline'
import Metrics from '../components/Metrics'
import Principles from '../components/Principles'
import Playbooks from '../components/Playbooks'
import Endorsements from '../components/Endorsements'
import Logos from '../components/Logos'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section className="py-16">
          <div className="container-narrow">
            <h2 className="section-title">About</h2>
            <p className="mt-4 muted">비즈니스 임팩트를 설계하는 컨설턴트/개발자</p>
            <CardGrid
              items={[
                { title: '컨설팅 역량', desc: '문제정의, 가설수립, 데이터 기반 의사결정', href: '#', icon: 'strategy' },
                { title: '개발 역량', desc: '제품화 중심의 프론트엔드/풀스택', href: '#', icon: 'dev' },
                { title: '임팩트', desc: '지표로 말하는 일; 전환/리텐션/생산성', href: '#', icon: 'impact' },
              ]}
            />
          </div>
        </section>

        <section className="py-8 bg-gray-50">
          <div className="container-narrow">
            <Reveal><Metrics /></Reveal>
          </div>
        </section>

        <section className="py-16">
          <div className="container-narrow">
            <h2 className="section-title">Principles</h2>
            <p className="mt-4 muted">의사결정 휴리스틱과 일하는 방식</p>
            <div className="mt-8"><Reveal><Principles /></Reveal></div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <h2 className="section-title">Playbooks</h2>
            <p className="mt-4 muted">우선순위·거버넌스·지표로 리스크를 관리합니다</p>
            <div className="mt-8"><Reveal><Playbooks /></Reveal></div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <h2 className="section-title">Career Timeline</h2>
            <p className="mt-4 muted">핵심 하이라이트 위주로 담았습니다.</p>
            <div className="mt-8">
              <Timeline />
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-narrow">
            <h2 className="section-title">Projects</h2>
            <p className="mt-4 muted">차차 업데이트됩니다. 카드 클릭 시 케이스 스터디로 이동합니다.</p>
            <CardGrid
              items={[
                { title: '프로젝트 A', desc: '문제-접근-해결-임팩트', href: '/projects/project-a' },
                { title: '프로젝트 B', desc: '문제-접근-해결-임팩트', href: '/projects/project-b' },
                { title: '프로젝트 C', desc: '문제-접근-해결-임팩트', href: '/projects/project-c' },
              ]}
            />
            <div className="mt-6">
              <Link className="text-brand-700 font-semibold" href="/projects">프로젝트 모두 보기 →</Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <h2 className="section-title">Notes</h2>
            <p className="mt-4 muted">짧은 인사이트/서사 중심의 글을 담습니다. (옵션)</p>
            <CardGrid
              items={[
                { title: '전략과 코드 사이', desc: '의사결정 속도와 완성도의 균형' },
                { title: '디자인 시스템', desc: '확장성과 일관성' },
                { title: '데이터로 말하기', desc: '지표는 이야기의 증거' },
              ]}
            />
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container-narrow">
            <h2 className="section-title">Endorsements</h2>
            <p className="mt-4 muted">함께 일한 분들의 한 줄 추천사</p>
            <div className="mt-8"><Reveal><Endorsements /></Reveal></div>
            <div className="mt-10"><Logos /></div>
          </div>
        </section>

        <section className="py-16">
          <div className="container-narrow">
            <div className="flex items-center justify-between">
              <h2 className="section-title">Contact</h2>
              <Link href="/contact" className="text-brand-700 font-semibold">문의하기 →</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}


