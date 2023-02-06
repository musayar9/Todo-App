import { TodoProvider } from './Component/TodoProvider'
import AddTodo from './Component/AddTodo'
import TodoList from './Component/TodoList'
import Header from './Component/Header';
function App() {
  return (

    <>

      <div className="container flex flex-column place-items-center phone:w-95 sm:w-98 md:w-120 mt-10 md:mt-16 border border-gray-400 rounded-lg p-2 sm:p-6 md:p-8">
        <Header />
        <TodoProvider>
          <AddTodo />
          <TodoList />
        </TodoProvider>
      </div>

    </>
  );
}

export default App;
