import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import './styles/header.css'
    
const Header = (props) => {
    return (
        <div className='header'>
            <div className='left'>
                <h1><span className='black'>BLACK</span> LIST</h1>
            </div>
            <div className='right'>
                <i class="fa fa-solid fa-gear"></i>

                <button>Logout</button>
            </div>

        </div>
    );
};
    
export default Header;