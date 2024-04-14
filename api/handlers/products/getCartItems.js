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

    db.connect(err => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database, in the function');
    });

    const urlParts = req.url.split('?');
    const queryString = urlParts.length > 1 ? urlParts[1] : '';
    const queryParams = querystring.parse(queryString);
    const email = queryParams.email;
    console.log('Querying for user_id', email);

    const getUserSql = `SELECT * FROM USER WHERE email = ?`;
    db.query(getUserSql, [email], (err, userResult) => {
        if (err) {
            console.log('Error finding user');
            console.error('Error retrieving user:', err);
            res.writeHead(500, { 'Content-Type' : 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }
        console.log(userResult);
        if (userResult.length === 0) {
            console.log('No user');
            res.statusCode = 401;
            res.end(JSON.stringify({ error: 'User not found' }));
            return;
        }

        const user_id = userResult[0].user_id;

        const getCartItemsSql = `SELECT item_name, image_filename, price, description FROM CART_ITEM WHERE user_id = ?`;
        db.query(getCartItemsSql, [user_id], (err, cartItems) => {
            if (err) {
                console.error('Error retrieving cart items:', err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }
            res.status(200).json(cartItems);
        });
        res.end(JSON.stringify({ message: 'ID was found and Cart items sent' }));
    });
};