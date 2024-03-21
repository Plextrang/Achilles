const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');

function newUser(req, db, res){
    body = ""
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });
    
    req.on('end', () => {
        console.log('Received data:', body);
        const userData = JSON.parse(body);
        console.log('Parsed user data:', userData);
        const { email, password, firstName, lastName, phoneNumber, dateOfBirth } = userData;

        const insertCredentialsSql = `INSERT INTO LOGIN (email, password) VALUES (?, ?)`;
        db.query(insertCredentialsSql, [email, password], (err, credentialsResult) => {
            if (err) {
                console.error(err);
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            // Ensure phoneNumber is treated as a string
            const insertUserSql = `INSERT INTO USER (email, first_name, last_name, phone_number, date_of_birth) VALUES (?, ?, ?, ?, ?)`;
            db.query(insertUserSql, [email, firstName, lastName, phoneNumber.toString(), dateOfBirth], (err, userResult) => {
                if (err) {
                    console.error(err);
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    return;
                }
                res.end(JSON.stringify({ message: 'User added successfully' }));
            });
        });
    });
}

module.exports = {
    newUser,}