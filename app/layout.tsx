import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PiAuthProvider } from '../context/PiAuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pi Tech Shop - SEASON2077',
  description: 'The futuristic marketplace for Pi Network digital services',
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
