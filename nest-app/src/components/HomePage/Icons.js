import React from 'react';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faSearch, faHome } from '@fortawesome/free-solid-svg-icons';

const Icons = () => {
    return (
        <div>
            <h1 className="icon-header">See how Nest can help</h1>
            <div className="icon-one">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faMapMarkedAlt} />
                </div>
                <div className="icon-title">Location</div>
                <div className="icon-content">Get a feel for everyday life in a neighborhood so you can decide if a home and neighborhood are right for you.</div>
                <div className="icon-btn">View More</div>
            </div>
            <div className="icon-two">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className="icon-title">Search</div>
                <div className="icon-content">With filters and custom keyword search, Nest can help you easily find a the home that you'll love.</div>
                <div className="icon-btn">View More</div>
            </div>
            <div className="icon-three">
                <div className="icon-container">
                    <FontAwesomeIcon icon={faHome} />
                </div>
                <div className="icon-title">Buy a home</div>
                <div className="icon-content">With a ton of homes for sale available on the website, Nest can match you with a house you will want to call home.</div>
                <div className="icon-btn">View More</div>
            </div>
        </div>
    )
}

export default Icons;