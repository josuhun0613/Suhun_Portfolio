import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '포트폴리오',
  description: '지적이고 창의적인 컨설턴트/개발자의 포트폴리오',
  metadataBase: new URL('https://example.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}


