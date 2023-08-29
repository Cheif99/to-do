

const TodoList = (props) => {

    return (

        <div className='todo-list'>
            <ul>
                {props.todoList.map(todo => (
                    <li key={todo.title}>{todo.title}, {todo.note}</li>
                    
                ))}
            </ul>
        </div>
    );
}

export default TodoList;