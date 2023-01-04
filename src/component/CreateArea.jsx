import React,{useState} from "react";

function CreateArea(props) {

    // This note const take care of what is typed inside title and content.
    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;

        setNote(prevNote => {
            return{
            ...prevNote,
            [name] : value
            }
        });
    }

    function submitNote(event){
        // onAdd is addNote function of app.jsx
        props.onAdd(note);
        // To clear the title and content entered everytime after clicking
        // submit button. 
        setNote({
            title:"",
            content:""
        })
        // Prevent the screen to refresh when Add button is pressed.
        event.preventDefault();
    }

    return (
        <div>
        <form className="create-note">
            <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
            <textarea name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows="3" />
            <button onClick={submitNote}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;
