const { setCorsHeaders } = require("../../lib/cors");
const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');

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

module.exports = async (req, res) => {
    setCorsHeaders(req, res);
    body = ""
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    
    req.on('end', () => {
        console.log('Received data:', body);
        const userData = JSON.parse(body);
        console.log('Parsed user data:', userData);
        const { email, password, first_name, middle_initial, last_name, phone_number, date_of_birth, address, apt_num, city, state, zip_code } = userData;
        const type = 'Customer'

        const insertCredentialsSql = `INSERT INTO LOGIN (email, password) VALUES (?, ?)`;
        db.query(insertCredentialsSql, [email, password], (err, loginResult) => {
            if (err) {
                console.error(err);
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            const insertUserSql = `INSERT INTO USER (email, first_name, middle_initial, last_name, phone_number, date_of_birth, address, apt_num, city, state, zip_code, user_type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
            db.query(insertUserSql, [email, first_name, middle_initial, last_name, phone_number, date_of_birth, address, apt_num, city, state, zip_code, type], (err, userResult) => {
                if (err) {
                    console.error(err);
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    return;
                }
                res.end(JSON.stringify({ message: 'User added successfully', redirectUrl: '/Login' }));
            });
        });
    });
}