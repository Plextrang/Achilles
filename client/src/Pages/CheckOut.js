import React, {useEffect, useState,} from 'react';
import white_converse from '../images/white_converse.jpg'; 
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazella_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import './CheckOut.css';

// Pull all shoes from cart item where the user_id matches
// display the shoes one at a time
// add the totals of all shoes by adding the price*quantity for each product.
const variableMap = {
    'white_converse': white_converse,
    'nike_air_force_1': nike_air_force_1,
    'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
    'doc_martens_jorge': doc_martens_jorge,
    'hk_crocs_clogs': hk_crocs_clogs,
    'naruto_crocs_clog': naruto_crocs_clog
  };


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
