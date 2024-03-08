var recipeTitle = "Potato and beef stew";
var recipeServings = 3;
var recipeIngredients = ["Onion", " Salt", " Black pepper", " Potato", " Beef"];
var recipeIng = {
  title: "Potato and Beef stew",
  servings: 3,
  ingredients: ["Onion", " Salt", " Black pepper", " Potato", " Beef"]
};

fill(26, 26, 26);
textSize(20);
text(recipeIng.title, 10, 23);
textSize(15);
text("Serves: " + recipeIng.servings, 10, 55);
text("Ingredients: " + recipeIng.ingredients, 10, 85);
