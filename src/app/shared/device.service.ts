import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  user = null;

  constructor(private config:ConfigService,private http:HttpClient,private us:UserService) { 
    this.us.user.subscribe(user=>this.user=user)
  }

  createMediaPlayer(data){
    data.username = this.user;
    console.log(data,this.user)
    let url = this.config.getAPI() + '/mediaplayer/RegisterMediaPLayer'
    return this.http.post(url,data);
  }


  getAllMediaPlayer(){
    let params = new HttpParams().set('username', this.user);
    return this.http.get(this.config.getAPI()+"/mediaplayer/GetallMediaPlayersForUsers",{params:params});
  }


}