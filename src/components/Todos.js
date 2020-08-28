import React from 'react';

const Todos = ({todos, deleteTodo, completeTodo, updateTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <p>
                        <input style={{ textDecoration: todo.status ? "line-through" : ""}} type="text"
                            id={todo.id} value={todo.content} onChange={(e)=>{
                            updateTodo(todo.id, e.target.value)}}/>
                        <span>
                            <i style={{cursor: 'pointer'}} className="material-icons left" onClick={() => {completeTodo(todo.id)}}>check_box</i>
                            <i style={{cursor: 'pointer'}} className="material-icons left" onClick={() => {deleteTodo(todo.id)}}>delete</i>
                        </span>
                    </p>
                    <br />
                </div>
            )
        })
     ) : (
        <p className="center">No Todos for today</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos