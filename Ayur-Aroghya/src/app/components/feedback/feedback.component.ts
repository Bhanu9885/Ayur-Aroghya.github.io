import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/common/contact';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  contacts: Contact[];
 
  constructor(private contactservice:ProductServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe(()=>{
        this.getAllContacts()});
      }

      getAllContacts(){
        this.contactservice.getAllContacts().subscribe(data=>{
          this.contacts=data
        });
      }

      show1():void
  {
    this.route.navigateByUrl("");
  }

  show2():void
  {
    this.route.navigateByUrl("adminpage");
  }
}
