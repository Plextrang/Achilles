// TODO: Figure out token baloney :P
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
    let body = "";

    console.log("In function")
    req.on('data', chunk => {
        body += chunk.toString(); 
    });

    req.on('end', () => {
        console.log('Received login data:', body);
        const loginData = JSON.parse(body);
        console.log('Parsed login data:', loginData);
        const { email, password } = loginData;

        // Query the database 
        const sql = "SELECT * FROM LOGIN WHERE email = ? AND password = ?";
        db.query(sql, [email, password], (err, result) => {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end(JSON.stringify({ error: 'Internal Server Error' }));
                return;
            }

            if (result.length === 0) {
                // No user found 
                res.statusCode = 401;
                res.end(JSON.stringify({ error: 'Invalid email or password' }));
                return;
            }

            // User authenticated 
            const updateSql = "UPDATE LOGIN SET is_active = 1 WHERE email = ?";
            db.query(updateSql, [email], (err, updateResult) => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.end(JSON.stringify({ error: 'Internal Server Error' }));
                    return;
                }

                // Set is_active to 1
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'Login successful', redirectUrl: '/Products' }));
            });
        });
    });
}