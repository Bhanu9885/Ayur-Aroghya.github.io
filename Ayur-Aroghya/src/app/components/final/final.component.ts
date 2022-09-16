import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(public router:Router,) { }

  ngOnInit(): void {
  }

  show1():void
  {
    this.router.navigateByUrl("userpage");
  }

  show2():void
  {
    this.router.navigateByUrl("");
  }
}
