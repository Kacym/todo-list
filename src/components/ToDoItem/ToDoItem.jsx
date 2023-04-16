import React from 'react'

const ToDoItem = ( {todo} ) => {
  return (
    <p id={todo.id}>{todo.task}</p>
  )
}

export default ToDoItem