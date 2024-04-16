import React from 'react';
import "./MyProfile.css";

function MyProfile() {
  console.log("MyProfile component is rendered!"); // Add this line for console logging

  return (
    <div className="profile-container">
      <header>
        <h1>My Profile</h1>
      </header>
      <div className="profile-content">
        <section className="profile-info">
          <h2>Personal Information</h2>
          <p>Name: John Doe</p>
          <p>Email: johndoe@example.com</p>
          <p>Address: 123 Main Street, City, Country</p>
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

export default MyProfile;
