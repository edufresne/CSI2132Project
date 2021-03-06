import { Component, OnInit } from '@angular/core';
import {FoodService} from "../../services/food.service";
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-ingredients',
  templateUrl: './get-ingredients.component.html',
  styleUrls: ['./get-ingredients.component.css']
})
export class GetIngredientsComponent implements OnInit {
  public ingredients : any = [];
  public searchString : string = '';
  public itemsPerPage : number = 10;
  public currentPage : number = 1;
  constructor(public foodService : FoodService, public parentRouter : Router, public activatedRoute : ActivatedRoute) {
    let successHandler = (data) => {
      this.ingredients = data;
      for (let ingredient of this.ingredients){
        ingredient.selected = false;
        ingredient.count = 0;
      }
    };
    let errorHandler = (err) => {
      console.error(err);
    };
    this.foodService.listFood().subscribe(successHandler, errorHandler);
  }
  public selectIngredient(ingredient: any){
    let index = this.ingredients.indexOf(ingredient);
    if (index < 0){
      return;
    }
    this.ingredients[index].selected = !this.ingredients[index].selected;
  }
  ngOnInit() {
  }
  public selectItem(ingredient : any){
    ingredient.selected = true;
    ingredient.count = 1;
    console.log(ingredient.count);
  }
  public deselectItem(ingredient: any){
    ingredient.selected = false;
    ingredient.count = 0;
  }
  public incrementItem(ingredient: any){
    if (ingredient.count === ingredient.num_of_items){
      return;
    }
    ingredient.count++;
  }
  public decrementItem(ingredient: any){
    if (ingredient.count <= 1){
      return;
    }
    ingredient.count--;
  }
  public totalPageCount(){
    let val = Math.ceil(this.getUnselectedIngredients().length/this.itemsPerPage);
    let arr = [];
    for (let i = 1;i<=val;i++){
      arr.push(i);
    }
    return arr;
  }
  public getPaginatedResults(){
    let unselectedIngredients = this.getUnselectedIngredients();
    let first = (this.currentPage-1) * this.itemsPerPage;
    let last = (this.currentPage * this.itemsPerPage);

    return unselectedIngredients.slice(first, last);
  }
  public getUnselectedIngredients(){
    let modifiedSearchString = this.searchString.trim().toLowerCase();
    return this.ingredients.filter((item) => {
      if (modifiedSearchString.length == 0){
        return item.selected === false;
      }
      else{
        return item.selected === false && item.name.trim().toLowerCase().includes(modifiedSearchString);
      }
    });
  }
  public getSelectedIngredients(){
    return this.ingredients.filter((item) => {return item.selected === true});
  }
  public selectionCount(){
    return this.getSelectedIngredients().length;
  }
  public getTotalPrice(){
    let selectedItems = this.getSelectedIngredients();
    let totalPrice = 0;
    for (let ingredient of selectedItems){
      totalPrice += ingredient.count * ingredient.price_per_item;
    }
    return totalPrice;
  }


  public checkout(){
    let errorHandler = (err) => {
      console.error(err);
    };
    let successHandler = (success) => {
      this.parentRouter.navigateByUrl('/home-user/checkout-success').catch(err => {
        console.error(err);
      });
    };
    this.foodService.checkout(this.getSelectedIngredients()).subscribe(successHandler, errorHandler);
  }

}
