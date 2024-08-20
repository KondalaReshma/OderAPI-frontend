import { Component } from '@angular/core';
import { WishlistService } from '../../service/wishlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {

  constructor( public wishlistService : WishlistService, private router : Router) {

  }

  Buy(){
     this.router.navigate(['/userprofile','orders']);
  }




}
