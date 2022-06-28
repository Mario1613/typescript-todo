import {useState} from 'react';
import { TodoForm } from './components/TodoForm';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([])
  const addTodo: AddTodo = newTodo =>{
    if(newTodo !== ""){
      setTodos([...todos, {text:newTodo, complete: false}])
    }
  }
  const toggleComplete: ToggleComplete = selectedTodo =>{
    const updateTodos = todos.map(todo=>{
          if(todo === selectedTodo){
            return{
              ...todo, complete: !todo.complete
            }
          }
          return todo;
    })
    setTodos(updateTodos);
  }


  return (
    <div className="todo-app">
      <h1>hello world</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete}/>
    </div>
  );
}

export default App;
