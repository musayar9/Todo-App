import React from 'react'
import {useDispatchTodos } from './TodoProvider'
import {useState} from 'react'
function Todo({todo}) {
    const [isChange, setIsChange] = useState(false)
    const  [isActive, setIsActive]=useState(false)
    const dispatch = useDispatchTodos()

    const handleClick = () =>{
      setIsActive(done =>!done)
    }
    let todoContent;

    if(isChange){
        todoContent=(
            <>
            <input value={todo.text} onChange={(e)=>dispatch({
                type:"TODO_EDIT",
                todo:{
                    ...todo,
                    text:e.target.value
                }
            })}/>
            
            <button onClick={()=>setIsChange(false)} >Save Todo</button>
            </>
        )
    }else{
        todoContent=(
            <>
            {todo.text}
               <button onClick={()=>setIsChange(true)} >edit Todo</button>
            </>
        )
    }

  return (
    <label>
      <input type="checkbox" checked={todo.status}  onChange={e=>{dispatch({
        type:"TODO_STATUS",
        todo:{
          ...todo,
          status:e.target.checked
        }
       
      })}}/>
     
     
      {todoContent}

      <button onClick={()=>{
        dispatch({
            type:"TODO_DELETED",
            id:todo.id
        })
      }}>Deleted</button>


    </label>
  )
}

export default Todo
