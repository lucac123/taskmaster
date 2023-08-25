import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Master',
  description: 'Organize your tasks'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background w-screen h-screen ${inter.className}`}>
        {children}
      </body>
    </html>)
}