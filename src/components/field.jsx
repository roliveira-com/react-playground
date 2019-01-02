import React, {Component} from 'react';

class Field extends Component {
    constructor(props){
        super(props);
        this.state = { value: this.props.text };
        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(event){
        this.setState({value : event.target.value})
    }

    render(){
        return (
            <div>
                <h5><input type="text" text="" onChange={this.changeHandler} /> {this.state.value}</h5>
            </div>
        )
    }
}

export default Field;