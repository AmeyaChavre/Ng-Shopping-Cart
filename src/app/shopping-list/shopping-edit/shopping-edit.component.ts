import { Component, OnInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput', { static : false }) nameInputRef: ElementRef;	
  @ViewChild('amountInput', { static : false }) amountInputRef: ElementRef;

  ingredientAdded = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){

  }

}
