
import {useTodos } from './TodoProvider'
import Todo from './Todo'


import React from 'react'

function TodoList() {
    const todos = useTodos()
  return (
    <ul>
      {todos.map(todo=>(
        <li key={todo.id}>
            <Todo todo={todo}/>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
