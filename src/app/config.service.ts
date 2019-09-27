import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  domain = "http://192.168.43.31:8080";


  constructor() { }

  getAPI(){
    return this.domain;
  }
  
}
