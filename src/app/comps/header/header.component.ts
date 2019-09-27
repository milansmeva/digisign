import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  menuItemSelected(action){
    switch(action){
      case 'register':
        this.router.navigate(['auth/register']);
        break;
      case "logout":
        this.router.navigate(['auth/login']);
    }
  }

}
