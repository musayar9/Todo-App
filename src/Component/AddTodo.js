import {useState} from 'react'
import {useDispatchTodos} from './TodoProvider'

import React from 'react'




function AddTodo() {
    const [text, setText]= useState("")
    const dispatch = useDispatchTodos()

    const AddTodo = ( )=>{
      setText("");
      dispatch({
          type:"TODO_ADD",
          id:nextId++,
          text:text
      })
    }
    return (
    <div className="flex items-center p-10 sm:p-8 md:p-6 space-x-3 sm:space-x-6 md:space-x-8 ">
      <input className="w-80 md:w-96 outline-none border border-gray-500 p-3 text-center placeholder:text-gray-700 text-lg sm:text-xl rounded-xl" placeholder= "Add Task" value={text} onChange={(e)=>setText(e.target.value)}/>

      <button className="w-36 md:w-48 border border-gray-500 bg-blue-600 text-white p-3 text-center hover:bg-blue-400 rounded-xl" onClick={AddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo
let nextId=1