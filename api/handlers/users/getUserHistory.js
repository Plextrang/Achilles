const { getRequestBody } = require("../../lib/parseBody");
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');
const { userInfo } = require("os");

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
        console.log('Connected to database');
    });

    const requestBody = await getRequestBody(req);
    const { email } = req.query;
    console.log('Received email:', email);

    const getUserSql = `SELECT user_id FROM \`USER\` WHERE email = ?`;
    db.query(getUserSql, [email], (err, userResult) => {
        if (err) {
            console.log('Error finding user');
            console.error('Error retrieving user:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }
    
        if (userResult.length === 0) {
            console.log('No user');
            res.statusCode = 401;
            res.end(JSON.stringify({ error: 'User not found' }));
            return;
        }
    
        console.log('User found:', userResult[0]);
        const getUserInfo = "SELECT first_name, last_name, address FROM USER WHERE user_id = ?";
        db.query(getUserInfo, [user_id], (err, userInformation) => {
            if (err) {
                console.error("Error getting user information");
                res.status(500).json({ error: 'Internal Server Error' });
                return;                
            }
        });

        console.log("This is the query result: ", userInformation);
        res.writeHead(200, { 'Content-Type' : 'application/json' });
        res.end(JSON.stringify(userInformation));

        // Add more queries here
    });
};