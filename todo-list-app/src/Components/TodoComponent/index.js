import React,{useState} from 'react';

const Todo = ({ todo ,removeTodo,handleChange}) => {
    console.log(todo)
    return (<div style={{margin:10,padding:10}}>
        <input type="checkbox" 
        style={{margin:"0 10px"}} 
        checked={todo.done}
        onChange={()=>{handleChange(todo.id)}}/>         
        <span style={todo.done?{textDecoration:"line-through"}:null}>{todo.title}</span>
        <span style={{ position: 'fixed', 
        right: 20, padding: "0 10px" ,
        cursor:"pointer",
        fontWeight:600}}
        onClick={()=>{removeTodo(todo.id)}}>
            X</span>
        <hr/>
    </div>)
}
export default Todo