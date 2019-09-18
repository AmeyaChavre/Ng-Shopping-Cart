import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 	ingredients: Ingredient[] = [
 		new Ingredient("mustard",1),
 		new Ingredient("wheat flour",1),
 		new Ingredient("garlic",1)
 	];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){

  }

}
