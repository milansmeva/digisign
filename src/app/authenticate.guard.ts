import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router){  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuthenticated = false;
      let username = localStorage.getItem('username');
      if(username){
        isAuthenticated = true
      }else{
        this.router.navigate(['/auth/login'])
      }
      return isAuthenticated;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isAuthenticated = false;
      let username = localStorage.getItem('username');
      if(username){
        isAuthenticated = true
      }else{
        this.router.navigate(['/auth/login'])
      }
      return isAuthenticated;
  }
  
}
