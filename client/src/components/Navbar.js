import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import achillesLogo from '../images/companyLogo.png';
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

        fetch('http://localhost:12358/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: userEmail })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Logout successful:', data);
                localStorage.clear();
                setLoggedIn(false); // LEFT OFF HERE
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
                        <button className="nav-button" id="login-button" onClick={handleLogout}>Logout</button>
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