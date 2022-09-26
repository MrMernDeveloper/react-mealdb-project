import React from 'react';
import logo from '../../Images/navbar.png'
import './Header.css'

const Header = () => {
    return (
        <nav className='nav'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/order">Order</a>
                <a href="/contact">Contact</a>
                <a href="/login">Log In</a>
            </div>
      </nav>
    );
};

export default Header;