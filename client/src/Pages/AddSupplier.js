import React, {useState} from "react";
import Model from "react-modal";
import {Link, redirect, useNavigate} from 'react-router-dom'
import './AddSupplier.css';





export default function AddSupplier() {
    const [supplierName, setSupplierName] = useState('');
    const [supplierID, setsupplierID] = useState('');
    const [supplieremail, setsupplieremail] = useState('');
    const [supplierPhone, setsupplierPhone ] = useState('');
    const [supplierStreet, setsupplierStreet] = useState('');
    const [supplierCity, setsupplierCity] = useState('');
    const [supplierState, setsupplierState] = useState('');
    const [supplierZIP, setsupplierZIP] = useState('');
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);

    const handleSubmit = async(e) =>{
      const userEmail = localStorage.getItem('userEmail');
      e.preventDefault();
      const supplierData = {
        supplier_name: supplierName,
        supplier_ID: supplierID,
        supplier_email: supplieremail,
        supplier_phone: supplierPhone,
        supplier_street: supplierStreet,
        supplier_city: supplierCity,
        supplier_state: supplierState,
        supplier_zip: supplierZIP
      };
      try{ /*insert backend here i assume */}  
      catch(error){/*continue backend  here ig  */}
    };
    const close = () => {
        navigate('/Admin');
    };

    return (
        <div className="supplier-entry-container">
            { visible && (
                <div className="modal-overlay">
                    <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                        <div id="form-space">
                
                        <form className="form-wrapper" onSubmit={handleSubmit}>
                            <div className="form-container">
                                <h1 id="title">New Supplier</h1>
                                <div className="input">
                                    <label className="text-label">Supplier Name <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={supplierName} onChange={(e) => setSupplierName(e.target.value)} placeholder="Enter Supplier's Name" maxLength="50" required />
                                </div>
                                <div className="input">
                                    <label className="text-label">Supplier ID <span className="required">&#42;</span></label>
                                    <input className="text" type="text" value={supplierID} onChange={(e) => setsupplierID(e.target.value)} placeholder="Enter Supplier ID" maxLength="255" required />
                                </div>
                                <div className="input">
                                    <div className="input">
                                        <label className="text-label">Supplier Email <span className="required">&#42;</span></label>
                                        <input className="text" type="text" value={supplieremail} onChange={(e) => setsupplieremail(e.target.value)} placeholder="supplier@email.com" maxLength="50" required />
                                    </div>
                                    <div className="input">
                                        <label className="text-label">Supplier Phone <span className="required">&#42;</span></label>
                                        <input className="text" type="text" value={supplierPhone} onChange={(e) => setsupplierPhone(e.target.value)} placeholder="123-456-7890" maxLength="10" required />
                                    </div>
                                    <div className="input">
                                        <label className="text-label">Supplier Street <span className="required">&#42;</span></label>
                                        <input className="text" type="text" value={supplierStreet} onChange={(e) => setsupplierStreet(e.target.value)} placeholder="123 Matcha Ln" maxLength="50" required />
                                    </div>
                                    <div className="input">
                                        <label className="text-label">Supplier City <span className="required">&#42;</span></label>
                                        <input className="text" type="text" value={supplierCity} onChange={(e) => setsupplierCity(e.target.value)} placeholder="Texas" maxLength="50" required />
                                    </div>
                                    <div className="input">
                                        <label className="text-label">Supplier ZIP <span className="required">&#42;</span></label>
                                        <input className="text" type="text" value={supplierZIP} onChange={(e) => setsupplierZIP(e.target.value)} placeholder="10101" maxLength="5" required />
                                    </div>
                                </div>
                                <div className="button-wrapper">
                                    <button className="entry-button" type="submit">Add Supplier</button>
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
