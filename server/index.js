// CREATE A SERVER THAT LISTENS FOR NEW INCOMING MESSAGES 
// CREATE THE ROUTES PLANNED ON WHITEBOARD
// TRY TO INTEGRATE A CALL TO THE CONST {propertyName}

  // LISTEN FIRST THING TO START SERVER  

// somewhere inside node_modules/express
// class Express{}
// module.exports = Express;

// Import the express library
const express = require('express');

// Invoke the returned function to create the server object
const app = express();

// Import our database file to create the connection
const db = require('../db/controller.js')

// Declare the PORT your app will be listening to requests on
const PORT = 3000;

// Import body parser middleware to help out


// how to get from one holder to another
  // check in terminal cd ../client/dist
// Server static files index.html, style.css, bundle.js etct
// You can use as many of these are you like and they will run beforen your server
app.use(express.static('../client/dist'))

// Create a POST route
app.post('/groceries', (req, res) => {
  console.log(req);
  db.addGrocery((err, data) => {
    if (err) {
        res.status(500);
        res.end(err);
    } else {
        res.status(200);
        res.send(data);
    }
  })
})

// Create a GET route
// USE POSTMAN to double check everything is running correctly
// put this http://localhost:3000/groceries into POSTMAN
// '/groceries' is the conditional lock to see what user is asking for
app.get('/groceries', (req, res) => {
    db.getAll(res);
})



// Start the server listening on localhost:PORT
// Follow this with npm start to get server running
  // Check package.JSON for files to use like nodemon
app.listen(PORT, () => {
    console.log('Server is listening super hard on port: ', PORT);
});
