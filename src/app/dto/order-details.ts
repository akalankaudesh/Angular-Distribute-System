export class OrderDetails {

  constructor(public order_id: string, public item_code: string, public item_price: string, public qty: string, public tot: string) {
  }

  constructor(public item_code: string, public description:string ,public itemqty: string, public item_price: string) {
  }
}
