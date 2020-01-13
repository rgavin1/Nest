import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStream, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggled: true,
            input: ''
        }
        this.handleToggle = this.handleToggle.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleToggle = () => {
        this.setState({ toggled: !this.state.toggled }); 
    }

    handleInput = (e) => {
        this.setState({ input: e.target.value });
    }

    render(){
    return (
        <div className="nav-container">
            <div className={this.state.toggled ? '' : "nav-container dropdown-menu"}>
                <ul>
                    <li className="search-box">
                        <form>
                        <input className="mobile-search" 
                        type="text" 
                        placeholder="City, State, address, ZIP"
                        value={this.state.input}
                        onChange={this.handleInput}
                        />
                        <button className="mobile-btn" type="submit" >
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        </form>
                    </li>
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