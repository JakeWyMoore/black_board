import React from 'react';

import 'font-awesome/css/font-awesome.min.css';
import './styles/header.css';
    
const Header = (props) => {

    return (

        <div className='header'>
            <div className='left'>
                <h1>BLACK <i class="fas fa-bars"></i></h1>
            </div>
            <div className='right'>
                <i class="fas fa-cog"></i>
                <button onClick={ () => alert("Are you sure?") }>Logout</button>
            </div>
        </div>
    );
};
    
export default Header;