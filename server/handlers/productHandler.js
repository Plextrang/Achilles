const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');

// Function to handle GET request for fetching product data
// req = request
// res = response
function getProducts(req, res, db) {
    // query string
    const sql = 'SELECT * FROM products';
  
    // executes the SQL query using the 'db' connection
    // sql -> sql that specifies the operation you want to perform on the database
    // err -> any errors that the database driver gets will be passed to 'err'
    // results -> results of the query will be held in results
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching products:', err);
        // Logs error to the console (500)
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        // 200 means data is sucessfully being sent back
        // json(results) serializes the retrieved data (results) into JSON format before sending it back to the client
        res.status(200).json(results);
      }
    });
  }

module.exports = {getProducts}