import React, {useState} from "react";
import Model from "react-modal";
import {Link, redirect, useNavigate} from 'react-router-dom'
import './AddSupplier.css';



export default function AddSupplier() {
    const navigate = useNavigate();
    const [visible, setVisible] = useState(true);
    const [supplierData, setShoeData] = useState({
        name: '',
        company:''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShoeData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log("Submitted data:", supplierData);
        // You can add further processing or API calls here
        setVisible(false); // Close the modal after submission
    };
    const close = () => {
        navigate('/Admin');
    };

    return (
        <div className="addshoe-container">
            {visible && (
                <div className="modal-overlay">
                    <Model isOpen={visible} onRequestClose={() => setVisible(false)}>
                        <h1 className="modal-title">Add Supplier</h1>
                        <form className="shoe-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={supplierData.name}
                                    onChange={handleChange}
                    
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="size">Company:</label>
                                <input
                                    type="text"
                                    id="size"
                                    name="size"
                                    value={supplierData.size}
                                    onChange={handleChange}
                             
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="quantity">Quantity:</label>
                                <input
                                    type="number"
                                    id="quantity"
                                    name="quantity"
                                    value={supplierData.quantity}
                                    onChange={handleChange}
                            
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="price">Representative:</label>
                                <input
                                    type="text"
                                    id="price"
                                    name="price"
                                    value={supplierData.price}
                                    onChange={handleChange}
                                 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="color">Representative Contact:</label>
                                <input
                                    type="text"
                                    id="color"
                                    name="color"
                                    value={supplierData.color}
                                    onChange={handleChange}
                                
                                />
                            </div>
                            <button type="submit" className="submit-button">Submit</button>
                            <button className="close-button" onClick={close}>
                            {/* <Link to= '/Admin'>close </Link> */}
                            X
                        </button>
                        </form>
            
                    </Model>
                
                </div>
            )}
            
        </div>
    );
    // onClick={() => navigate('/Admin')}
}
