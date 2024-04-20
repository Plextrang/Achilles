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
        console.log('Connected to database, in the function');
    });

    const notifData = await getRequestBody(req, res)
    console.log("this is the notif data \n", notifData);

    const notif_id = notifData.notif_id;
    const deleteQuery = `DELETE FROM notification WHERE notification_id = ?`;

    db.query(deleteQuery, [notif_id], (err, result) => {
        if (err) {
            console.error('Error deleting notification:', err);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Internal Server Error' }));
            return;
        }
        if(result.length === 0)
        {
            console.error('Error deleting notification:', err);
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'No Notif found' }));
            return;
        }

        console.log('Notification deleted successfully');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Notification deleted successfully' }));
    });
};
