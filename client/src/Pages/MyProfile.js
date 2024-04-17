import React, { useEffect, useState } from 'react';
import Model from 'react-modal'
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

const MyProfile = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');
  const [orderedItems, setOrderedItems] = useState([]);
  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    phone_number: '',
    image_filename: ''
  });
  const [isReviewModalOpen, setReviewModalOpen] = useState(false); // State for controlling the review modal
  const [isManageModalOpen, setManageModalOpen] = useState(false); // State for controlling the manage modal

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
      console.log("User data: ", userData);
    } catch (error) {
      console.error('Error fetching user history:', error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  const handleOpenReviewModal = () => {
    setReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setReviewModalOpen(false);
  };

  const handleOpenManageModal = () => {
    setManageModalOpen(true);
  };

  const handleCloseManageModal = () => {
    setManageModalOpen(false);
  };

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
            <button onClick={handleOpenManageModal}>Manage</button>
            </h2>
            <p>Name: {userData.first_name} {userData.last_name}</p>
            <p>Email: {userEmail}</p>
            <p>Address: {userData.address}</p>
            <p>Phone Number: {userData.phone_number}</p>
            {/* Add more personal information as needed */}
          </div>
          
          {/* Order History Section */}
          <h2>Order History</h2>
          <div className="order-history">
            {orderedItems.length > 0 ? (
              orderedItems.map(item => (
                <div className="order" key={item.transaction_id}>
                  <img src={variableMap[item.image_filename]} alt={item.item_name} className="cart-item-image" />
                  <div>
                    <p>Transaction (ID: {item.transaction_id})</p>
                    <p>Shoe Name: {item.item_name}</p>
                    <p>Date: {new Date(item.date_time).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                    <p>Time: {new Date(item.date_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button className= "review-button" onClick={handleOpenReviewModal}>Write Review</button>
                </div>
              ))
            ) : (
              <p>No items ordered</p>
            )}
          </div>
        </div>
      </div>
      {/* Render the Manage Modal component */}
      <Model isOpen={isManageModalOpen} onRequestClose={handleCloseManageModal}>
        <div className="manage-modal-content">
          <div className="exit-button" onClick={handleCloseManageModal}>X</div>
          <h2>Edit Personal Information</h2>
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={userData.first_name} />

            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="lastName" name="lastName" value={userData.last_name} />

            <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={userEmail} />

            <label htmlFor="phone_number">Phone Number:</label>
            <input type="text" id="phone_number" name="phone_number" value={userData.phone_number} />

            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={userData.address} />

            <button type="submit">Save Changes</button>
          </form>
        </div>
      </Model>
    </div>
  );
};

export default MyProfile;