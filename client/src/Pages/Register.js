import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import './Register.css';

export default function Register() {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleregister = (e) => {
		e.preventDefault();
		// TODO: Replace console.log statements with actual logic
		console.log('email:', email);
		console.log('Password:', password);
	};

	return (
		<div className="register-container">
			<form onSubmit={handleregister} className="register-form">
				<center><h2 id="register-header">ACHILLES | Register</h2></center>
				<div className="input-group">
					<label htmlFor="fname">First Name:</label>
					<input
						type="text" id="fname" placeholder='Up to 20 characters'
						value={fname}
						onChange={(e) => setFname(e.target.value)}
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="lname">Last Name:</label>
					<input
						type="text" id="lname" placeholder='Up to 20 characters'
						value={lname}
						onChange={(e) => setLname(e.target.value)}
						required
					/>
				</div>
				<div className="input-group">
					<label htmlFor="email">Email:</label>
					<input type="text" id="email" placeholder='example@domain.com'
						pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Format is example@domain.com"
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
				</div>
				<button type="submit">Register</button>
				<Link id="account-exist" to="/Login">Already have an account?</Link>
			</form>
		</div>
	);
}