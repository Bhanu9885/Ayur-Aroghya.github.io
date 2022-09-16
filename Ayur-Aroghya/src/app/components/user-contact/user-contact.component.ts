import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from 'src/app/common/contact';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-user-contact',
  templateUrl: './user-contact.component.html',
  styleUrls: ['./user-contact.component.css']
})
export class UserContactComponent implements OnInit {

  contact :Contact = new Contact(0,"","","",0,"");

  constructor(public contactService:ProductServiceService,
    public router:Router,
    public activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
  show1():void
  {
    console.log(this.contact);
    this.contactService.saveContact(this.contact).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("userpage");
      window.alert("Message Send successfull");
  }

  show2():void
  {
    this.router.navigateByUrl("userpage");
  }

}
