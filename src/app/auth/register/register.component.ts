import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model={username:"",password:"",isAdmin:false};

  constructor(private http:HttpClient,private config:ConfigService
    ,private router:Router) { }

  ngOnInit() {
  }

  submit(){
    this.http.post(this.config.getAPI()+'/user/adduser',this.model).subscribe(data=>{
      if(data==true){
        //route to login page
        this.router.navigate(['/auth/login'])
      }
    })
  }
}
