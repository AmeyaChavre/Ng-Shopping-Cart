import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
 	ingredients: Ingredient[] = [
 		new Ingredient("mustard",1),
 		new Ingredient("wheat flour",1),
 		new Ingredient("garlic",1)
 	];
}