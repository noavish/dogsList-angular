import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(
    private userService: UserService) {}

  users = this.userService.getUsers();

  name: string;
  password: string;
  connectedUser: object;
  userLogIn() {
    this.connectedUser = this.userService.checkIfUser(this.name, this.password);
    console.log(this)
  }

  ngOnInit() {
  }

}
