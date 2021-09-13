import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import Task from './pages/Tarefas'
import View from './pages/TaskView'
import Usuarios from './pages/Usuarios'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/tarefas" component={Task} />
                <Route path="/view/:id" component= {View} />
                <Route path="/usuarios" component={Usuarios} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
