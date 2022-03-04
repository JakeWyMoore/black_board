import React from 'react';

import './styles/box.css';

const Boxes = (props) => {

    // THIS IS HOW YOU ITTERATE THROUGH A LIST
    // const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];

    return (
        <div className='box-container'>
            <div className='card'>
            <h2>{ props.message }</h2>

                <div className='buttons'>
                    <button>Complete</button>
                    <a href=""><i class="fas fa-cog"></i></a>
                </div>
                
            </div>

            {/* THE LIST */}
            {/* <ul>
                {
                    groceryList.map( (item, index) => 
                        <li key={ index }>{ item }</li>
                    )
                }
            </ul> */}

        </div>
    );
};
    
export default Boxes;