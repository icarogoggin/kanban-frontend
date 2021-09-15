import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main'
import Task from './pages/Tarefas';
import TaskView from './pages/TaskView/TaskView';
import Edit from './pages/TaskEdit/TaskEdit';
import Add from './pages/TaskAdd/TaskAdd';
import Usuarios from './pages/Usuarios';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* <Route path="/" exact component={Task} /> */}
                <Route path="/tarefas" component={Task} />
                <Route path="/add" component={Add} />
                <Route path="/view/:id" component={TaskView} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/usuarios" component={Usuarios} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
