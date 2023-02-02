import {TodoProvider} from './Component/TodoProvider'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
function App() {
  return (
<>
<TodoProvider>
    <AddTodo/>
    <TodoList/>
</TodoProvider>
</>
  );
}

export default App;
