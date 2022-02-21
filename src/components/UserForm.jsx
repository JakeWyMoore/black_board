import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        const userEmail = newUser.email
        console.log("Welcome", newUser);
        console.log("Email: ", newUser.email);
    };
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <input type="text" placeholder='Username' onChange={ (e) => setUsername(e.target.value) } />
                </div>
                <div>
                    <input type="text" placeholder='Email' onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <input type="text" placeholder='Passowrd' onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>

        </div>

    );
};
    
export default UserForm;