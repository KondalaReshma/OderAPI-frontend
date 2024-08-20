import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

constructor(private router : Router){}


ngOnInit(): void {
  
}

//  @Output() userSelected  = new EventEmitter<string>();
//  @Output() itemSelected = new EventEmitter<string>();
//  @Output() cartSelected = new EventEmitter<string>();

// onSelectUser(feature:string){

//   this.userSelected.emit(feature);
// }

// onSelectItems(feature:string){
//   this.itemSelected.emit(feature);

// }
// onSelectCart(feature:string){

//   this.cartSelected.emit(feature);
// }

// 

NavigateToOrders(){

  this.router.navigate(['/userprofile','orders']);

}


NavigateToWishList(){
   this.router.navigate(['/userprofile','wishlist']);
}

NavigateToManageAddress(){

  this.router.navigate(['/userprofile','manageaddress']);

}
NavigateToPayment(){

  this.router.navigate(['/userprofile','orders']);

}
NavigateToReturns(){

  this.router.navigate(['/customerservice','returnsandrefunds']);
}

NavigateToPaymentSettings(){

  this.router.navigate(['/customerservice','paymentsettings']);

}

NavigateToAbout(){

  this.router.navigate(['/customerservice','about']);

}

}
