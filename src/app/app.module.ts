import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './items/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownDirective } from './shared/dropdown.directive';
import { CustomerserviceComponent } from './customerservice/customerservice.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PaymentsettingsComponent } from './customerservice/paymentsettings/paymentsettings.component';
import { ReturnsandrefundsComponent } from './customerservice/returnsandrefunds/returnsandrefunds.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { ManageaddressComponent } from './userprofile/manageaddress/manageaddress.component';
import { OrdersComponent } from './userprofile/orders/orders.component';
import { WishlistComponent } from './userprofile/wishlist/wishlist.component';
import { AboutComponent } from './customerservice/about/about.component';
import { OrdertrackingComponent } from './orders/ordertracking/ordertracking.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ItemsComponent,
    CartComponent,
    DropdownDirective, 
    CustomerserviceComponent, 
    PaymentsettingsComponent,
    ReturnsandrefundsComponent, 
    UserprofileComponent,
    ManageaddressComponent,
    OrdersComponent, 
    WishlistComponent,
    AboutComponent,
    OrdertrackingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
