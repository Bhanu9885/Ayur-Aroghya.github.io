import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.css']
})
export class HomeSearchComponent implements OnInit {

  products:Product[];
  categories: Category[];
  searchName:string;
  categoryId: number;

  constructor(public productService:ProductServiceService,
              public router:Router,
              public activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProducts()})
      this.getAllCategories();
  }

  search(){
    this.router.navigateByUrl("/home/category/"+this.searchName);
  }

  show1(){
    this.router.navigateByUrl("");
  }

  show2(){
    this.router.navigateByUrl("about");
  }

  show3(){
    this.router.navigateByUrl("contact");
  }

  show4(){
    this.router.navigateByUrl("login");
  }

  show5(){
    this.router.navigateByUrl("register");
  }

  show6(){
    window.alert("Please Login to Purchase");
    this.router.navigateByUrl("login");
  }

  getAllCategories() {
    this.productService.getAllCategories().
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
      this.productService.getProductByCatId(this.categoryId).subscribe(data => {
        console.log(data);
        this.products = data;
      })
  
    }
    //searchbyname
    else if(hassearchName)
    {
  
      this.searchName=this.activeRoute.snapshot.paramMap.get("name");
      console.log(this.searchName);
      this.productService.getProductByName(this.searchName).subscribe(data=>{
          console.log(data);
        this.products=data;
      });
    
    }
    else {
        this.productService.getAllProducts().subscribe(data => {
          console.log(data);
          this.products = data;
        })
    }
  
  }
  }
  

