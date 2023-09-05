import {useState} from 'react'
import './TodoList.css'


const TodoList = (props) => {

    return (
             <ul className='todo-list'>
                {props.todoList.map(todo => (
                    <li key={todo.title}>{todo.title}: {todo.note} ({todo.date.toDateString()}) 
                    
                    </li>
                    
                ))}
            </ul>
        
    );
}

export default TodoList;