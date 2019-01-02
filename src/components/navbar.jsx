import React from 'react';
import { childrenProps } from '../utils'

export default props => (
    <nav>
        {/* Habilitando componente para receber outros componentes filho */}
        {/* {props.children} */}

        {/* Habilitando herança de propriedades de componentes pai para filhos */}
        {/* O método abaixo apenas é recomendado quando se trabalha com apenas um componente filho */}
        {/* {React.cloneElement(props.children, {...props})} */}

        {/* Aqui há o método que habilira a herança de propriedades de pai para filho em mais de um componente */}
        {childrenProps(props.children, props)}
    </nav>
)