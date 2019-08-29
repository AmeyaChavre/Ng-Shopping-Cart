import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [ 
  new Recipe('Test Recipe', 'This is a test recipe', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwjX5rXQiajkAhUPdysKHZy3CYcQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.myrecipes.com%2F&psig=AOvVaw2ZdzpXvyVidFBOPdmnxiEx&ust=1567167826861840') 
  ];

  constructor() { }

  ngOnInit() {
  }

}
