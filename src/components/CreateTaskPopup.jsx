import React, {useState} from 'react';

import './styles/create-task-popup.css'

    
function CreateTaskPopup(props) {

    const [task, setTask] = useState("");
    const [taskError, setTaskError] = useState("");
    
    const btnStyle = {
        padding: '12px 15px',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
        color: 'red',
        border: 'none'
    };

    const handleTask = (e) => {
        setTask(e.target.value);
        if(e.target.value.length == 0) {
            setTaskError("Task is required");
        } else if(e.target.value.length < 3) {
            setTaskError("Title must be 3 characters or longer");
        } else if(e.target.value.length > 20) {
            setTaskError("Title must be less than 20 characters")
        }
        else {
            // an empty string is considered a "falsy" value
            setTaskError("");
        }
    }
    
    return (props.trigger) ? (
        
        <div class="popup">
            <div class="popup-inner">

                <div className='errors'>
                    {
                        taskError ?
                        <p>{ taskError }</p> :
                        ''
                    }
                </div>
                <div>
                    <a style={btnStyle}>Test</a>
                </div>
                <form action='' onSubmit={ (e) => e.preventDefault() }>
                    <input className='text' type="text" placeholder='Create New Task' onChange={handleTask} />
                    {
                        taskError ?
                        <input className='btn' type="submit" value="Create Task" disabled /> : 
                        <input className='btn' type="submit" value="Create Task" />
                    }

                    <a onClick={() => props.setTrigger(false)}><i class="fas fa-times-circle"></i></a>

                </form>

            </div>
        </div>

    ) : "";
};
    
export default CreateTaskPopup;