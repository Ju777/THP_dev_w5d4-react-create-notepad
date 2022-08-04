import React , {useState} from 'react';
import '../styles/MarkdownInput.css'

function MarkdownInput({getText, newNoteButtonPosition}){
    
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
  
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
        window.location.reload(false);       
    }

    function displayInputArea(){
        return (
            <div>
      
            <p><input                    
                type="text"
                placeholder='nom de la note'
                // value = {titleFromEdit ? titleFromEdit : title }
                value = { title }
                onChange = { (e) => handleChangeTitle(e)}
                /></p>
            <p>
                <textarea
                    // value = {textFromEdit ? textFromEdit : text }
                    value = { text }
                    onChange={ (e) => handleChangeText(e)}
                    />
            </p>
            <button 
                className='btn btn-outline-danger'
                onClick = { () => handleSave() }
                >save</button>
                </div>)
        }

    return (
        <div id="markdowninput-container">
            {
                newNoteButtonPosition ? displayInputArea() : <p>Add a note</p>
            }
        </div>
    )
}

export default MarkdownInput;