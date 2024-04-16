import React, {useEffect, useState,} from 'react';
import { useNavigate } from 'react-router-dom';
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
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const email = localStorage.getItem('userEmail');

    const navigate = useNavigate();

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
    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {total += item.price * item.quantity;});
        setTotalPrice(total);
    }, [cartItems]);

    const handleOrder = () => {
        console.log("Confirming Order");
    
        // Prepare the request body
        const datetime = new Date();
        const requestBody = {
            totalPrice: totalPrice,
            cartItems: cartItems,
            datetime: datetime,
            email: email,
            num_items: cartItems.length
        };
    
        fetch('https://cosc-3380-6au9.vercel.app/api/handlers/order/newOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Order confirmed:', data);
            navigate('/MyProfile');
        })
        .catch(error => {
            console.error('Error confirming order:', error);
        });
    };
    

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout</h1>
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
                            <p>Quantity: {item.quantity}</p>
                            <span className="cart-item-price">${item.price}</span>
                        </div>
                    </div>
                ))}
            </div>
            
            )}
            <div className="checkout-summary">
                <h2>Order Summary</h2>
                <div className="checkout-subtotal">
                    <span>Discount:</span>
                    <span>Shipping:</span>
                    <div className="total-price">Total: ${totalPrice.toFixed(2)}</div>
                </div>
                <button className="confirm-order-button" onClick={handleOrder}>Confirm Order</button>
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
