import React, {Component} from 'react';

export default class MenuItem extends Component {
    render(){
        return (
            <a href="#">{this.props.label}</a>
        )
    }
}