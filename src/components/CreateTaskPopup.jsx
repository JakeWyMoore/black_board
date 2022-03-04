import React, {useState} from 'react';

import './styles/create-task-popup.css'

    
function CreateTaskPopup(props) {

    const [task, setTask] = useState("");
    const [taskError, setTaskError] = useState("");
    
    // STYLES
    // const btnStyle = {
    //     padding: '12px 15px',
    //     fontFamily: 'Arial, sans-serif',
    //     fontWeight: 'bold',
    //     background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    //     color: 'red',
    //     border: 'none'
    // };

    const handleTask = (e) => {
        setTask(e.target.value);
        e.preventDefault();
        props.onNewMessage( task );

        // ERROS
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

                {/* THIS IS HOW YOU CAN ADD STYLES */}
                {/* <div>
                    <a style={btnStyle}>Test</a>
                </div> */}

                
                <form action='' onSubmit={ handleTask }>
                    <input className='text' type="text" placeholder='Create New Task' onChange={handleTask} value={task}/>
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