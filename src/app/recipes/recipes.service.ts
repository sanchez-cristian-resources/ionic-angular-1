import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
      {
        id: 'r1', 
        title: 'Potatoes', 
        imageUrl:  'https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg', 
        ingredients: ['Potato']
      }, 
      {
        id: 'r2', 
        title: 'Salada', 
        imageUrl:  'https://images.immediate.co.uk/production/volatile/sites/30/2014/05/Epic-summer-salad-hub-2646e6e.jpg', 
        ingredients: ['tomato', 'seboplla']
      }
  ]

  constructor() { }

  getAllRecipes() {
    return [...this.recipes]
  }

  getRecipe(id: string) {
    return {...this.recipes.find(recipe => recipe.id === id)}
  }

  deleteRecipe(id: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== id)
  }
}
