import React from 'react';

const Todo = ({ task, completed, toggleComplete, deleteTodo }) => {
  return (
    <div className={`todo-task ${completed ? 'completed' : ''}`}>
        <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            <button onClick={() => deleteTodo(task.id)}>Delete</button>
        </div>
    </div>
  );
}

export default Todo;