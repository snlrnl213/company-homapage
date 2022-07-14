import React from 'react';
import { Link } from 'react-router-dom';
 
function ButtonHome() {
    return(
        <Link to='/qna/new'>
            <button>
                Write
            </button>
        </Link>
    );
}
 
export default ButtonHome;