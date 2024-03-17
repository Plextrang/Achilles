import React from 'react'
import {Link} from 'react-router-dom'
import achillesLogo from '../images/companyLogo.png'
import "./Navbar.css"

export default function Navbar() {
    return (
        <div className="nav-container">
            <div className="left-side">
                <div id="logo-space">
                    <img src={achillesLogo}></img>    
                </div>        
            </div>
            <div className='right-side'>
                <Link to="/Login">
                    <button class="nav-button" id="login-button" >Login</button>
                </Link>

                <Link to="/Register">
                    <button class="nav-button" id="register-button">Register</button>
                </Link>
            </div>

        </div>
    )
}