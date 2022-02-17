import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';


import './styles/header.css';


    
const Header = (props) => {

    return (

        <div className='header'>
            <div className='left'>
                <h1>BLACK L<i class="fas fa-ellipsis-v"></i>ST</h1>
            </div>
            <div className='right'>
                <i class="fas fa-cog"></i>
                <button onClick={ ()=> alert("This button has been clicked!") }>Logout</button>
            </div>
        </div>
    );
};
    
export default Header;