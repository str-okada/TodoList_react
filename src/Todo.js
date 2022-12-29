import React from 'react'

const Todo = ({ todo , toggleTodo }) => {
    const habdleTodoClick = () =>{
        toggleTodo(todo.id);
    }
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} readOnly onChange={habdleTodoClick}/>
            </label>
            {todo.name}
        </div>
    )
}

export default Todo