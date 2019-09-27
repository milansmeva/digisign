import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  submitted = false;

  model = {username:"",password:""}
  constructor(
    private http:HttpClient,
    private config:ConfigService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  submit(){
    this.http.post(this.config.getAPI()+'/user/adduser',this.model).subscribe(data=>{
      if(data==true){
        localStorage.setItem('username',this.model.username)
        this.router.navigate(['/'])
      }
    })
  }


}
