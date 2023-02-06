
import {useTodos } from './TodoProvider'
import Todo from './Todo'


import React from 'react'

function TodoList() {
    const todos = useTodos()
  return (
    <ul className="place-items-center space-y-2  p-8 sm:p-6 md:p-4">
      {todos.map(todo=>(
        <li className="border border-gray-400 bg-red-400  p-3 sm:p-4 md:p-6 rounded-lg w-95 sm:w-97  md:w-98" key={todo.id}>
            <Todo todo={todo}/>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
