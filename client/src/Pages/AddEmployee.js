import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Model from "react-modal";
import './AddEmployee.css';

export default function AddEmployee() {
    const [visible, setVisible] = useState(true);
    const [employeeData, setEmployeeData] = useState({
        name: '',
        address: '',
        city: '',
        country: '',
        zip: '',
        phonenum: '',

        position: '',
        department: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployeeData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Submitted data:", employeeData);
        // You can add further processing or API calls here
        setVisible(false); // Close the modal after submission
    };

    return (
        <div className="addemployee-container">

            {visible && (
                <div className="modal-overlay">
                    <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                        <h1 className="modal-title">Add Employee</h1>
                        <form className="employee-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={employeeData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="steetaddress">Street Address:</label>
                                <input
                                    type="text"
                                    id=""
                                    name="streetaddress"
                                    value={employeeData.streetaddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="city">City:</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={employeeData.city}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="country">Country:</label>
                                <input
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={employeeData.country}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">ZIP:</label>
                                <input
                                    type="text"
                                    id="zip"
                                    name="zip"
                                    value={employeeData.zip}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="position">Position:</label>
                                <input
                                    type="text"
                                    id="position"
                                    name="position"
                                    value={employeeData.position}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Department:</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={employeeData.department}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary:</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={employeeData.salary}
                                    onChange={handleChange}
                                />
                            </div>
                            
                            <button type="submit" className="submit-button">Submit</button>
                        </form>

                    </Model>
                </div>
            )}
        </div>
    );
}
