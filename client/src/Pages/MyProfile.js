import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import white_converse from '../images/white_converse.jpg'; 
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazella_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import "./MyProfile.css";

const variableMap = {
  'white_converse': white_converse,
  'nike_air_force_1': nike_air_force_1,
  'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
  'doc_martens_jorge': doc_martens_jorge,
  'hk_crocs_clogs': hk_crocs_clogs,
  'naruto_crocs_clog': naruto_crocs_clog
};

export default function MyProfile() {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');
  const [orderedItems, setOrderedItems] = useState([]);

  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    image_filename: ''
  });
  
  const handleProfile = async () => {
    try {
      if (!userEmail) {
        console.error('User email not found in localStorage');
        return;
      }

      const response = await fetch(`https://cosc-3380-6au9.vercel.app/api/handlers/users/getUserHistory?email=${userEmail}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userData = await response.json();
      setUserData(userData);
      setOrderedItems(userData.transactions);
      // No need to log 'userData' here
    } catch (error) {
      console.error('Error fetching user history:', error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  useEffect(() => {
    console.log('User data:', userData); 
    // Log 'userData' when it changes
  }, [userData]); // Add 'userData' as a dependency

  return (
    <div>
      <div className="profile-container">
        <header>
          <h1>My Profile</h1>
        </header>
        <div className="profile-content">
          {/* Personal Information Section */}
          <div className="personal-info">
            <h2>Personal Information
            <button onClick={() => {}}>Manage</button>
            </h2>
            <p>Name: {userData.first_name} {userData.last_name}</p>
            <p>Email: {userEmail}</p>
            <p>Address: {userData.address}</p>
            {/* Add more personal information as needed */}
          </div>
          
          {/* Order History Section */}
          <div className="order-history">
            <h2>Order History</h2>
            {orderedItems.length > 0 ? (
              orderedItems.map(item => (
                <div className="order" key={item.transaction_id}>
                  <img src={variableMap[item.image_filename]} alt={item.item_name} className="cart-item-image" />
                  <p>Transaction (ID: {item.transaction_id})</p>
                  <p>Shoe Name: {item.item_name}</p>
                  <p>Date: {new Date(item.date_time).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                  <p>Price: ${item.price}</p>
                  <button onClick={() => {}}>Write Review</button>
                </div>
              ))
            ) : (
              <p>No items ordered</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
