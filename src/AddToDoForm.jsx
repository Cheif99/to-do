import  './AddToDoForm.css'
import { useState } from 'react';

const AddToDoForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [valid, setValid] = useState(true)

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

        if(inputTitle.trim().length || inputNote.trim().length === 0) {
            setValid(false)
            return;
        }

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

        <form onSubmit={submitHandler}>
            <div className="list-content">
                <label >Title</label>
                <input type="text" value={inputTitle} onChange={titleChangeHandler} />
                <label >Note</label>
                <input type="text" value={inputNote} onChange={noteChangeHandler} />
                <label >Date</label>
                <input type="date" value={inputDate} onChange={dateChangeHandler} />
                <button type='submit'>Add To-Do</button>
            </div>
        </form>

    );
}

export default AddToDoForm;