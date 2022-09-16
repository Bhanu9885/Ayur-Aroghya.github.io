import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  product:Product = new Product(0,"","","","",0,0,0,0,0,0);
  
  constructor(public productService:ProductServiceService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }
    editable : boolean=false;

  ngOnInit(): void {
   this.activatedRoute.paramMap.subscribe( ()=> {this.getProductById()});
  }

  getProductById() {
    const productId=+this.activatedRoute.snapshot.paramMap.get("id");
    if(productId>0)
    {
      this.editable=true;
      this.productService.getProductById(productId).subscribe(data => {this.product=data});
    }
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.productService.updateProduct(this.product).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/product");
        window.alert("Product updated successfull"); 
    }
    else{
    console.log(this.product);
    this.productService.saveProduct(this.product).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/product");
      window.alert("product added successfull");
    }
  }

  show1():void
  {
    this.router.navigateByUrl("product");
  }

}
