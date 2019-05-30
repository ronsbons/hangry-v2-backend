const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://ronsbons:40zpSlcvuNJbwK0p@ronni-post-wdi-ex4lk.azure.mongodb.net/test?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  // [] need to change db and collection names
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://ronsbons:40zpSlcvuNJbwK0p@ronni-post-wdi-ex4lk.azure.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });


module.exports.Ingredients = require('./ingredientModel.js');
module.exports.Recipes = require('./recipeModel.js');
module.exports.User = require('./userModel.js');