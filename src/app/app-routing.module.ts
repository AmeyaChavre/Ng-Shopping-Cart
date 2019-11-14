import { NgModule } from '@angular/core';
import { Routes } from '@angular/routes';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from '';

const appRoutes: Routes = [
{ path: 'recipes', component: RecipesComponent },
{ path: 'shopping-list', component: ShoppingListComponent }
]; 

@NgModule({

})

export class AppRoutingModule{

}