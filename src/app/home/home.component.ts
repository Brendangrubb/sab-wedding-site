import { Component, OnInit } from '@angular/core';
import { routing } from '.././app.routing';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendRsvp(accept,decline,adults,children){
      console.log(accept);
      console.log(decline);
      console.log(adults);
      console.log(children);
  }

}
