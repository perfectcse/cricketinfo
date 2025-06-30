const mysql = require('mysql2'); // ✅ Correct package

const connection = mysql.createConnection({
  host: 'localhost',           // ✅ Localhost
  user: 'root',                // ✅ MySQL root user
  password: 'Root@123',        // ✅ Your MySQL password
  database: 'cricket_blog'     // ✅ Make sure this DB exists
});

connection.connect(err => {
  if (err) throw err;          // ✅ Basic error check
  console.log('MySQL Connected');
});

module.exports = connection;   // ✅ Export for use in other files
