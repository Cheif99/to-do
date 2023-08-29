import Navbar from "./Navbar"
import AddToDoForm from './AddToDoForm'
import {useState} from 'react'
import TodoList from "./TodoList"


function App () {
const [todoItems, setTodoItems] = useState([])  
  
const addTodoListHandler = (todoItem) => {
setTodoItems(list => [...list, todoItem])
console.log('done')
console.log(todoItem)
}
  
return (
    <div className="app">
  <Navbar />
  <AddToDoForm onSaveList = {addTodoListHandler}/>
  <TodoList todoList={todoItems}/>
  </div>
  )
}

export default App
