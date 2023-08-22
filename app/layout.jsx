'use client'

import './globals.css'
import { Inter, Raleway } from 'next/font/google'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import { auth } from '/app/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import signIn from '/app/firebase/auth/signin'
import logOut from 'app/firebase/auth/logout.js'
import { PageContext, UserContext } from '/app/context'
import NavPanel from '/app/components/NavPanel'
import SignIn from '/app/components/SignIn'

const inter = Inter({ subsets: ['latin'] })

const handleSignIn = () => {
  const {result, error} = signIn()
}
const handleLogOut = () => {
  const {result, error} = logOut()
}



export default function RootLayout({ children }) {
  const [page, setPage] = useState('Tasks')
  const [user, setUser] = useState()
  useEffect(() => {
    onAuthStateChanged(auth, setUser)
  }, [auth])
  
  return (
    <UserContext.Provider value={[user, setUser]}>
      <PageContext.Provider value={[page, setPage]}>
        <html lang="en">
          <Head><title>Task Master</title></Head>
          <body className={`bg-background w-screen h-screen ${inter.className}`}>
            {user? <><NavPanel action={handleLogOut}/>{children}</> : <SignIn action={handleSignIn}/>}
          </body>
        </html>
      </PageContext.Provider>
    </UserContext.Provider>
  )
}