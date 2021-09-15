import React from 'react';

export default function Nav() {
    return (
        <nav className="admin__nav">
            <ul className="menu">
                <li className="menu__item">
                    <a className="menu__link" href="/tarefas">
                        Lista de Tarefas
                    </a>
                </li>
                <li className="menu__item">
                    <a className="menu__link" href="/usuarios">
                        Usuarios
                    </a>
                </li>
            </ul>
        </nav>
    );
}
