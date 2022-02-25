import React from 'react';

import './styles/create-task-popup.css'

    
function CreateTaskPopup(props) {
    
    return (props.trigger) ? (
        
        <div class="popup">
            <div class="popup-inner">

                <form action="">
                    <input type="text" placeholder='Create New Task' />
                    <button type='submit'>Create</button>

                    <a onClick={() => props.setTrigger(false)}>Cancel</a>

                </form>

            </div>
        </div>

    ) : "";
};
    
export default CreateTaskPopup;