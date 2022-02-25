import React, {useState} from 'react';

import './styles/create-task-popup.css'

    
function CreateTaskPopup(props) {

    const [task, setTask] = useState("");
    const [taskError, setTaskError] = useState("");
    

    const handleTask = (e) => {
        setTask(e.target.value);
        if(e.target.value.length == 0) {
            setTaskError("Task is required!");
        } else if(e.target.value.length < 3) {
            setTaskError("Title must be 3 characters or longer!");
        } else {
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

                <form onSubmit={ (e) => e.preventDefault() }>
                    <input className='text' type="text" placeholder='Create New Task' onChange={handleTask} />
                    {
                        taskError ?
                        <input className='btn' type="submit" value="Create Task" disabled /> : 
                        <input className='btn' type="submit" value="Create Task" />

                    }

                    <a onClick={() => props.setTrigger(false)}>Cancel</a>

                </form>

            </div>
        </div>

    ) : "";
};
    
export default CreateTaskPopup;