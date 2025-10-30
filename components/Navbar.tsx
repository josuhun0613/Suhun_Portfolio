import Link from 'next/link'
import Image from 'next/image'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 dark:border-white/10">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <span className="font-extrabold tracking-tight text-ink-800 dark:text-white">Portfolio</span>
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <nav className="flex gap-6">
            <Link className="hover:text-brand-700" href="#about">About</Link>
            <Link className="hover:text-brand-700" href="/projects">Projects</Link>
            <Link className="hover:text-brand-700" href="#timeline">Timeline</Link>
            <Link className="hover:text-brand-700" href="/contact">Contact</Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}


