import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  products: Product[];

  constructor(private productservice:ProductServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
  this.activeRoute.paramMap.subscribe(()=>{
    this.getAllProducts()});
  }

  getAllProducts(){
    this.productservice.getAllProducts().subscribe(data=>{
      this.products=data
    });
  }
  
  addtocart(product:Product){
    this.route.navigateByUrl("/cart");
    this.productservice.addtocart(product);
    window.alert("Item added to cart succesfully");
  }
  
}
