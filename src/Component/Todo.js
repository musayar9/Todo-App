import React from 'react'
import {useDispatchTodos } from './TodoProvider'
import {useState} from 'react'
import {BiEdit, BiTrash} from 'react-icons/bi'
import {IoIosSave} from 'react-icons/io'
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

    if(!isChange){
      todoContent=(
        <div className="flex items-center justify-between space-x-4">
            <button className="shrink-0 mr-12 border border-gray-500   bg-blue-800   hover:bg-blue-600 text-white hover:text-black font-bold px-6 py-2 rounded-xl  text-capitalize" onClick={()=>setIsChange(true)} ><BiEdit size={26}/></button>
      <span className="mr-8 "> {todo.text}</span> 
         
        </div>
    )

  
    }else{
      todoContent=(
       
        <form className="space-x-6 flex items-center">
             <button className='shrink-0 mr-3 border border-gray-500   bg-blue-800   hover:bg-blue-600 text-white hover:text-black font-bold px-6 py-2 rounded-xl text-capitalize'  onClick={()=>setIsChange(false)} ><IoIosSave size={26}/></button>
        <input className="outline-none border border-gray-500 text-center rounded-lg w-75 " value={todo.text} onChange={(e)=>dispatch({
            type:"TODO_EDIT",
            todo:{
                ...todo,
                text:e.target.value
            }
        })}/>
        
     
        </form>
       

    )
        
      }


  return (

    <div className="flex items-center justify-between  ">

         
<div className='flex items-center justify-center space-x-4'>
<button className="shrink-0 border text-white border-gray-500 px-6 py-2 bg-red-700 hover:bg-red-500 rounded-xl mr-3" onClick={()=>{
        dispatch({
            type:"TODO_DELETED",
            id:todo.id
        })
      }}><BiTrash size={26}/></button>
<p className={`${!isActive ? 'line-through' : ""}`} >
      <span className="shrink-1 font-semibold text-2xl flex items-center text-capitalize text-center mr-4">{todoContent} </span>
</p>

</div>

      <div>
      <input type="checkbox" className="w-8 h-8 ml-4 rounded-xl" checked={todo.status} onClick={handleClick} onChange={e=>{dispatch({
        type:"TODO_STATUS",
        todo:{
          ...todo,
          status:e.target.checked
        }
       
      })}}/>
      </div>

 
      
  
    
  

 


</div>
  
  )
}

export default Todo
