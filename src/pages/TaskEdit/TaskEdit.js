import React, { useEffect, useState } from 'react'
import { Api } from '../../api/api'

const TaskEdit = (props) => {
    const id = props.match.params.id
    const [fields, setFields] = useState({})

    useEffect(() => {
        getTaskById()
    }, [])

    const getTaskById = async () => {
        const response = await Api.fetchGetById(id)
        const data = await response.json()
        setFields(data)
    }

    const handleFieldsChange = (evento) => {
        const auxFields = { ...fields }
        auxFields[evento.target.name] = evento.target.value
        setFields(auxFields)
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault()
        const dados = { ...fields }
        dados.prazo = parseInt(dados.prazo)

        try {
            const response = await Api.fetchPut(dados, id)
            const data = await response
            alert('Editado com sucesso!')
            props.history.push('/')
        } catch (error) {
            console.log('erro', error)
        }
    }

    return (
        <section>
            <form className="form-edittask" onSubmit={handleSubmit}>
                <div className="form-input-edit">
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        type="text"
                        required
                        id="titulo"
                        className=""
                        placeholder="Digite o titulo da tarefa"
                        name="titulo"
                        value={fields.titulo}
                        onChange={handleFieldsChange}
                    />
                </div>
                <div className="form-input-edit">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        required
                        id="descricao"
                        className=""
                        placeholder="Digite a descrição da Tarefa"
                        name="descricao"
                        value={fields.descricao}
                        onChange={handleFieldsChange}
                    />
                </div>
                <div className="form-input-edit">
                    <label htmlFor="prioridade">Prioridade</label>
                    <select
                        name="prioridade"
                        required
                        id="prioridade"
                        value={fields.prioridade}
                        onChange={handleFieldsChange}
                    >
                        <option value="Alta">Alta</option>
                        <option value="Media">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
                <div className="form-input-edit">
                    <label htmlFor="status">Status</label>
                    <select
                        name="status"
                        required
                        id="status"
                        value={fields.status}
                        onChange={handleFieldsChange}
                    >
                        <option value="Fazer">Fazer</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Feito">Feito</option>
                    </select>
                </div>
                <div className="form-input-edit">
                    <label htmlFor="prazo">Prazo</label>
                    <input
                        type="number"
                        required
                        id="prazo"
                        className=""
                        name="prazo"
                        value={fields.prazo}
                        onChange={handleFieldsChange}
                    />
                </div>
                <div>
                    <button className="submit-btn">Cancelar</button>
                    <button className="submit-btn" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    )
}

export default TaskEdit
