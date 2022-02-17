import React from 'react';

import './styles/box.css';
    
const Boxes = (props) => {
    return (
        <div className='box-container'>
            <div className='card'>
                <h2>{ props.title }</h2>
                <button>All Done</button>
            </div>
        </div>
    );
};
    
export default Boxes;