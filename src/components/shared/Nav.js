import React from 'react'
// Quando tentei usar Link do router ele retornou error: invariant failed: you should not use <link> outside a <router> import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav class="admin__nav">
            <ul class="menu">
                <li class="menu__item">
                    <a class="menu__link" href="/tarefas">
                        Lista de Tarefas
                    </a>
                </li>
                <li class="menu__item">
                    <a class="menu__link" href="/usuarios">
                        Usuarios
                    </a>
                </li>
            </ul>
        </nav>
    )
}
