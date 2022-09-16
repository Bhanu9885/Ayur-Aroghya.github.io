import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  products:Product[];
  searchName:string;
  items=this.productService.getitems();

  constructor(public productService:ProductServiceService,
              public router:Router,
              public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
this.activatedRoute.paramMap.subscribe(()=>{
  this.getAllProducts()});
  }  

  mrp(a,b){
    if(b==0){
      return a;
    }else{
      return a-(a*(b/100));
    }
  }

  total:number = 0;
  Grandtotal(){
    
  }

  addtocart(product:Product){
    this.router.navigateByUrl("/cart");
    this.productService.addtocart(product);
    window.alert("Item added to cart succesfully");
  }
  
  getAllProducts() {
    this.productService.getAllProducts().subscribe(data=>{
      console.log(data);
      this.products=data;
    });
  }

  search(){
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("userpage");
  }

  show2(){
    this.router.navigateByUrl("user-about");
  }

  show3(){
    this.router.navigateByUrl("user-contact");
  }

  show4(){
    this.router.navigateByUrl("userpage");
  }

  show5(){
    this.router.navigateByUrl("");
  }

  inc(item){
    if(item.quantity!=5){
      item.quantity+=1;
    }
  }

  dec(item){
    if(item.quantity!=1){
      item.quantity-=1;
    }
  }
  buynow(){
    this.router.navigateByUrl("payment");
  }

}
