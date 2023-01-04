import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import CreateArea from "./CreateArea";

// function createNotes(noteItem){
//     return <Note
//         key = {noteItem.key}
//         title = {noteItem.title}
//         content = {noteItem.content}
//     />
// }

// We want to use this function in CreateArea.jsx adn hence we pass it
// as a prop in CreateArea.
function App(){

    // This notes array has all the notes.
    const [notes,setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevValue =>{
            return [...prevValue,newNote]
        });
    }

    // Filter function is used when we want to filter out some values from
    // array -> here all those index whose value are not equal to id are
    // returned or we can say element with index = id are removed.
    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem,index) => {
                return index !== id;
            });
        });
    }

    // This function is used to render every node on screen.
    // Map has a element named index -> which has unque value everytime
    function render_every_note(noteItem,index){
        return(
            <Note
                key= {index}
                id = {index}
                title= {noteItem.title}
                content = {noteItem.content}
                onDelete = {deleteNote}
            />
        );
    }

    return (
        <div>
            <Header/>
            <CreateArea onAdd={addNote}/>
            {notes.map(render_every_note)}
            
            {/* Below part of code is used if we are given a js file 
            for all the notes title and content. (eg -> notes.js) */}
            {/* {notes.map(createNotes)} */}

            {/* alternate way to write above line. */
            /* {notes.map((noteItem) =>
                <Note
                    key = {noteItem.key}
                    title = {noteItem.title}
                    content = {noteItem.content}
                />
            )} */}

            <Footer/>
        </div>
    );
}

export default App;

