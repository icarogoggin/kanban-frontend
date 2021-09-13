import React from 'react'

const TaskCard = (props) => {
    const task = props.task
    return (
        <a href={`/view/${task._id}`}>
            <div className="">
                <div className="">
                    <p>Titulo: {task.titulo} Descrição: {task.descricao} Prioridade: {task.prioridade} Status: {task.status} Prazo: {task.prazo}</p>
                    <p>=============================================fim=============================================</p>
                </div>
            </div>
        </a>
    )
}

export default TaskCard
