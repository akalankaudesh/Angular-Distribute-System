import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageItemsComponent } from './manage-items/manage-items.component';
import { PlaceOrdersComponent } from './place-orders/place-orders.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import {Route, RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRouterModule} from "./app.router.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ManageCustomersComponent,
    ManageItemsComponent,
    PlaceOrdersComponent,
    ViewOrdersComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
