import './globals.css'
import { Inter, Raleway } from 'next/font/google'
import PageButton from 'components/PageButton'
import Avatar from 'components/Avatar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task Master',
  description: 'Organize your tasks',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>
        <div className="flex">
          <div className="flex flex-col">
            <Avatar/>
            <div className="flex flex-col">
              <PageButton text='Tasks'/>
              <PageButton text='Groups'/>
              <PageButton text='Calendar'/>
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
