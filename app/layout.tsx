import type React from "react"
import "../styles/globals.css"
import "../styles/variables.css"
import { Noto_Sans_JP, Poppins } from 'next/font/google';

const notoSansJP = Noto_Sans_JP({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-noto'
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata = {
  title: "Tomo | DatingProfile",
  description: "Dating profile page for Tomo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${poppins.variable}`}>
      <body className={notoSansJP.className}>{children}</body>
    </html>
  )
}
