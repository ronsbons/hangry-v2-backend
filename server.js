const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const db = require('./models');

// require routes

const app = express();

app.use(bodyParser.urlencoded({ extended: false }) );
app.use(bodyParser.json());
app.use(cors());

// backup cors allowance
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// app.use routes
app.get('/', (request, response) => {
  response.send(`getting all recipes`);
  console.log(`getting all recipes`);
  // db.Recipes.find({})
})


// serve the 'public' folder in the frontend which has 'index.html', which index.js puts components into
// app.use(express.static('public'));


// test connection response to send to front end when it connects to backend
// app.get('/', (request, response) => response.send('hello, backend'));


app.listen(process.env.PORT || 3001, () =>
  console.log('Listening on port 3001 :)')
);