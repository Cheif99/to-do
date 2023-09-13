import  './AddToDoForm.css'
import { useState } from 'react';
import Button from './UI/Button'




const AddToDoForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputNote, setInputNote] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [valid, setValid] = useState(true)

    const titleChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setValid(true)
        }
        setInputTitle(event.target.value)
    };

    const noteChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setValid(true)
        }
        setInputNote(event.target.value)
    }

    const dateChangeHandler = (event) => {
        if(event.target.value.trim().length > 0) {
            setValid(true)
        }
        setInputDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if((inputTitle.trim().length=== 0) || (inputNote.trim().length=== 0)){
            setValid(false);
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
            <div className={`list-content ${!valid ? 'invalid' : ''}`}>
                <label >Title</label>
                <input type="text" value={inputTitle} onChange={titleChangeHandler} />
                <label >Note</label>
                <input type="text" value={inputNote} onChange={noteChangeHandler} />
                <label >Date</label>
                <input type="date" value={inputDate} onChange={dateChangeHandler} />
                <Button type='submit'>Add To-Do</Button>
            </div>
        </form>

    );
}

export default AddToDoForm;