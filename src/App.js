import {TodoProvider} from './Component/TodoProvider'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
function App() {
  return (
<div className="container flex   flex-column place-items-center   w-120 mt-16 border border-gray-400 rounded-lg p-8">
<TodoProvider>
    <AddTodo/>
    <TodoList/>
</TodoProvider>
</div>
  );
}

export default App;
