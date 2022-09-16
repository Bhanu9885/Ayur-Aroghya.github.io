import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home-product',
  templateUrl: './home-product.component.html',
  styleUrls: ['./home-product.component.css']
})
export class HomeProductComponent implements OnInit {

  products: Product[];
  categories: Category[];
  searchName: string;
  categoryId: number;

  constructor(private productservice:ProductServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProducts()});
  }

  show1(){
    window.alert("Please Login to Purchase");
    this.route.navigateByUrl("login");
  }
  
  getAllCategories() {
    this.productservice.getAllCategories().
    subscribe(data=>{      
      this.categories=data
    });
  }
  getAllProducts() {
    const hascategoryId:boolean = this.activeRoute.snapshot.paramMap.has("id");
    const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("name");
    if(hascategoryId){
      //get employees by DeptId
      this.categoryId = +this.activeRoute.snapshot.paramMap.get("id");
      this.productservice.getProductByCatId(this.categoryId).subscribe(data => {
        console.log(data);
        this.products = data;
      })
  
    }
    //searchbyname
    else if(hassearchName)
    {
  
      this.searchName=this.activeRoute.snapshot.paramMap.get("name");
      console.log(this.searchName);
      this.productservice.getProductByName(this.searchName).subscribe(data=>{
          console.log(data);
        this.products=data;
      });
    
    }
    else {
        this.productservice.getAllProducts().subscribe(data => {
          console.log(data);
          this.products = data;
        })
    }
  
  }
}
