import React, { useState, useEffect } from 'react'
import TaskCard from '../TaskCard/TaskCard'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        getList()
    }, [])

    const url = 'https://api-node-icaro.herokuapp.com/tarefas/'

    const getList = async () => {
        const response = await fetch(url)
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
