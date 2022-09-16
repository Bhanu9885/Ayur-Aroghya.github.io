import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {
  searchName:string;

  constructor(public productService:ProductServiceService,
              public router:Router,
              public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
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
    this.router.navigateByUrl("cart");
  }

  show5(){
    this.router.navigateByUrl("");
  }

}
