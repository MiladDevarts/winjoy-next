import Header from '@/components/Layout/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Vazirmatn, Rubik } from 'next/font/google'
import MenuProvider from '@/context/MenuProvider'

const vazirmatn = Vazirmatn({
  subsets: ['latin'],
  variable: '--font-vazirmatn',
})

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',

})

export const metadata: Metadata = {
  title: 'Winjoy',
  description: 'Project description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <MenuProvider>

        <body className={`${rubik.variable} ${vazirmatn.variable}`}>
          <Header />
          {children}
        </body>
      </MenuProvider>

    </html>
  )
}
