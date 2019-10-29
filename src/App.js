import React, { Component } from 'react';
import './App.css';
import { todos } from './todos.json';
import TodoForm from './components/TodoForm';
import logo from './logo.svg';
import DetailTodo from './components/DetailTodo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {
    const tasks = todos.map((todo, i) => {
      return (
        <div className="col-md-4">
          <DetailTodo todoInput={todo} />
        </div>
      )
    });

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="#" className="text-white">
            Tasks
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="Logo" />
              <TodoForm />
            </div>
            <div className="col-md-9">
              <div class="row">
                {tasks}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
