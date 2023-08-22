'use client'

import PageButton from './PageButton'
import Avatar from './Avatar'

export default function NavPanel({ action }) {
  return (
      <div className="flex">
        <div className="flex flex-col">
          <div className="w-32 h-32 flex items-center justify-center">
            <Avatar action={action}/>
          </div>
          <div className="flex flex-col">
            <PageButton text='Tasks'/>
            <PageButton text='Groups'/>
            <PageButton text='Calendar'/>
          </div>
        </div>
      </div>
  )
}