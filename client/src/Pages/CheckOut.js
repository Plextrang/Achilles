import React from 'react';
import white_converse from '../images/white_converse.jpg'; // Import image
import './CheckOut.css';

export default function CheckOut() {
    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
            <div className="checkout-items">
                <div className="cart-item">
                    <img src={white_converse} alt="White Converse" className="cart-item-image" />
                    <div className="cart-item-details">
                        <h3 className="cart-item-name">Converse</h3>
                        <p>Put Description Here</p>
                        <span className="cart-item-price">$80</span>
                    </div>
                </div>

                <div className="cart-item">
                    <img src={white_converse} alt="White Converse" className="cart-item-image" />
                    <div className="cart-item-details">
                        <h3 className="cart-item-name">Converse</h3>
                        <p>Put Description Here</p>
                        <span className="cart-item-price">$80</span>
                    </div>
                </div>
            </div>
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                <div className="checkout-subtotal">
                    <span>Subtotal:</span>
                    <span>-add logic to get total-</span>
                </div>
                <button className="confirm-order-button">Confirm Order</button>
            </div>
            <div className="payment-section">
                <h2>Payment Method</h2>
                <p>Credit Card</p>
                <h2>Shipping Address</h2>
                <p>123 Shipping Street, City, Country</p>
            </div>
        </div>
    );
}
