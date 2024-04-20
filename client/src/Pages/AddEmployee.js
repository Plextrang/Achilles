import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Model from "react-modal";
import './AddEmployee.css';

export default function AddEmployee() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [emp_fname, setEmp_fname] = useState('');
    const [emp_mname, setEmp_mname] = useState('');
    const [emp_lname, setEmp_lname] = useState('');
    const [emp_pnum, setEmp_pnum] = useState('');
    const [emp_DOB, setEmp_DOB] = useState('');
    const [emp_address, setEmp_address] = useState('');
    const [emp_city, setEmp_city] = useState('');
    const [emp_state, setEmp_state] = useState('');
    const [emp_ZIP, setEmp_ZIP] = useState('');
    const [emp_email, setEmp_email] = useState('');
    const [emp_SSN, setEmp_SSN] = useState('');
    const [emp_salary, setEmp_salary] = useState('');

    const close = () =>{
        navigate('/Admin');
    };

    const handleSubmit = async(e) =>{
        const userEmail = localStorage.getItem('userEmail');
        e.preventDefault();
        const employeeData = {
            employee_fname: emp_fname,
            employee_mname: emp_mname,
            employee_lname: emp_lname, 
            employee_pnum: emp_pnum, 
            employee_DOB: emp_DOB, 
            employee_address: emp_address, 
            employee_city: emp_city, 
            employee_state: emp_state, 
            employee_ZIP: emp_ZIP, 
            employee_email: emp_email, 
            employee_SSN: emp_SSN, 
            emp_salary: emp_salary
        };

        try{/*insert backend here */}
        catch(error){/*continue with backend */}
    };


    return (
        <div className="employee-entry-container">
            { visible && (
                <div className="modal-overlay">
                    <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                        <div id="form-space">
                
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-container">
                                <h1 id="title">New Employee</h1>
                                <div className="input">
                                    <label className="text-label">Employee First Name <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_fname} onChange={(e) => setEmp_fname(e.target.value)} placeholder="John" maxLength="50" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee Middle Initial  <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_mname} onChange={(e) => setEmp_mname(e.target.value)} placeholder="B" maxLength="1" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee Last Name <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_lname} onChange={(e) => setEmp_lname(e.target.value)} placeholder="Doe" maxLength="50" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee Phone Number <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_pnum} onChange={(e) => setEmp_pnum(e.target.value)} placeholder="123-456-7890" maxLength="10" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee D.O.B <span className="required">&#42;</span></label>
                                    <input className="text-box" id='dob-box' type="date" name="Date of Birth" min="1950-01-01" max="2024-3-17" pattern="\d{4}-\d{2}-\d{2}" title="Format is Year-Month-Day" />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee Address <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_address} onChange={(e) => setEmp_address(e.target.value)} placeholder="123 Matcha Ln" maxLength="50" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee City <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_city} onChange={(e) => setEmp_city(e.target.value)} placeholder="Houston" maxLength="5" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee State <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_state} onChange={(e) => setEmp_state(e.target.value)} placeholder="Texas" maxLength="5" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee ZIP <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_ZIP} onChange={(e) => setEmp_ZIP(e.target.value)} placeholder="10101" maxLength="5" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee E-mail  <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_email} onChange={(e) => setEmp_email(e.target.value)} placeholder="employee@achilles.com" maxLength="50" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee SSN <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_SSN} onChange={(e) => setEmp_SSN(e.target.value)} placeholder="123456789" maxLength="9" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Employee Salary <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={emp_salary} onChange={(e) => setEmp_salary(e.target.value)} placeholder="USD ($###.##)" maxLength="8" required />
                                </div>
                                <div className="button-wrapper">
                                    <button className="entry-button" type="submit">Add Employee</button>
                                </div>
                                {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}

                                <button className="close-button" onClick={close}>X</button>                           {/* <button className="exit-button-wrapper">
                            <Link to="/Admin" className="close-button">Close</Link>
                            </button> */}
                            </div>
                            {/* <button className="exit-button-wrapper">
                            <Link to="/Admin" className="close-button">Close</Link>
                            </button> */}
                        </form>
                    </div>
                </Model>
            </div>
            )}
        </div>
    );
}
