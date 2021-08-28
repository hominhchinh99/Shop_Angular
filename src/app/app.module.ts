import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { ProductQntPipe } from './pipes/product-qnt.pipe';
import { StockPipe } from './pipes/stock.pipe';
import { NoPricePipe } from './pipes/no-price.pipe';
import { AuthGuard } from './guards/auth.guard';
import { AccountComponent } from './components/account/account.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    MainMenuComponent,
    ProductsComponent,
    ContactsComponent,
    ErrorComponent,
    StoreComponent,
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SearchComponent,
    ProductQntPipe,
    StockPipe,
    NoPricePipe,
    AccountComponent,
    ShoppingCartListComponent,
    CheckoutComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot(),
    CollapseModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    { provide: LOCALE_ID, useValue: 'pt-PT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
