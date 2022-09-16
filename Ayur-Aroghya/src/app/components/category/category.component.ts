import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  categories: import("E:/Ayur Aroghya/Ayur-Aroghya/src/app/common/category").Category[];

  constructor(private productservice:ProductServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(()=>{
        this.getAllCategories()});
      }

  getAllCategories(){
    this.productservice.getAllCategories().subscribe(data=>{
      this.categories=data
    });
  }
}
