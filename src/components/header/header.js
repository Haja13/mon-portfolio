import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="contentHeader">
            <p className="logo">A<span className='highlight'>jaah.</span></p>
            <div className="menu">
                <Link to="/portfolio">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/services">Services</Link>
                <Link to="/work">My work</Link>
                <Link to="/contact">Contact me</Link>
            </div>
                <button className="btn-contact">Contact</button>
        </div>
    );
};

export default Header;
