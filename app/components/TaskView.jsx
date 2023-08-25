'use client'
import { doc, getDoc, getDocs, collection } from 'firebase/firestore'
import { UserContext } from '/app/context'
import { useContext, useEffect, useState } from 'react'
import { firebase_db } from '/app/firebase/config'


export default function TaskView() {
    const [user, setUser] = useContext(UserContext)
    const [groupData, setGroupData] = useState()
    const [tasks, setTasks] = useState()
    useEffect(() => {
        async function fetchData() {
            setGroupData((await getDoc(doc(firebase_db, 'userdata', user.uid))).data())

            let tempTasks = new Object()
            const querySnap = await getDocs(collection(firebase_db, 'userdata', user.uid, 'tasks'))
            querySnap.docs.forEach((docRef) => {
                tempTasks[`${docRef.id}`] = docRef.data()
            })
            setTasks(tempTasks)
        }
        fetchData()
    }, [user])
    if (groupData) console.log(groupData)
    if (tasks) console.log(tasks)
    return (
        <div>{groupData && JSON.stringify(groupData)}
        </div>
    )
}