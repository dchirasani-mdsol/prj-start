import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  get recipes(): Recipe[] {
    return this._recipes;
  }

  set recipes(value: Recipe[]) {
    this._recipes = value;
  }

  private _recipes: Recipe[] = [
  new Recipe('FishFry', 'Japanese Fish Item', 'https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg'),
    new Recipe('Steak', 'Japanese Fish Item', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
