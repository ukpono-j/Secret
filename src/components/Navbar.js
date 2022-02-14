import React, { useState } from 'react'
import { Button } from "./Button"
import { Link } from "react-router-dom"
import "./Navbar.css"
import Dropdown from "./Dropdown"

function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }else{
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        }else{
            setDropdown(false)
        }
    }
    return (
        <>
            <nav className='navbar'>
                <Link to="/" className='navbar-logo'>
                    EPIC  
                    {/* <i className="fab fa-firstdraft"></i> */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                   
                    <li className='nav-item'>
                        <Link to="/shop" className='nav-links' onClick={closeMobileMenu}>
                            Shop
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                          <li className='nav-item'>
                        <Link to="/login" className='nav-links login' onClick={closeMobileMenu}>
                            Log In 
                        </Link>
                    </li>
                    <li className='nav-item' >
                        <Link to="/signUp" className='nav-links signIn' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar