import { createContext, useReducer, useContext } from "react"
import todosReducer from '../Reducer/TodoReducer'
const TodoContext = createContext(null)
const TodoDispatchContext = createContext(null)

export function  TodoProvider ({children}){
    const [todos, dispatch] = useReducer(
        todosReducer,
        initialTasks  
        
        );

        return(
            <TodoContext.Provider value={todos}>
                <TodoDispatchContext.Provider value ={dispatch}>
                    {children}
                </TodoDispatchContext.Provider>
            </TodoContext.Provider>
        )
}

export const useTodos = () => useContext(TodoContext);
export const useDispatchTodos = () =>useContext(TodoDispatchContext)

const initialTasks = [
    {id:0, text:'Learn React JS', status:true},
    {id:1, text:'Wake up 8:30pm', status:false},
    {id:2, text:'Drive car', status:false},
    {id:3, text:'Go cinema', status:false},

]
