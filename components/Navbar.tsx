import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <span className="font-extrabold tracking-tight text-ink-800">Portfolio</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link className="hover:text-brand-700" href="#about">About</Link>
          <Link className="hover:text-brand-700" href="/projects">Projects</Link>
          <Link className="hover:text-brand-700" href="#timeline">Timeline</Link>
          <Link className="hover:text-brand-700" href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}


