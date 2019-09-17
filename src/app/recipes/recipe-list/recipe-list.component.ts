import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [ 
  new Recipe('Hot Dog', 'This is a recipe for Hot Dog', 
  	'https://upload.wikimedia.org/wikipedia/commons/b/b1/Coneyhdog.jpg'), 
  new Recipe('Doughnut', 'This is a recipe for Doughnut', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Chocolate_Frosted_Donuts_%28Coffee_An%29%2C_Westport%2C_CT_06880_USA_-_Mar_2013.jpg/220px-Chocolate_Frosted_Donuts_%28Coffee_An%29%2C_Westport%2C_CT_06880_USA_-_Mar_2013.jpg'),
  new Recipe('Garlic Bread', 'This is a recipe for Garlic Bread', 
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Garlicbread.jpg/235px-Garlicbread.jpg'), 

  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){

  }

}
