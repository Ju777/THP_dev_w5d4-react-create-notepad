import React , {useState} from 'react';
import '../styles/MarkdownInput.css'

function MarkdownInput({getText}){
    
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ newNoteButtonPosition, setNewNoteButtonPosition ] = useState(false)
  
    function switchNewNoteButton(){
        console.log("switchNewNoteButton")
        setNewNoteButtonPosition(!newNoteButtonPosition)
    }
    
    function handleChangeTitle(e){
      setTitle(e.target.value);
      console.log('title', title);
    }
  
    function handleChangeText(e){
      setText(e.target.value);
      getText(e.target.value)   
      console.log('text', text);
    }

    function handleSave(){
        console.log('handlesave');
        localStorage.setItem(title, text);
        console.log(localStorage);
        setTitle('');
        setText('');
        alert("Your note is saved.");
        setNewNoteButtonPosition(false);
        window.location.reload(false);       
    }

    function displayInputArea(){
        return (
            <div id="input-area-container">
                <div id="upper-part-container">
                    <div id="note-title-contianer">
                        <input                    
                            type="text"
                            placeholder='enter your note title'
                            value = { title }
                            onChange = { (e) => handleChangeTitle(e)}
                        />
                    </div>
                    <div id="save-button-container">
                        <button 
                            className='btn btn-outline-danger'
                            onClick = { () => handleSave() }
                            >save
                        </button>
                    </div>
                </div>

                <div id="lower-part-container">
                    <textarea
                        // id="textarea-input"
                        value = { text }
                        onChange={ (e) => handleChangeText(e)}
                        autoFocus
                    />

                </div>
            </div>
            )
        }

        function displayNewNoteButton(){
            return(
                <div id="new-note-button-container">
                    <button
                        onClick = { () => switchNewNoteButton() }
                        className = "btn btn-primary"
                    >Add a note</button>
                </div>
            )
        }

    return (
        <div id="markdowninput-container">
            {
                newNoteButtonPosition ? displayInputArea() : displayNewNoteButton()
            }
        </div>
    )
}

export default MarkdownInput;