import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

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

  addProductForm(){
    this.route.navigateByUrl("/product-form")
  }

  update(productID:number){
    this.route.navigateByUrl("/updateproduct/"+productID);
  }

  delete(productId:number){
    if(confirm("Do you want to delete"))
    {
      this.productservice.deleteProduct(productId).subscribe(data=>{
        console.log("Deleted")
        this.getAllProducts();
      })
    }
  }

  show1():void
  {
    this.route.navigateByUrl("");
  }

  show2():void
  {
    this.route.navigateByUrl("product-form");
  }

  show3():void
  {
    this.route.navigateByUrl("adminpage");
  }
}