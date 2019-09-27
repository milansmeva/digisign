import { Injectable } from '@angular/core';
import { ConfigService } from '../config.service';
import { HttpClient } from '@angular/common/http';
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
    data.username = this.user.username;
    let url = this.config + '/mediaplayer/RegisterMediaPlayer'
    return this.http.post(url,data);
  }



}