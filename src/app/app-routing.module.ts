import { NgModule } from '@angular/core';
import { Routes } from '@angular/routes';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
{ path: 'recipes', component: RecipesComponent},
]; 

@NgModule({

})

export class AppRoutingModule{

}