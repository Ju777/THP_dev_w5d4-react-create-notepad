import React , {useState} from 'react';
import '../styles/MarkdownInput.css'

function MarkdownInput({getText}){
    
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ saveConfirm, setSaveConfirm ] = useState('')
  
    function handleChangeTitle(e){
      setTitle(e.target.value);
      console.log('title', title);
      setSaveConfirm('')
    }
  
    function handleChangeText(e){
      setText(e.target.value);
      getText(e.target.value)   
      console.log('text', text);
      setSaveConfirm('')
    }

    function handleSave(){
        console.log('handlesave');
        localStorage.setItem(title, text);
        console.log(localStorage);
        setTitle('');
        setText('');
        setSaveConfirm('Note is saved.')
    }



    return (
        <div id="markdowninput-container">
            <p>MarkdownInput</p>
            <p><input                    
                type="text"
                placeholder='nom de la note'
                value = {title}
                onChange = { (e) => handleChangeTitle(e)}
                /></p>
            <p>
                <textarea
                    value = {text}
                    onChange={ (e) => handleChangeText(e)}
                    />
            </p>
            <button 
                className='btn btn-outline-danger'
                onClick = { () => handleSave() }
                >save</button>
            <span
                value = {saveConfirm}
                id = "save-confirm">{saveConfirm}
            </span>    
        </div>
    )
}

export default MarkdownInput;