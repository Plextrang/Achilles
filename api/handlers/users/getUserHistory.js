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
        host: "cosc3380-team7.mysql.database.azure.com",
        user: "achilles_admin",
        password: "iFTq^U^!efry3L",
        database: "cosc3380"
    });

    db.connect(err => {
        if (err) {
            console.error('Error connecting to database:', err);
            return;
        }
        console.log('Connected to database');
    });

    if (req.method === "PUT") {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const userData = JSON.parse(body);
            const { first_name, last_name, address, phone_number, email } = userData;
            const updateUserSql = `
                UPDATE \`USER\`
                SET first_name = ?,
                    last_name = ?,
                    address = ?,
                    phone_number = ?
                WHERE email = ?;
            `;
            db.query(updateUserSql, [first_name, last_name, address, phone_number, email], (err, result) => {
                if (err) {
                    console.error('Error updating user:', err);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    return;
                }
                console.log('User updated successfully');
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'User updated successfully' }));
            });
        });
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Method Not Allowed' }));
    }
};
