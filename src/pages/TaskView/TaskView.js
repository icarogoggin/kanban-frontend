import React, { useEffect, useState } from 'react'
import { Api } from '../../api/api'
import { Link } from 'react-router-dom'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'

const TaskView = (props) => {
    const [task, setTasks] = useState({})
    const [open, setOpen] = useState(false)

    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    useEffect(() => {
        getTaskById()
    })

    console.log(props.match.params.id)
    const id = props.match.params.id
    const getTaskById = async () => {
        const response = await Api.fetchGetById(id)
        const data = await response.json()

        setTasks(data)
    }

    const handleDelete = async (evento) => {
        evento.preventDefault()
        const resposta = await Api.fetchDelete(id)
        const result = await resposta
        console.log(result)
        props.history.push('/')
    }

    return (
        <section>
            <div className="viewtask">
                <p>{task.titulo}</p>
            </div>
            <div className="viewtask">
                <p>{task.descricao}</p>
            </div>
            <div className="viewtask">
                <p>{task.prioridade}</p>
            </div>
            <div className="viewtask">
                <p>{task.status}</p>
            </div>
            <div className="viewtask">
                <Link to={`/edit/${task._id}`}>
                    <button className="submit-btn">Editar</button>
                </Link>
                <button className="submit-btn" onClick={onOpenModal}>
                    Excluir
                </button>
            </div>
            <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                    overlayAnimationIn: 'customEnterOverlayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
            >
                <h2>Deseja realmente Excluir ?</h2>
                <button onClick={handleDelete} className="buttons">
                    SIM
                </button>
                <button onClick={onCloseModal} className="buttons">
                    NAO
                </button>
            </Modal>
        </section>
    )
}
export default TaskView
