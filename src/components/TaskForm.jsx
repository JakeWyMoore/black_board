import React, { useState } from  'react';

import './styles/task-form.css';
    
const TaskForm = (props) => {
    const [task, setTask] = useState(""); 
    
    const createTask = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newTask = {task};
        setTask('');
        console.log("New Task: ", newTask);
    };
    
    return(
        <div>

            <form onSubmit={ createTask }>
                <div>
                    <input type="text" placeholder='Task' onChange={ (e) => setTask(e.target.value) } />
                </div>
                <input type="submit" value="Create Task" />
            </form>

        </div>

    );
};
    
export default TaskForm;