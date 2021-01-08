import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header({color}){
    return (
        <header id="header" className={color}>
            <div className="port"><a href="http://rowanna.dothome.co.kr/port/main/index4.html">port</a></div>
            <div className="logo"><Link to="/">rowanna</Link></div>
            <nav className="nav">
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/site">Site</Link></li>
                    <li><Link to="/script">Script</Link></li>
                    <li><Link to="/animation">Animation</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;