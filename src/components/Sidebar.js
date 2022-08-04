import React , {useState} from 'react';
import '../styles/Sidebar.css'

function Sidebar({localStorageArray}){

    return (
        <div id="sidebar-container">
            <div id = "sidebar-title">
                <p>SIDEBAR</p>
                <button className='btn btn-primary'>Nouvelle note</button>
            </div>
            {   
                localStorageArray.map(note => (
                <div className='sidebar-note-container'>
                    <h6 className='sidebar-note-title'>Note : {Object. keys(note)[0]}</h6> 
                    <p className='sidebar-note-excerpt'>{Object. values(note)[0]}</p>
                </div>
                ))
            }
            
        </div>
    )
}

export default Sidebar;