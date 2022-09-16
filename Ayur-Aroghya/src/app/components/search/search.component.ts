import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usertype } from 'src/app/common/usertype';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchName:string;
  user1:Usertype = new Usertype(0,"bhanu","Bhanu","Bhanu@gmail.com","Bhanu",9885533141,"vja","XXX");
  user2:Usertype = new Usertype(0,"bhanu","Bhanu","Bhanu@gmail.com","Bhanu",9885533141,"vja","XXX");
  constructor(public usertypeService:ProductServiceService,
              public router:Router,
              public activatedRoute:ActivatedRoute) { }
              editable : boolean=false;

  ngOnInit(): void {
  }

  search(){
    this.router.navigateByUrl("/search/"+this.searchName);
  }

  show1():void
  {
      if( this.user1.usertype=="admin")
      {
      this.router.navigateByUrl("/user");//crud operations
      console.log("admin verified");
      window.alert("login successfull");
      }
      else if(this.user1.usertype=="" )
      {
      this.router.navigateByUrl("/product");//display code
      console.log("user verified");
      window.alert("login successfull");
      }
      else
      {
      this.router.navigateByUrl("/search");
      window.alert("login Failed....Try Again!");
      }
    }

  show2()
  {
    if(this.editable)
    {
      this.usertypeService.updateUser(this.user2).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/usertypes"); 
    }
    else{
    console.log(this.user2);
    this.usertypeService.saveUser(this.user2).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/usertypes");
    }
  }
  
}
