import React , {useState} from 'react';
import '../styles/MarkdownInput.css'



function MarkdownInput({handleChange}){

    
    return (
        <div id="markdowninput-container">
            <p>MarkdownInput</p>
            <textarea onChange={ (e) => handleChange(e)}/>
        </div>
    )
}

export default MarkdownInput;