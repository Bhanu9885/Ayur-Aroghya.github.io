import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

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
    this.router.navigateByUrl("/user/category/"+this.searchName);
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
    this.router.navigateByUrl("cart");
  }

  show5(){
    this.router.navigateByUrl("");
  }
}
