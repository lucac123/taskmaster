'use client'

import { useState, useEffect } from 'react'
import { auth } from '/app/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import signIn from '/app/firebase/auth/signin'
import logOut from 'app/firebase/auth/logout.js'
import { PageContext, UserContext } from '/app/context'
import NavPanel from '/app/components/NavPanel'
import SignIn from '/app/components/SignIn'
import AddItem from '/app/components/AddItem'
import ToggleTaskView from '/app/components/ToggleTaskView'
import TaskView from '/app/components/TaskView'

const handleSignIn = () => {
    const { result, error } = signIn()
    if (error)
        console.log('Error:', error)
}
const handleLogOut = () => {
    const { result, error } = logOut()
    if (error)
        console.log('Error:', error)
}

export default function Page() {
    const [page, setPage] = useState('Tasks')
    const [user, setUser] = useState(auth.currentUser)

    useEffect(() => {
        // run on load or if firebase auth variable changes
        onAuthStateChanged(auth, setUser)
    }, [auth])

    return (
        <UserContext.Provider value={[user, setUser]}>
            <PageContext.Provider value={[page, setPage]}>
                {user ?
                    <div className="flex">
                        <NavPanel action={handleLogOut} />
                        <div className="w-full">
                            <header className="flex justify-end p-10 gap-14">
                                <ToggleTaskView />
                                <AddItem />
                            </header>
                            <TaskView />
                        </div>
                    </div> :
                    <SignIn action={handleSignIn} />}
            </PageContext.Provider>
        </UserContext.Provider>
    )
}