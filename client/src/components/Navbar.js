import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import achillesLogo from '../images/companyLogo.png';
import { CgProfile } from "react-icons/cg";
import './Navbar.css';

export default function Navbar() {
    const navigate = useNavigate();
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('userEmail')) {
            setLoggedIn(true)
        } 
        else {
            setLoggedIn(false)
        }
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
                setLoggedIn(false); 
                navigate('/Login');
            })
            .catch(error => {
                console.error('Error logging out:', error);
            });
    };

    // const getProfile = () => {
    //     const userEmail = localStorage.getItem("userEmail");

    //     fetch('https://cosc-3380-6au9.vercel.app/api/handlers/users/logoutUser')
    // }

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
                        <button className="nav-button" id="login-button" onClick={handleLogout}>Logout</button>
                        <Link to="/Cart">
                            <button className="nav-button" id="cart-button">
                                My Cart
                            </button>
                        </Link>
                        <div className="nav-button" id="profile-button" onClick={() => navigate('/MyProfile')}>
                                <CgProfile />
                            </div>
                        {/* TODO: Add more buttons */}
                    </>
                ) : (
                    <>
                        <button className="nav-button" id="login-button" onClick={handleLogin}>Login</button>
                        <Link to="/Register">
                            <button className="nav-button" id="register-button">
                                Register
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}