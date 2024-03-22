import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import './Register.css';

export default function Register() {
	useEffect(() => {
        const validStates = [
          "Alabama", "Alaska", "Arizona", "Arkansas", "California",
          "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
          "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
          "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
          "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
          "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
          "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
          "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
          "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
          "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
        ];
    
        const inputElement = document.getElementById("stateInput");
    
        const handleInput = () => {
            const inputValue = inputElement.value.trim().toLowerCase();
            const isValid = validStates.map(state => state.toLowerCase()).includes(inputValue);
            const validationMessage = isValid ? "" : "Invalid state name";
        
            document.getElementById("stateValidationMessage").textContent = validationMessage;
            inputElement.setCustomValidity(validationMessage);
        };
    
        inputElement.addEventListener("input", handleInput);
    
        return () => {
          inputElement.removeEventListener("input", handleInput);
        };
    }, []);
	
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
				<div className="multi-container">
					<div className="input-name">
						<label htmlFor="fname">First Name: <span className="required">&#42;</span></label>
						<input type="text" className='name-box' placeholder='John' required />
					</div>
					<div className="input-initial">
						<label htmlFor="mname">Middle Inital: <span className="required">&#42;</span></label>
						<input type="text" id="mname" placeholder='P' maxLength="1" required/>
					</div>
					<div className="input-name">
						<label htmlFor="lname">Last Name: <span className="required">&#42;</span></label>
						<input type="text" className='name-box' id="lname" placeholder='Doe' required />
					</div>
				</div>
				<div className='multi-container'>
					<div className="input-group">
						<label>Phone Number: <span className="required">&#42;</span></label>
						<input type="text" className="phone-box" placeholder='000-000-0000' required/>
					</div>
					<div className='input-group'>
						<label>Date of Birth: <span className="required">&#42;</span></label>
						<input className="text-box" type="date" name="Date of Birth" min="1950-01-01" max="2024-3-17"
							   pattern="\d{4}-\d{2}-\d{2}" title="Format is Year-Month-Day" />
					</div>
				</div>
				<div className='input-group'>
					<label>Address 1: <span className="required">&#42;</span></label>
					<input className="text-box" type="text" name="Address 1" placeholder="Street Name/Address" maxlength="50"/>
				</div>
				<div className='input-group'>
					<label>Address 2: </label>
					<input className="text-box" type="text" name="Address 2" placeholder="Apartment #" maxlength="50"/>
				</div>
				<div className='multi-container'>
					<div className="input-city">
						<label>City: <span className="required">&#42;</span></label>
						<input className="text-box" type="text" name="City" placeholder="City" maxlength="20" />
					</div>
					<div className="input-group">
						<label>State: <span className="required">&#42;</span></label>
						<input className="text-box" id="stateInput" type="text" name="State" placeholder="State" maxlength="15" />
						<span id="stateValidationMessage" style={{ color: 'red' }}></span>
					</div>
					<div className="input-group">
						<label>Zip Code: <span className="required">&#42;</span></label>
						<input className="text-box" type="text" name="Zip Code" placeholder="Zip Code (5 digits)" pattern="[0-9]{5}" maxlength="7" />
					</div>
				</div>
				<button type="submit">Register</button>
				<Link id="account-exist" to="/Login">Already have an account?</Link>
			</form>
		</div>
	);
}

/* 
<div className="register-container">
			<form onSubmit={handleregister} className="register-form">
				<center><h2 id="register-header">ACHILLES | Register</h2></center>
				<div className="input-container">
					<div className="input-group">
						<label htmlFor="fname">First Name:</label>
						<input
							type="text" id="fname" placeholder='Up to 20 characters'
							value={fname}
							onChange={(e) => setFname(e.target.value)}
							required
						/>
					</div>
					<div className='input-group'>
						<label htmlFor="mname">Middle Inital:</label>
						<input
							type="text" id="lname" placeholder='Up to 20 characters'
							value={lname}
							onChange={(e) => setLname(e.target.value)}
							required
						/>
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
				</div>
				<button type="submit">Register</button>
				<Link id="account-exist" to="/Login">Already have an account?</Link>
			</form>
		</div>
*/