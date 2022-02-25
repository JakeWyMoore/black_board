import React from 'react';

import './styles/footer.css'
import CreateTaskPopup from './CreateTaskPopup';

const Footer = (props) => {

    return (
        <div className='footer-container'>
            <div className='footer-content' onClick={() => props.setTrigger(true)}>
                <i class="fa fa-solid fa-plus"></i>
            </div>
        </div>

    );
    
};

    
export default Footer;