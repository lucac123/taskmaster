'use client'

import AddItem from '/app/components/AddItem'
import ToggleTaskView from '/app/components/ToggleTaskView'
import TaskView from '/app/components/TaskView'

export default function Page() {
    return (
        <div className="w-full">
            <header className="flex justify-end p-10 gap-14">
                <ToggleTaskView />
                <AddItem />
            </header>
            <TaskView />
        </div>)
}