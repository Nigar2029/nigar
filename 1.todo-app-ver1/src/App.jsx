import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItem from './components/TodoItem1'
import TodoItem2 from './TodoItem2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <center class='todo-container'>
      <AppName />
      <AddTodo />
<div className="item-container">

<TodoItem />
<TodoItem2 />
</div>


    
    </center>
    
    </>
  )
}

export default App
