const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: String,
});

// .model('modelName', schema)
const Ingredients = mongoose.model('Ingredients', IngredientSchema);
module.exports = Ingredients;