import React from 'react';

import './styles/create-task-popup.css';
    
const CreateTaskPopup = (props) => {
    return (
        <div className='create-task-container'>
            <div className='create-task-popup'>
                <h1>Create New Task</h1>
                <form action="">
                    <input type="text" placeholder='Taks' />
                    <button type='submit'>Create</button>
                </form>
            </div>
        </div>
    );
};
    
export default CreateTaskPopup;