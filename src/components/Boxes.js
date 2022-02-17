import React from 'react';
    
const Boxes = (props) => {
    return (
        <div>
            <div className='card'>
                <h2>{ props.title }</h2>
                <button>All Done</button>
            </div>
        </div>
    );
};
    
export default Boxes;