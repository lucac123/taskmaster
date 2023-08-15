'use client'
import './globals.css'
import { Inter, Raleway } from 'next/font/google'
import PageButton from 'components/PageButton'
import Avatar from 'components/Avatar'
import { LayoutContext } from './LayoutContext'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Master',
  description: 'Organize your tasks',
}

export default function RootLayout({ children }) {
  const [layoutState, setLayoutState] = useState('Tasks')
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>
        <LayoutContext.Provider value={[layoutState, setLayoutState]}>
        <div className="flex">
          <div className="flex flex-col">
            <div className="w-32 h-32 flex items-center justify-center">
              <Avatar/>
            </div>
            <div className="flex flex-col">
              <PageButton text='Tasks'/>
              <PageButton text='Groups'/>
              <PageButton text='Calendar'/>
            </div>
          </div>
          {children}
        </div>
        </LayoutContext.Provider>
      </body>
    </html>
  )
}
