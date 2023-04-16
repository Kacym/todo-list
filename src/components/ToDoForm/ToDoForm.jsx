import React, { useState } from 'react'
import Input from '../tools/input/Input';
import Button from '../tools/button/Button';

const ToDoForm = ( {addTask} ) => {

    const [userInput, setUserInput] = useState("");

    function handleChange (e) {
        setUserInput(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        addTask(userInput);
        setUserInput("")
    }

  return (
    <form onSubmit={handleSubmit}>
        <Input value={userInput} change={handleChange}/>
        <Button title="save"/>
    </form>
  )
}

export default ToDoForm