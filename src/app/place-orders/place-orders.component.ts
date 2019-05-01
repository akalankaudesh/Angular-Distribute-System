import { Component, OnInit } from '@angular/core';
import {OrderDetails} from "../dto/order-details";

@Component({
  selector: 'app-place-orders',
  templateUrl: './place-orders.component.html',
  styleUrls: ['./place-orders.component.scss']
})
export class PlaceOrdersComponent implements OnInit {
itemdetails:OrderDetails[];
itemcode:number;

  constructor() { }

  ngOnInit() {
    this.itemcode=0;
  }

  AddItems(itemcode:string,description:string,itemqty:string,itemtot:string):void{
    this.itemdetails=[itemcode,description,itemqty,itemtot];
    this.itemcode++;
  }
}
