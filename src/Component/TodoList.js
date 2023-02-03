
import {useTodos } from './TodoProvider'
import Todo from './Todo'


import React from 'react'

function TodoList() {
    const todos = useTodos()
  return (
    <ul className=" place-items-center space-y-2 p-4">
      {todos.map(todo=>(
        <li className="border border-gray-400 bg-red-400 p-3 rounded-lg  w-98" key={todo.id}>
            <Todo todo={todo}/>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
