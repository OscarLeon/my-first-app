import React, { Component } from 'react';
class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleInput(e) {
        const { value, name } = e.target;
        // Aqui es necesario el async await para que el
        // Console.log muestre lo que el usuario esta
        // Tipiando realmente
        await this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        alert('sending');
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="title"
                            className="form-control" placeholder="Title"
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible"
                            className="form-control" placeholder="Responsible"
                            onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <input type="text" name="description"
                            className="form-control" placeholder="Description"
                            onChange={this.handleInput} />
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control"
                            onChange={this.handleInput}>
                            <option>low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default TodoForm; 