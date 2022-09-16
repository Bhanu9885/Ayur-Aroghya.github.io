import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usertype } from 'src/app/common/usertype';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user:Usertype = new Usertype(0,"First Name","Last Name","XXXX@gmail.com","*******",9850000089,"Address","admin");
  
  constructor(public usertypeService:ProductServiceService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }
    editable : boolean=false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( ()=> {this.getUserById()});
  }

  getUserById() {
    const userId=+this.activatedRoute.snapshot.paramMap.get("id");
    if(userId>0)
    {
      this.editable=true;
      this.usertypeService.getUserById(userId).subscribe(data => {this.user=data});
    }
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.usertypeService.updateUser(this.user).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/user");
        window.alert("Employee Details Update successfull"); 
    }
    else{
    console.log(this.user);
    this.usertypeService.saveUser(this.user).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/user");
      window.alert("Employee Added successfull");
    }
  }

  show1():void
  {
    this.router.navigateByUrl("adminpage");
  }

}
