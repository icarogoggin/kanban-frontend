import React from 'react';

export default function Header() {
    return (
        <header className="admin__header">
            <a href="/" className="logo">
                <h1>B.TASK</h1>
            </a>
            <div className="toolbar">
                <a href="/add">
                    <button className="btn btn--primary">
                        Adicionar tarefa
                    </button>
                </a>
                <a href="/" className="logout">
                    Log Out
                </a>
            </div>
        </header>
    );
}
