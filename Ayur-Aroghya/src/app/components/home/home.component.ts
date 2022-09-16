import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products:Product[];
  categories:Category[];
  searchName:string;

  constructor(public productService:ProductServiceService,
              public router:Router,
              public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe(data=>{
      this.products=data
    });
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
}
