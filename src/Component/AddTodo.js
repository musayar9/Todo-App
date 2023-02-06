import { useState } from 'react'
import { useDispatchTodos } from './TodoProvider'

import React from 'react'




function AddTodo() {
  const [text, setText] = useState("")
  const dispatch = useDispatchTodos()

  const AddTodo = () => {
    setText("");
    dispatch({
      type: "TODO_ADD",
      id: nextId++,
      text: text
    })
  }
  return (
    <div className="block sm:flex sm:items-center p-6 sm:p-8 md:p-10 space-x-0 sm:space-x-6 md:space-x-8  space-y-2 sm:space-y-0 ">
      <input className="w-72 sm:w-5/6 md:w-96 outline-none border border-gray-500 p-2 sm:p-3 text-center placeholder:text-gray-700  phone:text-lg  sm:text-xl rounded-xl" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />

      <button className="w-72  sm: md:w-48 border  border-gray-500 bg-blue-600 text-white p-2 sm:p-3 text-lg sm:text-xl text-center  hover:bg-blue-400 rounded-xl" onClick={AddTodo}>Add Todo</button>
    </div>
  )
}

export default AddTodo
let nextId = 1