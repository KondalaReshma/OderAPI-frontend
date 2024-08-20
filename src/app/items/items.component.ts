import { Component,OnInit } from '@angular/core';
import { Item } from './item.model';
import { CartService } from '../service/cart.service';
import { WishlistService } from '../service/wishlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css'
})
export class ItemsComponent  implements OnInit{


items: Item[] =  [
 new Item(1,'MAGGI','grocery','have a great snacking',20,10,'available',30,'https://img.thecdn.in/300082/1681873855588_SKU-0021_0.jpg?width=600'),
 new Item(2,'MAZAA','grocery','have a great  summer with mazaa',80,10,'available',100,'https://www.bigbasket.com/media/uploads/p/xxl/265690-2_15-maaza-mango-drink.jpg'),
 new Item(3,'KURKURE','grocery','have a great  snacking',30,10,'available',10,'https://m.media-amazon.com/images/I/819KW69gDSL.jpg'),
 new Item(4,'MONACO','grocery','have a great  evening',40,10,'available',20,'https://5.imimg.com/data5/SELLER/Default/2022/2/SD/VT/VW/146503902/0009415-parle-monaco-classic-regular-biscuits-3427g343g377g-510-1000x1000.jpeg'),
 new Item(5,'DARKFANTACY','grocery','have a great  evening',120,10,'available',20,'https://mcprod.spencers.in/media/catalog/product/1/2/1231977.jpg'),
 new Item(6,'DAIRYMILK','grocery','have a chocolate you deserve it ',50,10,'available',20,'https://www.quickpantry.in/cdn/shop/products/cadbury-dairy-milk-silk-oreo-60-g-quick-pantry_500x500.jpg?v=1710538483'),
 new Item(7,'LAYS','grocery',' have a great  snacking',30,10,'available',20,'https://www.bigbasket.com/media/uploads/p/xxl/102745_13-lays-potato-chips-american-style-cream-onion-flavour.jpg'),
 new Item(8,'BADAM MILK','grocery','have a great  summer with BadamMilk',30,10,'available',100,'https://www.jiomart.com/images/product/original/491628798/jersey-badam-flavoured-milk-190-ml-bottle-product-images-o491628798-p590153385-0-202203170717.jpg?im=Resize=(1000,1000)'),
 new Item(9,'PULPY ORANGE','grocery',' have a great  snacking',80,10,'available',20,'https://www.freedomcart.com/image/cache/catalog/data/Products/MM%20PUlpy%20Orange-700x700.jpg'),

];
 


constructor(
  private  CartService : CartService,
  public wishlistService : WishlistService,
  private router : Router){

}

ngOnInit(){
  
}

addToCart(item:any){

  this.CartService.addToCart(item);

  console.log(item);
  
}

addToWishList(item){

  this.wishlistService.addToWishList(item);

}

BuyItem(item){

  this.router.navigate(['/userprofile','orders']);

}

}
