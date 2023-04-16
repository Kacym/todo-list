import { useState } from 'react';
import './App.css';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoItem from './components/ToDoItem/ToDoItem';


function App() {

  const addTask =(userInput)=> {
    if(userInput) {
      const newItem = {
        id: Math.floor(Math.random() * 10000),
        task: userInput,
      }
      setTodos([...todos, newItem])
    }
  }
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>На списке {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask}/>
      {
        todos.map((item) => {
          return (
            <ToDoItem
              todo = {item}
              key = {item.id}
              />
          )
        })
      }
    </div>
  );
}

export default App;
