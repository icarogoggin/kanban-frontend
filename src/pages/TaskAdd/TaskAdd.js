import React from 'react';
import { Api } from '../../api/api';
import { Link } from 'react-router-dom';

const TaskAdd = (props) => {
    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;
        const prioridade = evento.target.prioridade.value;
        const status = evento.target.status.value;
        const prazo = evento.target.prazo.value;

        const Task = {
            titulo: titulo,
            descricao: descricao,
            prioridade: prioridade,
            status: status,
            prazo: parseInt(prazo),
        };

        try {
            const response = await Api.fetchPost(Task);
            const data = await response;
            alert('Cadastrado com sucesso!');
            props.history.push('/');
        } catch (error) {
            console.log('erro', error);
        }
    };

    return (
        <section>
            <form className="form-addtask" onSubmit={handleSubmit}>
                <div className="form-input-area">
                    <label htmlFor="titulo">Titulo</label>
                    <input
                        type="text"
                        required
                        id="titulo"
                        className=""
                        placeholder="Digite o titulo da tarefa"
                    />
                </div>
                <div className="form-input-area">
                    <label htmlFor="descricao">Descrição</label>
                    <input
                        type="text"
                        required
                        id="descricao"
                        className=""
                        placeholder="Digite a descrição da Tarefa"
                    />
                </div>
                <div className="form-input-area">
                    <label htmlFor="prioridade">Prioridade</label>
                    <select name="Prioridade" required id="prioridade">
                        <option value="Alta">Alta</option>
                        <option value="Media">Média</option>
                        <option value="Baixa">Baixa</option>
                    </select>
                </div>
                <div className="form-input-area">
                    <label htmlFor="status">Status</label>
                    <select name="Status" required id="status">
                        <option value="Fazer">Fazer</option>
                        <option value="Fazendo">Fazendo</option>
                        <option value="Feito">Feito</option>
                    </select>
                </div>
                <div className="form-input-area">
                    <label htmlFor="prazo">Prazo</label>
                    <input type="number" required id="prazo" className="" />
                </div>
                <div>
                    <button className="submit-btn">Cancelar</button>
                    <button className="submit-btn" type="submit">
                        Enviar
                    </button>
                </div>
            </form>
        </section>
    );
};

export default TaskAdd;
