import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/services/product-service.service';
import { Usertype } from 'E:/Ayur Aroghya/Ayur-Aroghya/src/app/common/usertype';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Usertype[];
 
  constructor(private userservice:ProductServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(()=>{
        this.getAllUsers()});
      }

      getAllUsers(){
        this.userservice.getAllUsers().subscribe(data=>{
          this.user=data
        });
      }
    
      addEmpForm(){
        this.route.navigateByUrl("/empform")
      }
    
      updateUser(userID:number){
        this.route.navigateByUrl("/updateuser/"+userID);
      }

      deleteUser(userId:number){
        if(confirm("Do you want to delete"))
        {
          this.userservice.deleteUser(userId).subscribe(data=>{
            console.log("Deleted")
            this.getAllUsers();
          })
        }
      }

      show1():void
  {
    this.route.navigateByUrl("");
  }

  show2():void
  {
    this.route.navigateByUrl("user-form");
  }

  show3():void
  {
    this.route.navigateByUrl("adminpage");
  }
      }

