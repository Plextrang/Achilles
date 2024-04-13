const { setCorsHeaders } = require("../../lib/cors");
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
    });

    console.log('Attempting to get request body');
    const productData = await getRequestBody(req, res);
    console.log('Parsed product data:', productData);

    db.connect(err => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database, in the function');
    });

    // console.log('Attempting to get request body');
    // const productData = await getRequestBody(req, res);
    // console.log('Parsed product data:', productData);

    const { userEmail, ...productInfo } = productData;

    const getUserSql = `SELECT user_id FROM USER WHERE email = ?`;
    db.query(getUserSql, [userEmail], (err, userResult) => {
        if (err) {
            console.error('Error retrieving user:', err);
            res.writeHead(404, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }

        if (userResult.length === 0) {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'User not found' }));
            return;
        }

        const user_id = userResult[0].user_id;

        // Now that we have the user_id, add the product to the cart
        const insertCartItemSql = `INSERT INTO CART_ITEM (user_id, quantity, product_id) VALUES (?, ?, ?)`;
        db.query(insertCartItemSql, [user_id, productInfo.quantity, productInfo.product_id], (err, result) => {
            if (err) {
                console.error(err);
                res.writeHead(404, { 'Content-Type' : 'application/json' });
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            res.writeHead(200, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({ message: 'Product added to cart successfully' }));
        });
    });
};