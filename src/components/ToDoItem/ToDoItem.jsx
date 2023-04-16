import React from 'react'

const ToDoItem = ( {todo} ) => {
  return (
    <p key={todo.id}>{todo.task}</p>
  )
}

export default ToDoItem