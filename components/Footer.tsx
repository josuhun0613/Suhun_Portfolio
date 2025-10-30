export default function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/10 py-10 mt-10">
      <div className="container-narrow text-sm text-ink-600 dark:text-white/70 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <p className="opacity-80">Inspired by KAIST CELT design cues.</p>
      </div>
    </footer>
  )
}


