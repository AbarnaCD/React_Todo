import React, { useState } from 'react';
import Todo from '../../Components/TodoComponent';
import AddTodo from '../../Components/TodoComponent/Addtodo';
const todoList = []
const TodoContainer = () => {
    const [todos, setTodos] = useState(todoList)
    const handleAddTodo = (newTodo) => {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
    }
    const handleRemoveTodo = (id) => {
        const newTodoList = todos.filter(todo => todo.id !== id)
        setTodos(newTodoList)
    }
    const handleCheckboxChange = (id) => {
        const newTodoList = todos.map(todo => {
            if (todo.id === id)
                return { ...todo, done: !todo.done }
            return todo;
        })
        setTodos(newTodoList)


    }
    return (<div>
        {todos.length > 0 ? todos.map((todo) => <Todo todo={todo} removeTodo={handleRemoveTodo}
            handleChange={handleCheckboxChange} />)
            : <p align="center">No To-do left</p>}
        <AddTodo addTodo={handleAddTodo} />

    </div>)
}
export default TodoContainer
