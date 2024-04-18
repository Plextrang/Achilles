// Import required modules
const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create MySQL connection
const db = mysql.createConnection({
  host: 'YOUR_DATABASE_HOST',
  user: 'YOUR_DATABASE_USER',
  password: 'YOUR_DATABASE_PASSWORD',
  database: 'YOUR_DATABASE_NAME'
});

// Route to handle PUT request for updating user information
router.put('/updateUser', (req, res) => {
  const { first_name, last_name, user_id, phone_number, address } = req.body;

  // Update user information in the database
  const updateUserQuery = `
    UPDATE USER
    SET first_name = ?,
        last_name = ?,
        phone_number = ?,
        address = ?
        email = ?
    WHERE user_id = ?;
  `;

  db.query(updateUserQuery, [first_name, last_name, phone_number, address, user_id], (err, result) => {
    if (err) {
      console.error('Error updating user:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    console.log('User updated successfully');
    res.status(200).json({ message: 'User updated successfully' });
  });
});

module.exports = router;
