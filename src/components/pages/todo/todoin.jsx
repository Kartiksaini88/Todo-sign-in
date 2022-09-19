import { useState } from "react"
import './todo.css'



export const TodoInput = ({isedit,todo, setTodo ,getTodo})=>{
    
    return(
        <div className="input-div">
            <input placeholder="Add Todo" className="todo-input" value={todo} type="text" onChange={(e)=>{
                setTodo(e.target.value) 
            }}/>
            <button className="todo-input-btn" onClick={()=>{
                getTodo(todo)
            }}>{isedit?"Edit":"ADD"}</button>
        </div>
    )
}