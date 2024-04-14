// import React from 'react';
// import { Link } from 'react-router-dom';
// import white_converse from '../images/white_converse.jpg';
// import './Cart.css';

// export default function Cart() {
//     return (
//         <div className="cart-container">
//             <h1 className="cart-title">Shopping Cart</h1>
//             <div className="cart-items">
//                 <div className="cart-item">
//                     <img src={white_converse} alt="White Converse" className="cart-item-image" />
//                     <div className="cart-item-details">
//                         <h3 className="cart-item-name">Converse</h3>
//                         <p>Put Description Here</p>
//                         <span className="cart-item-price">$80</span>
//                     </div>
//                     <button className="cart-item-remove">Remove</button>
//                 </div>

//                 <div className="cart-item">
//                     <img src={white_converse} alt="White Converse" className="cart-item-image" />
//                     <div className="cart-item-details">
//                         <h3 className="cart-item-name">Converse</h3>
//                         <p>Put Description Here</p>
//                         <span className="cart-item-price">$80</span>
//                     </div>
//                     <button className="cart-item-remove">Remove</button>
//                 </div>
//             </div>
//             <div className="cart-summary">
//                 <h2>Cart Summary</h2>
//                 <div className="cart-subtotal">
//                     <span>Subtotal:</span>
//                     <span>-add logic to get total-</span>
//                 </div>
//                 <Link to="/Checkout">
//                     <button className="checkout-button">Checkout</button>
//                 </Link>
//             </div>
//             <div className="payment-section">
//                 <h2>Payment Method</h2>
//                 <p>Credit Card</p>
//                 <h2>Shipping Address</h2>
//                 <p>123 Shipping Street, City, Country</p>
//             </div>
//         </div>
//     );
// }

import React, { useEffect, useState } from 'react';
import white_converse from '../images/white_converse.jpg';
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazella_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import './Cart.css';

const variableMap = {
    'white_converse': white_converse,
    'nike_air_force_1': nike_air_force_1,
    'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
    'doc_martens_jorge': doc_martens_jorge,
    'hk_crocs_clogs': hk_crocs_clogs,
    'naruto_crocs_clog': naruto_crocs_clog
  };

export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     async function fetchCartItems() {
    //         try {
    //             console.log("Fetching items");
    //             const userEmail = localStorage.getItem('userEmail');
    //             const url = `https://cosc-3380-6au9.vercel.app/api/handlers/products/getCartItems?email=${encodeURIComponent(userEmail)}`;
    //             const response = await fetch(url, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 }
    //             });
    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch cart items');
    //             }
    //             const data = await response.json();
    //             setCartItems(data);
    //         } catch (error) {
    //             console.error('Error fetching cart items:', error);
    //         }
    //     }
    //     fetchCartItems();
    // }, []);

    useEffect(() => {
        console.log("Fetching items");
        const userEmail = localStorage.getItem('userEmail');
        fetch(`https://cosc-3380-6au9.vercel.app/api/handlers/products/getCartItems?email=${encodeURIComponent(userEmail)}`)
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log("Frontend got: ", data);
            setCartItems(data);
            console.log("cartItems is now: ", cartItems);
          })
          .catch(error => {
            console.error('Error fetching cart items:', error);
          });
      }, []);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Shopping Cart - test13</h1>
            {cartItems.length === 0 ? (
                <div className="cart-items"> 
                    <p>Cart is empty.</p>
                </div>
            ) : (
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.product_id}>
                        <img src={variableMap[item.image_filename]} alt={item.item_name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-name">{item.item_name}</h3>
                            <p>{item.description}</p>
                            <span className="cart-item-price">${item.price}</span>
                        </div>
                        <button className="cart-item-remove">Remove</button>
                    </div>
                ))}
            </div>
            )}
        </div>
    );
}