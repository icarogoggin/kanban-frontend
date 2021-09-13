import React, { useEffect, useState } from 'react'
import { Api } from '../../api/api'
const TaskView = (props) => {
    const [task, setTasks] = useState({});

    useEffect(() => {
        getTaskById()
    })

    console.log(props.match.params.id)
    const id = props.match.params.id
    const getTaskById = async () => {
        const response = await fetch(Api.url + '/findById/' + id)
        const data = await response.json()

        setTasks(data)
    }

    return (
        <div>
            <p>
                Titulo: {task.titulo} Descrição: {task.descricao} Prioridade:{' '}
                {task.prioridade} Status: {task.status} Prazo: {task.prazo}
            </p>
        </div>
    )
}
export default TaskView
