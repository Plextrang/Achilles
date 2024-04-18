import React, { useEffect, useState } from 'react';
import Model from 'react-modal'
import { useNavigate } from 'react-router-dom';
import white_converse from '../images/white_converse.jpg'; 
import nike_air_force_1 from '../images/nike_air_force_1.jpg';
import adidas_gazelle_blue_gold from '../images/adidas_gazelle_blue_gold.jpg';
import doc_martens_jorge from '../images/doc_martens_jorge.jpg';
import hk_crocs_clogs from '../images/hk_crocs_clogs.jpg';
import naruto_crocs_clog from '../images/naruto_crocs_clog.jpg';
import "./MyProfile.css";
Model.setAppElement('#root');


const variableMap = {
  'white_converse': white_converse,
  'nike_air_force_1': nike_air_force_1,
  'adidas_gazelle_blue_gold': adidas_gazelle_blue_gold,
  'doc_martens_jorge': doc_martens_jorge,
  'hk_crocs_clogs': hk_crocs_clogs,
  'naruto_crocs_clog': naruto_crocs_clog
};

const initialFormData = {  
  user_id: '',
  first_name: '',
  last_name: '',
  address: '',
  email: localStorage.getItem('userEmail'),
  phone_number: ''
};

const MyProfile = () => {
  const navigate = useNavigate();
  const userEmail = localStorage.getItem('userEmail');
  const [orderedItems, setOrderedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null); // State to hold the selected item for review
  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    email: '',
    phone_number: '',
    image_filename: ''
  });
  const [isReviewModalOpen, setReviewModalOpen] = useState(false);
  const [isManageModalOpen, setManageModalOpen] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [successMessage, setSuccessMessage] = useState('');

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
  }, []);

  const handleOpenReviewModal = (item) => { // Pass the selected item when opening the review modal
    setSelectedItem(item);
    setReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setSelectedItem(null); // Reset the selected item when closing the modal
    setReviewModalOpen(false);
  };

  const handleOpenManageModal = () => {
    setFormData(userData);
    setManageModalOpen(true);
  };

  const handleCloseManageModal = () => {
    handleProfile();
    setManageModalOpen(false);
    setFormData(initialFormData);
    // Reset the success message when the modal is closed
    setSuccessMessage('');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Your logic to update user information and submit it to the server goes here
      // For now, let's assume the data is successfully updated
      // Simulate a delay to show the success message
      const response = await fetch('https://cosc-3380-6au9.vercel.app/api/handlers/users/updateUser', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          first_name: formData.first_name, 
          last_name: formData.last_name,
          phone_number: formData.phone_number,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zip_code: formData.zip_code,
          //email: formData.email,
          user_id: userData.user_id 
        })
      });
      
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to update user information');
      }
  
      // Simulate a delay to show the success message
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // Set the success message
      setSuccessMessage('User information updated successfully!');
      // Close the modal after successfully saving changes
      handleCloseManageModal();
    } catch (error) {
      console.error('Error saving changes:', error);
      // Optionally, you can show an error message to the user
    }
  };

  const handleReviewSubmit = () => {
    handleCloseReviewModal();
  }
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
            <p>Address: {userData.address}, {userData.city}, {userData.state} {userData.zip_code}</p>
            <p>Phone Number: {userData.phone_number}</p>
          </div>
          
          {/* Order History Section */}
          <h2>Order History</h2>
          <div className="order-history">
            {orderedItems.length > 0 ? (
              orderedItems.map(item => (
                <div className="order">
                  <img src={variableMap[item.image_filename]} alt={item.item_name} className="cart-item-image" />
                  <div>
                    <p>Transaction (ID: {item.transaction_id})</p>
                    <p>Shoe Name: {item.item_name}</p>
                    <p>Date: {new Date(item.date_time).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}</p>
                    <p>Time: {new Date(item.date_time).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', hour12: true})}</p>
                    <p>Price: ${item.price}</p>
                  </div>
                  <button className= "review-button" onClick={() => handleOpenReviewModal(item)}>Write Review</button>
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
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="first_name" name="first_name" value={formData.first_name || ''} onChange={handleChange} />
  
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} />
  
            {/* <label htmlFor="email">Email:</label>
            <input type="text" id="email" name="email" value={userEmail} readOnly /> */}
  
            <label htmlFor="phone_number">Phone Number:</label>
            <input type="text" id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} />
  
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />

            <label htmlFor="city">City:</label>
            <input type="text" id="city" name="City" value={formData.city} onChange={handleChange} />

            <label htmlFor="state">State:</label>
            <input type="text" id="state" name="State" value={formData.state} onChange={handleChange} />

            <label htmlFor="zip">Zip Code:</label>
            <input type="text" id="zip" name="Zip Code" value={formData.zip_code} onChange={handleChange} />
  
            <button type="submit">Save Changes</button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </Model>
      <Model isOpen={isReviewModalOpen} onRequestClose={handleCloseReviewModal}>
  <div className='review-modal'>
    <div className='exit-review-button' onClick={handleCloseReviewModal}>X</div>
    <h2>Write Review</h2>
    <div className='product-description'>
      {/* Display information about the selected item */}
      {selectedItem && (
        <div className="order">
          <img src={variableMap[selectedItem.image_filename]} alt={selectedItem.item_name} className="cart-item-image" />
          <div>
            <p>Transaction (ID: {selectedItem.transaction_id})</p>
            <p>Shoe Name: {selectedItem.item_name}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      )}
    </div>
    <form onSubmit={handleReviewSubmit}>
      <label htmlFor='review'>Review:</label>
      <textarea id='review' name='review' required></textarea>
      <button type='submit'>Submit Review</button>
    </form>
    {successMessage && <p className="success-message">{successMessage}</p>}
  </div>
</Model>
    </div>
  );
};

export default MyProfile;