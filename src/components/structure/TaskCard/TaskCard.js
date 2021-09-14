import React from 'react'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
    const task = props.task
    return (
        <Link to={`/view/${task._id}`}>
            <div className="card-container">
                <div className="card-container__box">
                    <ul>
                        <div className="card-container__box__title">
                            <li>{task.titulo}</li>
                        </div>
                        <div className="card-container__box__description">
                            <li>{task.descricao}</li>
                        </div>
                        <div className="card-container__box__content">
                            <div
                                className={`card-container__box__${task.prioridade}`}
                            >
                                <li>
                                    <span>Prioridade: {task.prioridade}</span>
                                </li>
                            </div>
                            <li>Prazo: {task.prazo} Dia(s)</li>
                            <li>Status: {task.status}</li>
                        </div>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default TaskCard
