import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoItem from './components/ToDoItem/ToDoItem';


function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>В списке {todos.length}</h1>
      </header>
      <ToDoForm />
      {
        todos.map((item) => {
          return (
            <ToDoItem
              key = {item.id}
              />
          )
        })
      }
    </div>
  );
}

export default App;
