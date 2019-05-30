const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// [] IS THIS THE RIGHT WAY TO IMPORT THE RECIPE SCHEMA, NOT THE RECIPE MODEL?
// [] BECAUSE I STILL WANT RECIPES TO BE ITS OWN MODEL SO THAT I CAN SEARCH ALL RECIPES REGARDLESS OF AUTHOR
const Recipes = require('./recipeModel');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    // (?=.{4,20}$) length between 4-20
    // (?![.]) no or . at the beginning of username
    // (?!.*[_.]{2}) no __ or _. or .. inside username
    // [a-zA-Z0-9._] allowed characters a-z, 0-9, . and _
    // (?<![.]) no . at the end of username
    match: /^(?=.{4,20}$)(?![.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![.])$/
  },
  created_recipes: [Recipes.schema],
  saved_recipes: [{
    type: Schema.Types.ObjectId,
    ref: 'Recipes'
  }],
});

// backup method to delete password from the database result
UserSchema.set('toJSON', {
  // document, return, option
  transform: function(doc, ret, opt) {
    delete ret['password'];
    return ret;
  },
});

// .model('modelName', schema)
const Users = mongoose.model('Users', UserSchema);
module.exports = Users;