import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
    const [userInput, setUserInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(userInput);
        setUserInput(""); // Clear the input field after submission
    }

    return (
        <form className='Todoform' onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Insert task" 
                className="todo-input" 
                onChange={(e) => setUserInput(e.target.value)}
                value={userInput}
            />
            <button type="submit">Add Task</button>
        </form>
    )
}
