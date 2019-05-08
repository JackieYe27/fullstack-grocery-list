// MAKES CONNECTION TO DATABASE
// Imports the mysql library for use to connect to the mysql db
const mysql = require('mysql');

// Creating a connection configuration objec to connect to the database for this app using our username and password
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jackie',
    database: 'groceries_list'
});



// connect to the database using the aboive configuration settings
module.exports = connection;