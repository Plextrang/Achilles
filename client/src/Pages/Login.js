import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Login.css';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		// TODO: Replace console.log statements with actual logic
		console.log('Email:', email);
		console.log('Password:', password);
	};

	return (
		<div className="login-container">
			<form onSubmit={handleLogin} className="login-form">
				<center><h2 id="login-header">ACHILLES | Sign In</h2></center>
				<div className="input-group">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" placeholder='example@domain.com'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="password">Password:</label>
					<input
						type="password" id="password" placeholder='Required (8 characters minimum)'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					{/* TODO: MAKE FORGOT email/PASSWORD FORM AND LINK */}
				</div>
				<button type="submit">Login</button>
				<Link id="no-account" to="/Register">Don't have an account?</Link>
			</form>
		</div>
	);
}
