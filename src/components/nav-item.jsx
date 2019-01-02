import React from 'react';

export default props => (
    <span>
        <a href="#">{props.prefix} {props.label}</a>
        <span> {props.separator} </span>
    </span>
)