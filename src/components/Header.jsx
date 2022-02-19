import React from 'react';
import moment from "moment";

import 'font-awesome/css/font-awesome.min.css';

import './styles/header.css';

var date = moment().format("MM / DD / YYYY");
    
const Header = (props) => {

    return (

        <div className='header'>
            <div className='left'>
                <h1>BLACK L<i class="fas fa-ellipsis-v"></i>ST</h1>
                <div className='left-dates'>
                    <i class="fas fa-arrow-circle-left"></i>
                    <p>{date}</p>
                    <i class="fas fa-arrow-circle-right"></i>
                </div>
            </div>
            <div className='right'>
                <i class="fas fa-cog"></i>
                <button onClick={ () => alert("Are you sure?") }>Logout</button>
            </div>
        </div>
    );
};
    
export default Header;