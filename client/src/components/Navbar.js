import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import achillesLogo from '../images/companyLogo.png';
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [userType, setType] = useState("");

    useEffect(() => {
        if (localStorage.getItem('userEmail')) {
            setLoggedIn(true)
        } 
        else {
            setLoggedIn(false)
        }
        if(localStorage.getItem('userType') != undefined)
            setType(localStorage.getItem('userType'));
    }, []);

    const handleLogin = () => {
        navigate('/Login');
    };

    const handleLogout = () => {
        const userEmail = localStorage.getItem('userEmail');

        fetch('https://cosc-3380-6au9.vercel.app/api/handlers/users/logoutUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail })
        }).then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Logout successful:', data);
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userType');
                setLoggedIn(false); 
                navigate('/Login');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    return (
        <div className="nav-container">
            <div className="left-side">
                <div id="logo-space">
                    <Link to="/Home">
                        <button id="logo-button">
                            <img src={achillesLogo} alt="Achilles Logo" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="right-side">
                {isLoggedIn ? (
                    <>
                        {(userType === 'Manager' || userType === 'Administrator') && (
                            <button className="nav-button" id="cart-button" onClick={() => navigate('/Admin')}>Manager Portal</button>
                        )}
                        {userType === 'Employee' && (
                            <button className="nav-button" id="cart-button" >Employee Button</button>
                        )}
                        {userType === 'Customer' && (
                            <button className="nav-button" id="cart-button" onClick={() => navigate('/Cart')}>My Cart</button>
                        )}
                        <button className="nav-button" id="login-button" onClick={handleLogout}>Logout</button>
                        <div className="nav-button" id="profile-button" onClick={() => navigate('/MyProfile')}>
                            <CgProfile />
                        </div>
                        <button className="nav-button" id="cart-button" onClick={() => navigate('/Cart')}>Test 6</button>
                        <button className="nav-button" id="login-button" onClick={handleLogout}>Logout</button>
                        <div className="nav-button" id="profile-button" onClick={() => navigate('/MyProfile')}>
                                <CgProfile />
                            </div>
                        {/* TODO: Add more buttons */}
                    </>
                ) : (
                    <>
                        <button className="nav-button" id="login-button" onClick={handleLogin}>Login</button>
                        <button className="nav-button" id="register-button" onClick={() => navigate('/Register')}>Register</button>
                    </>
                )}
            </div>
        </div>
    );
}

{/* <Link to="/Products">
    <button class = "shop"> Shop Now</button>
    </Link>
    <Link to="/EntryForm">
        <button class = "shop"> Temp Data Entry Button</button>
    </Link>
    <Link to="/ProfileForm">
        <button class = "shop"> Temp Profile Button</button>
    </Link>
    <Link to="/Cart">
        <button class = "shop"> Temp Shopping Cart</button>
    </Link>
    <Link to="/Admin">
        <button class = "shop"> Temp Admin Portal</button>
    </Link> */}