import React from 'react'
import './ToDoItem.css'

const ToDoItem = ( {todo} ) => {
  return (
    <li key={todo.id}>{todo.task}</li>
  )
}

export default ToDoItem