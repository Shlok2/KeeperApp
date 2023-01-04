import React,{useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

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
            {/* Fab is a button (imported) */}
            {/* Zoom is for animation (imported) -> Zoom in Fab(add) icon an animated way*/}
            <Zoom in={true}>
                <Fab onClick={submitNote}>
                    <AddIcon/>
                </Fab>
            </Zoom>
            
        </form>
        </div>
    );
}

export default CreateArea;
