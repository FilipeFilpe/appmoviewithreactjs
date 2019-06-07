import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './styles.sass';

class Header extends Component {
    render() {
        return (
            <nav className="header">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;