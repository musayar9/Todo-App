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
    }

    let todoContent;

    if(!isChange){
      todoContent=(
        <div className="flex items-center justify-between space-x-2 md:space-x-4">
            <button className="shrink-0 mr-4 sm:mr-8 md:mr-12 sm:border sm:border-gray-500   sm:bg-blue-800   hover:bg-blue-600 text-blue sm:text-white hover:text-white  sm:hover:text-black font-bold px-2 sm:px-4 md:px-6 py-2 rounded-xl  text-capitalize" onClick={()=>setIsChange(true)} ><BiEdit size={26}/></button>
      <span className="mr-8 "> {todo.text}</span> 
         
        </div>
    )

  
    }else{
      todoContent=(
       
        <form className="space-x-1 md:space-x-6  flex items-center">
             <button className='shrink-0 mr-1 sm:mr-3 sm:border sm:border-gray-500   sm:bg-blue-800   hover:bg-blue-600 text-blue sm:text-white hover:text-white sm:hover:text-black font-bold px-2 sm:px-4 md:px-6 py-2 rounded-xl text-capitalize'  onClick={()=>setIsChange(false)} ><IoIosSave size={26}/></button>
        <input className="outline-none border border-gray-500 text-center rounded-lg w-28 sm:w-56 md:w-72 p-1" value={todo.text} onChange={(e)=>dispatch({
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

    <div className="flex items-center justify-between">

         
<div className='flex items-center justify-center space-x-1 md:space-x-4'>
<button className=" sm:border text-white sm:border-gray-500 px-2 sm:px-4 md:px-6  py-2 sm:bg-red-700 hover:bg-red-500  hover:text-red-500 rounded-xl sm:mr-1 md:mr-3" onClick={()=>{
        dispatch({
            type:"TODO_DELETED",
            id:todo.id
        })
      }}><BiTrash size={26}/></button>
<p className={`${!isActive ? 'line-through' : ""}`} >
      <span className="shrink-1 font-semibold text-md sm:text-lg sm:text-xl md:text-2xl flex items-center text-capitalize text-center  sm:mr-2 md:mr-4">{todoContent} </span>
</p>

</div>

      <div>
      <input type="checkbox" className="w-6 md:w-8 h-6 md:h-8 ml-2  md:ml-4 mr-1 md:mr-0 rounded-xl" checked={todo.status} onClick={handleClick} 
      onChange={e=>{dispatch({
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
