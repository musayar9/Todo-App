import {useState} from 'react'
import {useDispatchTodos} from './TodoProvider'

import React from 'react'

function AddTodo() {
    const [text, setText]= useState("")
    const dispatch = useDispatchTodos()
    return (
    <>
      <input placholder= "Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>

      <button onClick={()=>{
        setText("");
        dispatch({
            type:"TODO_ADD",
            id:nextId++,
            text:text
        })
      }}>Add Todo</button>
    </>
  )
}

export default AddTodo
let nextId=4