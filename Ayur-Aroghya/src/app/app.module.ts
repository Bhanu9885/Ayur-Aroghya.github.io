import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { ContactComponent } from './components/contact/contact.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { UserpageComponent } from './components/userpage/userpage.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarasolComponent } from './components/carasol/carasol.component';
import { HomeProductComponent } from './components/home-product/home-product.component';
import { UserProductComponent } from './components/user-product/user-product.component';
import { UserAboutComponent } from './components/user-about/user-about.component';
import { UserContactComponent } from './components/user-contact/user-contact.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentComponent } from './components/payment/payment.component';
import { UserCategoryComponent } from './components/user-category/user-category.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { HomeSearchComponent } from './components/home-search/home-search.component';
import { FinalComponent } from './components/final/final.component';

const routes :Routes =[
  {path : '',component:HomeComponent},
  {path : 'about',component:AboutComponent},
  {path : 'login',component:LoginComponent},
  {path : 'register',component:RegisterComponent},
  {path : 'contact',component:ContactComponent},
  {path : 'adminpage',component:AdminpageComponent},
  {path : 'userpage',component:UserpageComponent},
  {path : 'product-form',component:ProductFormComponent},
  {path : 'updateproduct/:id',component:ProductFormComponent},
  {path : 'user-form',component:UserFormComponent},
  {path : 'updateuser/:id',component:UserFormComponent},
  {path : 'product',component:ProductComponent},
  {path : 'category',component:CategoryComponent},
  {path : 'home/category/:id',component:HomeSearchComponent},
  {path : 'home/category/:name',component:HomeSearchComponent},
  {path : 'user/category/:id',component:UserSearchComponent},
  {path : 'user/category/:name',component:UserSearchComponent},
  {path :'user',component:UserComponent},
  {path : 'search/:ename',component:UserSearchComponent},
  {path : 'home-product',component:HomeProductComponent},
  {path : 'user-product',component: UserProductComponent},
  {path : 'user-about',component: UserAboutComponent},
  {path : 'user-contact',component: UserContactComponent},
  {path : 'feedback',component: FeedbackComponent},
  {path : 'cart',component: CartComponent},
  {path : 'payment',component: PaymentComponent},
  {path : 'final',component: FinalComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CategoryComponent,
    ContactComponent,
    SearchComponent,
    ProductFormComponent,
    AdminpageComponent,
    UserpageComponent,
    UserFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    CarasolComponent,
    HomeProductComponent,
    UserProductComponent,
    UserAboutComponent,
    UserContactComponent,
    FeedbackComponent,
    CartComponent,
    PaymentComponent,
    UserCategoryComponent,
    UserSearchComponent,
    HomeSearchComponent,
    FinalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
