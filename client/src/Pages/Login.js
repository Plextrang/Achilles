import React, { useState } from 'react';
import './Login.css';

export default function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = (e) => {
		e.preventDefault();
		// TODO: Replace console.log statements with actual logic
		console.log('Username:', username);
		console.log('Password:', password);
	};

	return (
		<div className="login-container">
		<form onSubmit={handleLogin} className="login-form">
			<h2>Login</h2>
			<div className="input-group">
			<label htmlFor="username">Username:</label>
			<input type="text"
				id="username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			</div>
			<div className="input-group">
			<label htmlFor="password">Password:</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			</div>
			<button type="submit">Login</button>
		</form>
		</div>
	);
}