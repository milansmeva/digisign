import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject();

  constructor() { }

  get user(){
    return this.userSubject.asObservable();
  }
  
  set user(val){
    this.userSubject.next(val);
  }

}
