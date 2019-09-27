import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  links = [
    { id: 1, name: "Dashboard", linkTo: "/" },
    {id:2,name:"Devices", linkTo:"/device"},
    { id: 3, name: "Groups", linkTo: "/group" },
    { id: 4, name: "Sequence", linkTo: "/sequence" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
