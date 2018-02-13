import { Injectable } from '@angular/core';

const USERS = [
  {userName: 'Noa', password: '123', loggedIn: false}
];

@Injectable()
export class UserService {

  constructor() { }

  getUsers(){
    return USERS;
  }

  checkIfUser(name, password) {
    console.log(USERS)
    for (var i=0; i<USERS.length; i++) {
      if (USERS[i].userName == name && USERS[i].password == password) {
        USERS[i].loggedIn = true;
        console.log(USERS)  
        return USERS[i];
      }
      else {
        USERS[i].loggedIn = false;
      }
    }
  }

  isUserLoggedIn() {
  for (var i=0; i<USERS.length; i++) {
      if (USERS[i].loggedIn == true) {
        return true;
      }
    }
    return false;
  }
}
