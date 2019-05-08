// import
const connection = require('./index.js');


// Create data base function that will query
const getAll = function(res) {
  connection.connect();
  // execute our query to the db
  connection.query('SELECT * FROM groceries', (err, data) => {
      // send back status 500 and error if there was an error
    if (err) {
      res.status(500);
      res.send(err);
    } else {
      // send back the data
      res.status(200);
      res.send(data);
    }
  })
  connection.end();
}

// Create function to INSERT something into the table
const addGrocery = function(cb) {
  connection.connect();
  connection.query(`INSERT INTO groceries (name, quantity) VALUES ("${name}", "${quantity}"`)
}


// Export
module.exports = {
  getAll: getAll,
  addGrocery: addGrocery
}