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

const initialTasks = []
