import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routes } from './app.router';
import {AuthService} from "./services/auth.service";
import { HomeUserComponent } from './components/home-user/home-user.component';
import {FoodService} from "./services/food.service";
import {RouterModule} from "@angular/router";
import {MealsService} from "./services/meals.service";
import {IngredientOrderService} from './services/ingredient-order.service';
import { OrderMealComponent } from './components/order-meal/order-meal.component';
import { GetIngredientsComponent } from './components/get-ingredients/get-ingredients.component';
import { CheckoutSuccessComponent } from './components/checkout-success/checkout-success.component';
import { HomeChefComponent } from './components/home-chef/home-chef.component';
import { HomeAdminComponent} from './components/home-admin/home-admin.component';
import { BrowseMealsComponent } from './components/browse-meals/browse-meals.component';
import { MealRequestsComponent } from './components/meal-requests/meal-requests.component';
import { MealInfoComponent } from './components/meal-info/meal-info.component';
import {FoodReportComponent}from  './components/food-report/food-report.component';
import { ApproveIngredientOrderComponent } from './components/approve-ingredient-order/approve-ingredient-order.component';
import { PlaceIngredientOrderComponent } from './components/place-ingredient-order/place-ingredient-order.component';
import {AdminService} from "./services/admin.service";

import {UserService} from "./services/user.service";
import { ChangeRoleAdminComponent } from './components/change-role-admin/change-role-admin.component';

import { NewMealComponent } from './components/new-meal/new-meal.component';
import { NewIngredientComponent } from './components/new-ingredient/new-ingredient.component';
import {CategoryService} from "./services/category.service";
import { IngredientInfoComponent } from './components/ingredient-info/ingredient-info.component';
import { IngredientOrderInfoComponent } from './components/ingredient-order-info/ingredient-order-info.component';
import { RequestIngredientOrderComponent } from './components/request-ingredient-order/request-ingredient-order.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeUserComponent,
    OrderMealComponent,
    GetIngredientsComponent,
    CheckoutSuccessComponent,
    HomeChefComponent,
    BrowseMealsComponent,
    MealRequestsComponent,
    MealInfoComponent,
    HomeAdminComponent,
    FoodReportComponent,
    ApproveIngredientOrderComponent,
    PlaceIngredientOrderComponent,

    ChangeRoleAdminComponent,
    
    NewMealComponent,
    NewIngredientComponent,
    IngredientInfoComponent,
    IngredientOrderInfoComponent,
    RequestIngredientOrderComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes,
    RouterModule,
    ReactiveFormsModule
  ],


  providers: [AuthService, FoodService, MealsService, AdminService, IngredientOrderService, CategoryService,UserService],

  bootstrap: [AppComponent]
})
export class AppModule { }
