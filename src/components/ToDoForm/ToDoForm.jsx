import React, { useState } from 'react'
import Input from '../tools/input/Input'
import Button from '../tools/button/Button'

const ToDoForm = () => {
    const [userInput, setUserInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setUserInput(e.target.value)
    }
  return (
    <form onSubmit={handleSubmit}>
        <Input change={handleChange} />
        <Button title="Save"/>
    </form>
  )
}

export default ToDoForm