import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggled: true
        }
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => {
        this.setState({ toggled: !this.state.toggled }); 
    }

    render(){
    return (
        <div className="nav-container">
            <div className={this.state.toggled ? '' : "nav-container dropdown-menu"}>
                <ul>
                    <li>Search</li>
                    <li>Contact</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="brand-container">
                <div className="logo">N</div>
                <div>NEST</div>
            </div>
            <div onClick={this.handleToggle} className="menu-container">
                { this.state.toggled ? <FontAwesomeIcon icon={faStream} /> : <FontAwesomeIcon icon={faTimes} /> }
            </div>
        </div>
        )
    }
}

export default Nav;