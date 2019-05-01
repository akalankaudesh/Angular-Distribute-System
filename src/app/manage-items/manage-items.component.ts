import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Item} from "../dto/item";
import {Customer} from "../dto/customer";

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-items.component.html',
  styleUrls: ['./manage-items.component.scss']
})
export class ManageItemsComponent implements OnInit {
    items:Item[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Item[]>("http://localhost:8080/api/v1/items").subscribe(value => {
      this.items=value;
    });
  }

  loadAllItems():void{
    this.http.get<Item[]>("http://localhost:8080/api/v1/items").subscribe(item=>{
      this.items=item;
    })
  }

  deleteitem(item:Item):void{
    this.http.delete("http://localhost:8080/api/v1/items/"+item.code,{observe:'response'}).subscribe(response=>{
      if (response.status==200){
        this.loadAllItems();
      }
      else {
        alert("Failed to Delete Item");
      }
    })
  }

  saveItem(code:string,desc:string,uniprice:string,qty:string):void{
    this.http.post("http://localhost:8080/api/v1/items",new Item(code,desc,uniprice,qty),{observe:'response'})
      .subscribe(response=>{
        console.log(response);
        if (response.status==201){
          this.loadAllItems();
          alert("Item has saved");
        } else {
          alert("Failed to save Item");
        }
      });
  }

}
