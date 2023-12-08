import { Gabarito } from 'next/font/google'
import './globals.css'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'for Rae',
  description: 'from Cae',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  )
}