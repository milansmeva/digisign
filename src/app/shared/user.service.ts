import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject 

  constructor() {
    let u = localStorage.getItem('username');
    this.userSubject = new BehaviorSubject(u);
   }

  get user(){
    return this.userSubject.asObservable();
  }
  
  set user(val){
    this.userSubject.next(val);
  }

}
