const db = require('../models');

module.exports = {
  add: (req, res) => {
    db.Ingredients.create({
      name: req.body.name,
    }, (error, newIngredient) => {
      if (error) {
        console.log(`create ingredient error ${error}`);
      };
      console.log(`new ingredient: ${newIngredient}`);
      res.json(newIngredient);
    });
  },
};