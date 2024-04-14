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

    const getCartItemsSql = `SELECT item_name, image_filename, price, description FROM cart_items`;
    db.query(getCartItemsSql, (err, cartItems) => {
        if (err) {
            console.error('Error retrieving cart items:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(cartItems);
    });
};