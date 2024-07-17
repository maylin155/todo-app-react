import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        setTodos((prevTodos) => [
            ...prevTodos,
            { id: uuidv4(), task: todo, completed: false, editing: false }
        ]);
    };
    
    const toggleComplete = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };
    
    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h1>Task List</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                <Todo
                    key={todo.id}
                    task={todo}
                    toggleComplete={toggleComplete}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};
