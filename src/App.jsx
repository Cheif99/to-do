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


const deleteHandler = (id) => {
const newList = todoItems.filter(todo => todo.id !== id);
setTodoItems(newList)
}


return (
    <div className="app">
  <Navbar />
  <AddToDoForm onSaveList = {addTodoListHandler}/>
  <TodoList todoList={todoItems} onDelete={deleteHandler}/>
  </div>
  )
}

export default App
