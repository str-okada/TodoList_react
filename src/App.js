import { useState, useRef } from 'react';
import TodoList from './TodoList';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, name: "Todo1", completed: false },
  ]);

  // console.log(todos)
  // console.log(setTodos)

  // const { v4: uuidv4 } = require('uuid');

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    const name = todoNameRef.current.value;
    if(name==="")return;
    // console.log(todoNameRef.current.value);
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, completed: false }]
    })
    todoNameRef.current.value = null;
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id===id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  }

  const handleDlear = () => {
    const newTodos = todos.filter((todo)=>!todo.completed);
    setTodos(newTodos);
  }


  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef} />
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleDlear} >Done todo</button>
      <div>Remaining tasks : 
        <div> {todos.filter((todo)=>!todo.completed).length}</div>
        </div>
    </>
  );
}

export default App;
