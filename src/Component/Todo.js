import React from 'react'
import {useDispatchTodos } from './TodoProvider'
import {useState} from 'react'
function Todo({todo}) {
    const  [isActive, setIsActive]=useState(true)
    const [isChange, setIsChange] = useState(false)
    const dispatch = useDispatchTodos()


    const handleClick = () => {
     setIsActive(todo.status)
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
    <div>
      <input type="checkbox" checked={todo.status} onClick={handleClick} onChange={e=>{dispatch({
        type:"TODO_STATUS",
        todo:{
          ...todo,
          status:e.target.checked
        }
       
      })}}/>
    <label className={`${!isActive ? 'text-decoration-line-through' : ""}`} > {todoContent}</label>
      


     
  


      <button onClick={()=>{
        dispatch({
            type:"TODO_DELETED",
            id:todo.id
        })
      }}>Deleted</button>

</div>
  
  )
}

export default Todo
