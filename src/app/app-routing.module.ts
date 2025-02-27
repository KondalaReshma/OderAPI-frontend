import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { ItemsComponent } from "./items/items.component";
import { CartComponent } from "./items/cart/cart.component";
import { HeaderComponent } from "./header/header.component";
// import { AdminComponent } from "./admin/admin.component";
import { CustomerserviceComponent } from "./customerservice/customerservice.component";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { ManageaddressComponent } from "./userprofile/manageaddress/manageaddress.component";
import { OrdersComponent } from "./userprofile/orders/orders.component";
import { WishlistComponent } from "./userprofile/wishlist/wishlist.component";
import { ReturnsandrefundsComponent } from "./customerservice/returnsandrefunds/returnsandrefunds.component";
import { PaymentsettingsComponent } from "./customerservice/paymentsettings/paymentsettings.component";
import { AboutComponent } from "./customerservice/about/about.component";
import { OrdertrackingComponent } from "./orders/ordertracking/ordertracking.component";


const appRoutes : Routes =
[
    {path: '',component:HeaderComponent},
    {path : 'user',component : UserComponent},
    {path :'products', component : ItemsComponent},
    {path:'cart',component :CartComponent},
    // {path:'admin',component:AdminComponent},
    {path:'customerservice',component:CustomerserviceComponent,
     children:[
        {path:'about',component:AboutComponent},
        {path:'returnsandrefunds',component:ReturnsandrefundsComponent},
        {path:'paymentsettings',component:PaymentsettingsComponent}
              ]
    },  
    {path:'userprofile',component:UserprofileComponent,
    children :
    [{path:'manageaddress',component:ManageaddressComponent},
    {path:'orders',component:OrdersComponent,children:[{path:'ordertracking',component:OrdertrackingComponent}]},
    {path :'wishlist',component:WishlistComponent}
    ]
    }
 
];
@NgModule({

    imports : [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule {

}