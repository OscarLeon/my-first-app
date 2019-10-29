import React, { Component } from 'react';

class DetailTodo extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="card mt-4">
                <div className="card-header">
                    <h3>{this.props.todoInput.title}</h3>
                    <span className="badge badge-pill badge-danger">
                        {this.props.todoInput.priority}
                    </span>
                </div>
                <div className="card-body">
                    <p>{this.props.todoInput.description}</p>
                    <p><mark>{this.props.todoInput.responsible}</mark></p>
                </div>
            </div>
        )
    }
}

export default DetailTodo;