function  todosReducer (todos,action){
    switch (action.type) {
        case "TODO_ADD": {
            return [...todos,{
                id:action.id,
                text:action.text,
                status:false
            }]
        }
            
        case "TODO_EDIT":{
            return todos.map(listtodo =>{
                if(listtodo.id === action.todo.id){
                    return action.todo
                } else{
                    return listtodo;
                }
            })
        }

        case "TODO_STATUS":{
            return todos.map(done =>{
                if(done.id === action.todo.id){
                    return action.todo
                }else{
                    
                    return {
                        ...done,
                    isCompleted: !done.isCompleted};
                }
            })
        }

        case "TODO_DELETED": {
            return todos.filter(t => t.id !== action.id)
        }
        default:{
            throw Error("Not Found: " + action.type)
        }
    }
}

export default todosReducer