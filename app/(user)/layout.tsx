import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import Header from '@/components/Header'
import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import { token } from "../../sanity/env"

const inter = Inter({ subsets: ['latin'] })

const PreviewProvider = dynamic(() => import('@/components/PreviewProvider'))

export const metadata: Metadata = {
  title: 'Code Terra Blog',
  description: 'Blog for Tech and Developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </body>
      <body className={inter.className}>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  )
}
