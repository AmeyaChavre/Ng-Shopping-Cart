import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 	ingredients: Ingredient[];

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient){
  	this.ingredients.push(ingredient);
  }

}
