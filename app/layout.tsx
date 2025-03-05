import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PiAuthProvider } from '../context/PiAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechHive - AI-Powered Digital Solutions Marketplace',
  description: 'Browse and purchase digital services powered by AI recommendations',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PiAuthProvider>
          {children}
        </PiAuthProvider>
      </body>
    </html>
  )
}
