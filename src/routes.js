import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from './pages/Main'
import SobreNos from './pages/Main'
import Contato from './pages/Contato'
import Campanhas from './pages/Campanhas'
import Dashboard from './pages/Dashboard'
import Tarefas from './pages/Tarefas'
import Despesas from './pages/Despesas'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/SobreNos" component={SobreNos} />
                <Route path="/contato" component={Contato} />
                <Route path="/campanhas" component={Campanhas} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/tarefas" component={Tarefas} />
                <Route path="/despesas" component={Despesas} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
