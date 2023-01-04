import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';

// This function is to render a note on screen.
function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        <div className="note">
            <h1>
                {props.title}
            </h1>
            <p>
                {props.content}
            </p>
            {/* <button onClick={handleClick}>DELETE</button> */}
            <button onClick={handleClick}>
                <DeleteIcon/>
            </button>
        </div>
    );
}

export default Note;