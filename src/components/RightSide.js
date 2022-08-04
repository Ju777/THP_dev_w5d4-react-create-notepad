import React , {useState} from 'react';
import '../styles/RightSide.css'
import NoteDisplay from './NoteDisplay';
import MarkdownInput from './MarkdownInput';

function RightSide(){
    const [ text, setText ] = useState(null);

    function getText(text){
        setText(text);
    }

    return (
        <div id="rightside-container">
            <p>RIGHT-SIDE</p>
            
            <NoteDisplay text = {text}/>
            <MarkdownInput
                getText = {getText}
                // handleChangeText = { (e) => handleChangeText(e) }
                // handleChangeTitle = { (e) => handleChangeTitle(e) }
                // handleSave = {handleSave}
            />
      
        </div>
    )
}

export default RightSide;