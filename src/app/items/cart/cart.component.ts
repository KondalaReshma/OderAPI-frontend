import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  
})
export class CartComponent {

  constructor(public cartService : CartService,
    private router :Router){

    this.cartService.getItems();

  }

  onDelete(item)
  {
    this.cartService.delete(item);
  }

  NavigateToPayment(){

    this.router.navigate(['/userprofile','orders']);

  }

}
