import React from 'react';
import ReactDOM from 'react-dom';

// Importando um unico componente
// import Nav from './components/nav';
import Menu from './components/menu';

import Navbar from './components/navbar';
import NavItem from './components/nav-item';

// Importando os dois componentes do mesmo arquivo
import {Nav, Title} from './components/nav';

import Counter from './components/counter'
import Field from './components/field'

ReactDOM.render(
    // Usando um unico componente
    // <Nav brand="Reactapp"/>

    // Usando os dois componentes importados do mesmo arquivo
    <div>
        <Title title="Hello!"/>
        <Nav brand="Reactapp"/>
        <hr/>
        <Navbar prefix="+" separator="|">
            <NavItem label="Reports"/>
            <NavItem label="Users"/>
            <NavItem label="Email"/>
        </Navbar>
        <hr/>
        <Menu />
        <hr/>
        <Counter label="Counter" initialValue={10} />
        <hr/>
        <Field text="type something on the field"/>
    </div>
    
    ,document.getElementById('app')
);