import { Component, OnInit, OnDestroy } from '@angular/core';
import { CatService } from './cat.service';
import { UserService } from './user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private catService: CatService, private userService: UserService) {}
    
  sayHello: any;
  
  // cats: any[];

  get isUserLoggedIn(){
    return this.userService.isUserLoggedIn();
  }

  ngOnInit() {
    // this.cats = this.catService.getCats();
    this.sayHello = window.setInterval(() => console.log('Hello!'),  1000);	
  }

  ngOnDestroy (){
    window.clearInterval(this.sayHello);	
  }

  title = 'my first angular 2.0 adventure';
  
  // addCat() {
  //   this.cats.push({name: this.name, weight: this.weight, birthDate: this.birthDate, toggle: true, icon: '-'});
  // }
  
  // removeCat(i) {
  //   this.catService.deleteCat(i);
  // }
}
