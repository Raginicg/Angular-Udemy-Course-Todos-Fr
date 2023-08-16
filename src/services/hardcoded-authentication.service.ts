import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    //console.log("before " + this.isUserLoggedIn());
    if (username === "Ragini" && password === 'dummy') {
      sessionStorage.setItem('authenticaterUser', username);
      //console.log("after " + this.isUserLoggedIn());
      return true;
    }
    return false;
  }

  // giving permission
  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
    return !(user === null)
  }

  // Logout
  logout(){
    sessionStorage.removeItem('authenticaterUser')
;  }
}
