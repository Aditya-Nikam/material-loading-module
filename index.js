const express = require('express');
const session = require('express-session');
const routes = require('./routes/routes');
// const model = require('./models/model');
const app = express();
const port = 3002;

// Use express.json() for parsing application/json
app.use(express.json());

// Use session middleware before routes
app.use(session({
  secret: 'wms',  // Change this to a strong secret in production
  resave: false,
  saveUninitialized: true,
}));

// Define routes after session middleware
app.use('', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
