import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import "./MyProfile.css";

export default function MyProfile() {
  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    address: ''
});
  useEffect(() => {
    const handleProfile = async () => {
      try {
        const userEmail = localStorage.getItem('userEmail');

        const response = await fetch(`https://cosc-3380-6au9.vercel.app/api/handlers/users/getUserHistory?email=${userEmail}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const userData = await response.json();
        setUserData(userData);
        console.log('User history:', userData);
        // Process user history data here
      } catch (error) {
        console.error('Error fetching user history:', error);
      }
    };

    handleProfile();
  }, []);

  return (
    <div className="profile-container">
      <header>
        <h1>My Profile</h1>
      </header>
      <div className="profile-content">
        <section className="profile-info">
          <h2>Personal Information</h2>
          <p>Name: {userData.first_name} {userData.last_name}</p>
          <p>Email: {userData.email}</p>
          <p>Address: {userData.address}</p>
          {/* Add more personal information as needed */}
        </section>
        <section className="profile-orders">
          <h2>My Orders</h2>
          <div className="order">
            <p>Order ID: 123456789</p>
            <p>Product: Nike Air Force 1</p>
            <p>Price: $100</p>
            {/* Add more order details as needed */}
          </div>
          {/* Add more orders as needed */}
        </section>
      </div>
    </div>
  );
}
