import React from 'react';

import './styles/create-task-popup.css';
    
const CreateTaskPopup = (props) => {
    return (
        <div id="myModal" class="modal">

            <div class="modal-content">
                <span class="close">&times;</span>
                <p>Some text in the Modal..</p>
            </div>

        </div>
    );
};
    
export default CreateTaskPopup;