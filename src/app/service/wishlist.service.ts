import { Injectable } from '@angular/core';
import { Item } from '../items/item.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor() { }


  public wishlistitems : Item[] =[];



  addToWishList(item:Item)
  {

    this.wishlistitems.push({...item,quantity:1});
    
  }


  getItems(){
    return this.wishlistitems;
  }

  delete(item:any){

    this.wishlistitems = this.wishlistitems.filter((i)  => i.id !== item.id);
    

  }

}
