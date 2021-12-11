import React from 'react';

import './style.css';

const AddTodo = ({ setTodos, setInput, todos, input }) => {


    const formHandler = (e) => {
        e.preventDefault();
        setInput('');
        setTodos([...todos, {
            todoName: input,
            isActive: true,
            isImportant: false,
            id: Math.floor(1000 * Math.random())
        }]);
    };

    const inputHandler = (e) => {
        setInput(e.target.value)
    };

    return (
        <form className="add-todo mt-3" onSubmit={formHandler}>
            <input
                type="text"
                placeholder="What needs to be done?"
                className="add-input"
                onChange={inputHandler}
                value={input}
                required
            />
            <button type="submit" className="">Add Todo</button>
        </form>
    );
};

export default AddTodo;
