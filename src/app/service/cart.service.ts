import { Injectable } from '@angular/core';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartitems : Item[] =[];
  // JSON.parse(localStorage.getItems('cartItems')||[]);

  constructor() { }

  addToCart(item:Item){

    this.cartitems.push({...item,quantity:1});
    // localStorage.setItem('cartItems',JSON.stringify(this.cartitems));
  }

  getItems(){
    return this.cartitems;
  }

  delete(item:any){

    this.cartitems = this.cartitems.filter((i)  => i.id !== item.id);
    // localStorage.setItem('cartItems',JSON.stringify(this.cartitems));

  }

  incrementQuantity(id:number){
 

    let item = this.cartitems.find((i)=> id===id);
   
    if(item){
      item.quantity++;
    }
    // localStorage.setItem('cartItems',JSON.stringify(this.cartitems));

  }

  decrementQuantity(id:number){
 

    let item = this.cartitems.find((i)=> id===id);
   
    if(item){
      item.quantity--;
    }
    // localStorage.setItem('cartItems',JSON.stringify(this.cartitems));

  }

  getTotal(){

    return this.cartitems.reduce((acc,item)=>{
      return acc + item.price * item.quantity;
    },0);

    
  }
}
