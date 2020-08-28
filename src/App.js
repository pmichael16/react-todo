import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'wash the dishes', status: false},
            {id: 2, content: 'make bed', status: true},
            {id: 3, content: 'sweep the floor', status: false}
        ]
    }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos: todos
        })
    }
    completeTodo = (id) => {
        const todos = this.state.todos.map(todo=>{
            if(todo.id === id){
                todo.status = !todo.status;
            }
            return todo;
          });
        this.setState({
            todos: todos
        })
    }
    updateTodo = (id, content) => {
        const todos = this.state.todos.map(todo=>{
            if(todo.id === id){
                todo.content = content;
            }
            return todo;
          });
        this.setState({
            todos: todos
        })
    }

    render () {
        return (
            <div className="todo-app container">
                <h1 className="center red-text">To Do's</h1>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} deleteTodo = {this.deleteTodo} completeTodo = {this.completeTodo} updateTodo = {this.updateTodo}/>
            </div>
        )
    }
}

export default App;