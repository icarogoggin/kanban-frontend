import React, { useState, useEffect } from 'react'
import TaskCard from '../TaskCard/TaskCard'
import { Api } from '../../../api/api'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const getList = async () => {
        const response = await Api.fetchGet()
        const data = await response.json()
        setTasks(data)
    }

    return (
        <div>
            {tasks.map((task, index) => (
                <TaskCard task={task} key={task._id} />
            ))}
        </div>
    )
}

export default TaskList
