import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {

  constructor(public productService:ProductServiceService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }

  show1(){
    this.router.navigateByUrl("product");
  }

  show2(){
    this.router.navigateByUrl("user");
  }

  show3():void
  {
    this.router.navigateByUrl("feedback");
  }

  show4():void
  {
    this.router.navigateByUrl("");
  }
}
