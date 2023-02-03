import React from 'react'
import {useDispatchTodos } from './TodoProvider'
import {useState} from 'react'
function Todo({todo}) {
    const  [isActive, setIsActive]=useState(true)
    const [isChange, setIsChange] = useState(false)
    const dispatch = useDispatchTodos()


   

    const handleClick = () => {
     setIsActive(todo.status)
     let date = new Date()
     let day = date.getHours()
     let minute = date.getMinutes()
     let second= date.getSeconds()
        console.log(day, minute,  second);
        console.log(minute )
 

    }

    let todoContent;

    if(isChange){
        todoContent=(
            <form className="space-x-4 inline">
            <input className="outline-none border border-gray-500 text-center p-1 rounded-lg" value={todo.text} onChange={(e)=>dispatch({
                type:"TODO_EDIT",
                todo:{
                    ...todo,
                    text:e.target.value
                }
            })}/>
            
            <button  className="" onClick={()=>setIsChange(false)} >Save Todo</button>
            </form>
        )
    }else{
        todoContent=(
            <span className="inline items-center justify-between">
          <span className="mr-12 "> {todo.text}</span> 
               <button className="ml-12" onClick={()=>setIsChange(true)} >edit Todo</button>
            </span>
        )
    }
  


  return (

    <div className="flex items-center justify-between  ">
      <input type="checkbox" className="flex-shrink-0 w-8 h-8 rounded-xl" checked={todo.status} onClick={handleClick} onChange={e=>{dispatch({
        type:"TODO_STATUS",
        todo:{
          ...todo,
          status:e.target.checked
        }
       
      })}}/>


    <label className={`${!isActive ? 'line-through' : ""}`} >
      <span className="flex-shrink-0">{todoContent} </span>
       
       
       
       </label>
      
  
    
  

    <button className="flex-shrink-0" onClick={()=>{
        dispatch({
            type:"TODO_DELETED",
            id:todo.id
        })
      }}>Deleted</button>


</div>
  
  )
}

export default Todo
