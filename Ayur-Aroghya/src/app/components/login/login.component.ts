import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usertype } from 'src/app/common/usertype';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Usertype = new Usertype(0,"","","bhanu@gmail.com","xxx",0,"","user");
 
  constructor(private userservice:ProductServiceService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      
      }

   
    
  show1():void
  {
      if( this.user.usertype=="admin")
      {
      this.router.navigateByUrl("/adminpage");//crud operations
      console.log("admin verified");
      window.alert("login successfull");
      }
      else if(this.user.usertype=="user" )
      {
      this.router.navigateByUrl("/userpage");//display code
      console.log("user verified");
      window.alert("login successfull");
      }
      else
      {
      this.router.navigateByUrl("/search");
      window.alert("login Failed....Try Again!");
      }
    }

    show2():void
  {
    this.router.navigateByUrl("");
  }

  show3():void
  {
    this.router.navigateByUrl("/register");
  }
}
