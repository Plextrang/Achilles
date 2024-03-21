const http = require('http');
const mysql = require('mysql');
const cors = require('cors');
const querystring = require('querystring');

function newUser(req){
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString(); // convert Buffer to string
    });

    req.on('end', () => {
        const userData = querystring.parse(body);
        const { email, password, firstName, lastName, phoneNumber, dateOfBirth, address } = userData;

        // Insert email and password into the 'credentials' table
        const insertCredentialsSql = `INSERT INTO credentials (email, password) VALUES ('${email}', '${password}')`;
        db.query(insertCredentialsSql, (err, credentialsResult) => {
            if (err) {
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            // Insert the rest of the user details into the 'users' table
            const insertUserSql = `INSERT INTO users (email, first_name, last_name, phone_number, date_of_birth, address) VALUES (${email}, '${firstName}', '${lastName}', '${phoneNumber}', '${dateOfBirth}', '${address}')`;
            db.query(insertUserSql, (err, userResult) => {
                if (err) {
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