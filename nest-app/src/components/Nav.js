import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="brand-container">
                <div className="logo">N</div>
                <div>NEST</div>
            </div>
            <div className="menu-container">
                <FontAwesomeIcon icon={faStream} />
            </div>
        </div>
    )
}

export default Nav;