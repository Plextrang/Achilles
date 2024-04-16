import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./MyProfile.css";

export default function MyProfile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    address: '',
    email: '' 
  });

  const handleProfile = async () => {
    try {
      const userEmail = localStorage.getItem('userEmail');
      if (!userEmail) {
        console.error('User email not found in localStorage');
        return;
      }

      const response = await fetch(`https://cosc-3380-6au9.vercel.app/api/handlers/users/getUserHistory?email=${userEmail}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const userID = await response.json();
      setUserData(userID);
      console.log('User data:', userData);
      // Process user history data here
    } catch (error) {
      console.error('Error fetching user history:', error);
    }
  };

  useEffect(() => {
    handleProfile();
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

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
          {/* Render user orders here */}
        </section>
      </div>
    </div>
  );
}
