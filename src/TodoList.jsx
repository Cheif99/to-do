import {useState} from 'react'
import './TodoList.css'
import Button from './UI/Button';


const TodoList = (props) => {



    return (
             <ul className='todo-list'>
                {props.todoList.map(todo => (
                    <li key={todo.id}>{todo.title}: {todo.note} ({todo.date.toDateString()}) 
                    <Button onClick={() => props.onDelete(todo.id)}>DELETE</Button>
                    </li>
                    
                ))}
            </ul>
        
    );
}

export default TodoList;