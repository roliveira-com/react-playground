import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props){
        super(props);
        this.state = { value: props.initialValue }
    }

    sum(increment){
        this.setState({value: this.state.value + increment});
    }

    render(){
        return (
            <div>
                <h2>{this.props.label}</h2>
                <h3><button onClick={() => this.sum(-1)}>-</button> {this.state.value} <button onClick={() => this.sum(1)}>[+]</button></h3>
            </div>
        )
    }
}