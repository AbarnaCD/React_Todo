import { queryAllByAttribute } from "@testing-library/react"
import React,{useState} from "react"

const AddTodo=({addTodo})=>{
const addstyle={
    position:"fixed",
    top:50,
    width:"90%",
    display:"block"
}
const [title,setTitle]=useState()
const handleSubmit=(e)=>{
    e.preventDefault()
    const newTodo={ id:Math.random(), title: title, done: false }
    console.log(newTodo)   
    addTodo(newTodo)
    setTitle("")
}
    
    return (<div style={addstyle}>
        <form onSubmit={handleSubmit}>
            <input type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Enter the todo list" 
            style={{width:"30%", 
            padding:10}}/>
            <input type="submit"/>
        </form>
    </div>)
}
export default AddTodo;