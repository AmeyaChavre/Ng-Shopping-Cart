import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [ 
  new Recipe('Hot Dog', 
  	'This is a recipe for Hot Dog', 
  	'https://upload.wikimedia.org/wikipedia/commons/b/b1/Coneyhdog.jpg',
  	[
  		new Ingredient('Bread',2),
  		new Ingredient('Sausage',1),
  		new Ingredient('Mustard',1)
  	]
  	), 
  new Recipe('Doughnut', 
  	'This is a recipe for Doughnut', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chocolate_Frosted_Donuts_%28Coffee_An%29%2C_Westport%2C_CT_06880_USA_-_Mar_2013.jpg/220px-Chocolate_Frosted_Donuts_%28Coffee_An%29%2C_Westport%2C_CT_06880_USA_-_Mar_2013.jpg',
    [
  		new Ingredient('Flour',2),
  		new Ingredient('Oil',1),
  		new Ingredient('Sugar',1),
  		new Ingredient('Chocolate',1),
  		new Ingredient('Vanilla',1)
    ]),
  new Recipe('Garlic Bread', 
  	'This is a recipe for Garlic Bread', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/235px-Garlicbread.jpg',
    [
  		new Ingredient('Bread',2),
  		new Ingredient('Garlic',1),
  		new Ingredient('American Yellow Cheese',1)
    ]), 

  ];

getRecipes() {
	return this.recipes.slice();
}

addIngredientsToShoppingList(){
  
}

}