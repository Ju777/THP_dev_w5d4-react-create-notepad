import React from 'react';

export default React.createContext({
    titleToEdit : '',
    updateTitleToEdit : (title) => {},
    textToEdit : '',
    updateTextToEdit : (text) => {}
})