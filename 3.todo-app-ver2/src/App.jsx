import "bootstrap/dist/css/bootstrap.min.css"
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
function App() {

let foodItem =[{
  name: "have ice cream",
  dueDate: "12/2/2024"
},
{
  name:"eat mango",
  dueDate: "19/05/2024"
},
{
  name: "start to code",
  dueDate: "8/4/2024"
}]
  return (
    <>
    <center className='todo-container'>
      <AppName />
      <AddTodo />
      <TodoItems todoItems = {foodItem}/>
    </center>
    
    </>
  )
}

export default App
