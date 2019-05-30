const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: String,
  ingredients: {
    type: Schema.Types.ObjectId,
    ref: 'Ingredients',
  },
  instructions: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

// .model('modelName', schema)
const Recipes = mongoose.model('Recipes', RecipeSchema);
module.exports = Recipes;