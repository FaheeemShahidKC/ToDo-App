import React, { useState } from 'react';

export const TodoForm = ({ addTodo, todos }) => {
  const [value, setValue] = useState("")
  const [err, setErr] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()

    if (todos.some((item) => item.task === value) || value === '') {
      setErr(true)
      return
    }

    setErr(false)
    addTodo(value)
    setValue('')
  };


  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
      {
        err ? <p className='error'>Todo is empty or already exist!!</p> : ''
      }
    </form>
  );
};