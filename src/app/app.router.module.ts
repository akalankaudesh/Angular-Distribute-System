import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ManageCustomersComponent} from "./manage-customers/manage-customers.component";
import {ManageItemsComponent} from "./manage-items/manage-items.component";
import {PlaceOrdersComponent} from "./place-orders/place-orders.component";
import {ViewOrdersComponent} from "./view-orders/view-orders.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const appRoute : Routes=[
  {
    path:"dashboard",
    component:DashboardComponent
  },
  {
    path:"manage-customers",
    component:ManageCustomersComponent
  },
  {
    path:"manage-orders",
    component:ManageItemsComponent
  },
  {
    path:"place-orders",
    component:PlaceOrdersComponent
  },
  {
    path:"view-orders",
    component:ViewOrdersComponent
  },
  {
    path:"",
    redirectTo:"/dashboard",
    pathMatch:"full"
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoute)
  ],
  exports:[RouterModule]
})
export class AppRouterModule {}
