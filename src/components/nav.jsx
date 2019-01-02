// Declarando um component simples no react
import React from 'react';

// Exportando im unico componente

// export default props => (
//     <nav>
//         <p>{props.brand}</p>
//         <a href="#">Link 1</a> |
//         <a href="#">Link 2</a> |
//         <a href="#">Link 3</a>
//     </nav>
// )

// Exportando mais de un componente no mesmo arquivo

const Nav = props => (
    <nav>
        <p>{props.brand}</p>
        <a href="#">Link 1</a> |
        <a href="#">Link 2</a> |
        <a href="#">Link 3</a>
    </nav>
)

const Title = props => (
    <h1>{props.title}</h1>
)

export {Nav, Title}
