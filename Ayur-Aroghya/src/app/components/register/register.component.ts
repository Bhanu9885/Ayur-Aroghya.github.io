import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usertype } from 'src/app/common/usertype';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:Usertype = new Usertype(0,"First Name","Last Name","XXXX@gmail.com","*******",9850000089,"Address","");
  
  constructor(public usertypeService:ProductServiceService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }
    editable : boolean=false;

  ngOnInit(): void {
   // this.activatedRoute.paramMap.subscribe( ()=> {this.getUserById()});
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.usertypeService.updateUser(this.user).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/usertypes");
        window.alert("Registered successfull"); 
    }
    else{
    console.log(this.user);
    this.usertypeService.saveUser(this.user).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/usertypes");
      window.alert("Registered successfull");
    }
  }

  show1():void
  {
    this.router.navigateByUrl("");
  }

  show2():void
  {
    this.router.navigateByUrl("/login");
  }
}
