import React from 'react';

import './styles/box.css';

const Boxes = (props) => {
    return (
        <div className='box-container'>
            <div className='card'>
                <h2>{ props.title }</h2>

                <div className='buttons'>
                    <button>Complete</button>
                    <a href=""><i class="fas fa-cog"></i></a>
                </div>
                
            </div>
        </div>
    );
};
    
export default Boxes;