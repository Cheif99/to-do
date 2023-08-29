import './List.css'
import {useState} from 'react';

const AddToDoForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [inputDate, setInputDate] = useState('');

    const titleChangeHandler = (event) => {
        setInputTitle(event.target.value)
    };

    const noteChangeHandler = (event) => {
        setInputNote(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const TodoForm = {
            title: inputTitle,
            note: inputNote,
            date: new Date(inputDate)
        }
        
props.onSaveList(TodoForm)
setInputTitle('')
setInputNote('')
setInputDate('')
    }
    return (  
        <div className="list">
            <form onSubmit={submitHandler}>
                <div className="list-content">
                    <label >Title</label>
                    <input type="text" value={inputTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="list--content">
                    <label >Note</label>
                    <input type="text" value={inputNote} onChange={noteChangeHandler}/>
                </div>
                <div className="list-date">
                <label >Date</label>
                <input type="date" value={inputDate} onChange={dateChangeHandler}/>
                </div>
                <div className="list-btn">
                    <button type='submit'>Add To-Do</button>
                </div>
            </form>
        </div>
    );
}
 
export default AddToDoForm;