import React from 'react'
import Header from '../header/header';
import SearchPanel from '../search-panel/searchPanel';
import TodoList from '../todo-list/todoList';
import AddTodo from '../add-todo/addTodo';
import { useState, useEffect } from 'react';

import './style.css';

const App = () => {

    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [searchInputText, setSearchInputText] = useState('');

    // const saveItems = () => {
    //     localStorage.setItem('todo', JSON.stringify(todos));
    //     localStorage.setItem('btnStatus', status);
    // };

    // const getItems = () => {
    //     setTodos(JSON.parse(localStorage.getItem('todo')));
    //     setStatus(localStorage.getItem('btnStatus'));
    // };

    useEffect(() => {
        getItems();
        setStatus('all');
    }, []);



    useEffect(() => {
        saveItems();
        // Array.from(document.getElementsByClassName('statusBtn')).map((btn) => {
        //     if (btn.value === status) {
        //         return btn.classList.add('active');
        //     } else {
        //         return btn.classList.remove('active');
        //     }
        // })
    }, [status, todos, filteredTodos]);

    const saveItems = () => {
        localStorage.setItem('todo', JSON.stringify(todos));
        localStorage.setItem('btnStatus', status);
    };

    const getItems = () => {
        setTodos(JSON.parse(localStorage.getItem('todo')));
        setStatus(localStorage.getItem('btnStatus'));
    };

    const filterHandler = () => {
        if (status === 'active') {
            setFilteredTodos(todos.filter((item) => item.isActive));
        } else if (status === 'done') {
            setFilteredTodos(todos.filter((item) => !item.isActive));
        } else {
            setFilteredTodos(todos);
        }
    }

    useEffect(() => {
        filterHandler()
    }, [status, todos]);


    return (
        <div className="main">
            <div className="todo-container">
                <Header todos={todos} />
                <SearchPanel setStatus={setStatus}
                    setSearchInputText={setSearchInputText}
                />
                {
                    filteredTodos ? filteredTodos.length === 0 ?
                        <div className="">Here should be Todo</div>
                        : <TodoList
                            todos={todos}
                            setTodos={setTodos}
                            filteredTodos={filteredTodos}
                        />
                        : setFilteredTodos([])
                }
                {/* {JSON.stringify(filteredTodos)} */}
                <AddTodo
                    todos={todos}
                    setTodos={setTodos}
                    input={input}
                    setInput={setInput}
                />
            </div>
        </div>
    );
};

export default App;
