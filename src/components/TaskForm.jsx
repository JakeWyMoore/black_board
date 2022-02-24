import React, { useState } from  'react';

import './styles/task-form.css';
    
const TaskForm = (props) => {
    const [task, setTask] = useState(""); 
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createTask = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newTask = { task };
        setTask('');
        console.log("New Task: ", newTask.task);

        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
	        return "New Task Added";
        } else {
            return "Welcome, please submit the form";
        }
    };
    
    return(
        <div>

            <form onSubmit={ createTask }>
                <div>
                    <input type="text" placeholder='New Task' onChange={ (e) => setTask(e.target.value) } />
                </div>
                <input type="submit" value="Create Task" />
            </form>
            <div className='info'>
                <h1>{ task }</h1>
                <h1>{ formMessage() }</h1>
            </div>

        </div>

    );
};
    
export default TaskForm;