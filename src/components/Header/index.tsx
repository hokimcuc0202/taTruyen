import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {
    return (
        <div className="header-container">
            <div className="navbar-header">
                <Link className="navbar-header-item" to="/">Home </Link>
                <Link  className="navbar-header-item" to="/detail">Detail </Link>
            </div>
        </div>
    );
};

export default Header;