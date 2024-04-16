const { getRequestBody } = require("../../lib/parseBody")
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');

module.exports = async (req, res) => {
    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }
    const db = mysql.createConnection({
        host: "cosc3380.c5iqeciq8qjg.us-east-2.rds.amazonaws.com",
        user: "admin",
        password: "TtZDqS57PM8KxHaOLRcs",
        database: "cosc3380"
    })
    db.connect(err => {
        if (err) {
          console.error('Error connecting to database:', err);
          return;
        }
        console.log('Connected to database');
    });
    orderData = await getRequestBody(req, res);
    console.log('Parsed order data:', orderData);
    
    const {totalPrice, cartItems, datetime, email, num_items} = orderData;

    const getUserSql = `SELECT user_id FROM USER WHERE email = ?`;
    db.query(getUserSql, [email], (err, userResult) => {
        if (err) {
            console.log('Error finding user');
            console.error('Error retrieving user:', err);
            res.writeHead(500, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        if (userResult.length === 0) {
            console.log('No user');
            res.statusCode = 401;
            res.end(JSON.stringify({ error: 'User not found' }));
            return;
        }

        const user_id = userResult[0].user_id;
        const totalCost = totalPrice; // alter this if totalPrice has discounts

        const transactionSql = `INSERT INTO TRANSACTION (datetime, num_of_items, price_of_cart, total_cost, user_id) VALUES (?, ?, ?, ?, ?)`;
        db.query(transactionSql, [datetime, num_items, totalPrice, totalCost, user_id], (err, result) => {
            if (err) {
                console.error('Error inserting transaction data:', err);
                res.writeHead(500, { 'Content-Type' : 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            const transactionId = result.insertId; // Retrieve the transaction_id of the inserted transaction

            // Loop through cartItems to insert each item into TRANSACTION_ITEM table
            cartItems.forEach(cartItem => {
                const { product_id, quantity } = cartItem;
                const transactionItemSql = `INSERT INTO TRANSACTION_ITEM (transaction_id, user_id, product_id, quantity) VALUES (?, ?, ?, ?)`;
                db.query(transactionItemSql, [transactionId, user_id, product_id, quantity], (err, result) => {
                    if (err) {
                        console.error('Error inserting transaction item:', err);
                        res.writeHead(500, { 'Content-Type' : 'application/json' });
                        res.end(JSON.stringify({ error: 'Internal Server Error' }));
                        return;
                    }
                });
            });

            res.end(JSON.stringify({ message: "Transaction was made successfully" }));
        });
    });
}