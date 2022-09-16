import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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
