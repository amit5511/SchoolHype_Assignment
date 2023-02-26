import React from 'react'
import './Navbar.css';
import { useState } from 'react';
import BackDrop from '../../Img/BackDrop.png'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return <>
        <nav id="main" className='nav_container'>
            <div className='nav_logo'>
                <a href='#main'>MARKALL</a>
            </div>
            <div id="menu_icon" onClick={handleShowNavbar}>
            <img src={BackDrop}  className={`${ 'rotate_backdrop'}`} alt='img'></img>
            </div>
           <div className={`nav_middle_component ${showNavbar && 'active'}`}>
                <ul>
                    <li><a href='#main'>Services</a></li>
                    <li><a href='#main'>Pricing</a></li>
                    <li><a href='#main'>About Us</a></li>
                </ul>
            </div>
            <div className={`nav_right_component ${showNavbar && 'active'}`}>
                <a href='#main'>Get Started</a>
            </div>
        </nav>
    </>
}
export default Navbar;