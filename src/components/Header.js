import React from 'react';

import './styles/header.css'
    
const Header = (props) => {
    return (
        <div className='header'>

            <div className='left'>
                <h1>Black List</h1>
            </div>

            <div className='right'>
                <p>Logout</p>
                <i class="fa fa-solid fa-gear"></i>
            </div>

        </div>
    );
};
    
export default Header;