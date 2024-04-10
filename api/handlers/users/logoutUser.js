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
    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const loginData = JSON.parse(body);
        console.log('Parsed logout data:', loginData);
        const { email } = loginData;

        const updateSql = `UPDATE LOGIN SET is_active = 0 WHERE email = ?`;
        db.query(updateSql, [email], (err, result) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Logout successful' }));
        });
    });
}