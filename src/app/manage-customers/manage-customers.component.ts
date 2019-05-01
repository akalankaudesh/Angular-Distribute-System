import { Component, OnInit } from '@angular/core';
import {Customer} from "../dto/customer";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {
customers:Customer[]=[];

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<Customer[]>("http://localhost:8080/api/v1/customers").subscribe(val => {
      this.customers=val;
    });

  }

  loadAllCustomers():void{
    this.http.get<Customer[]>("http://localhost:8080/api/v1/customers").subscribe(customers=>{
      this.customers=customers;
    })
  }

  deletecustomer(customer:Customer):void{
    this.http.delete("http://localhost:8080/api/v1/customers/"+customer.id,{observe:'response'}).subscribe(response=>{
      if (response.status==200){
        this.loadAllCustomers();
      }
      else {
        alert("Failed to Delete Customer");
      }
    })
  }

  saveCustomer(id:string,name:string,address:string):void{
    this.http.post("http://localhost:8080/api/v1/customers",new Customer(id,name,address),{observe:'response'})
      .subscribe(response=>{
        console.log(response);
        if (response.status==201){
          this.loadAllCustomers();
          alert("Customer has saved");
        } else {
          alert("Failed to save customer");
        }
      });
  }
}
