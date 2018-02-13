import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor(
    private dogService: DogService) { }
    
    name: string;
    weight: number;
    birthDate: Date;
    dogs: any[];

  ngOnInit() {
    this.dogs = this.dogService.getDogs();
  }

  addDog() {
    this.dogs.push({name: this.name, weight: this.weight, birthDate: this.birthDate, toggle: true, icon: '-'});
  }

  toggleFormat(i) {
    this.dogs[i].toggle = !this.dogs[i].toggle; 
    if (this.dogs[i].toggle) {
      this.dogs[i].icon = '-';
    } else {
      this.dogs[i].icon = '+';
    }
  }

  removeDog(i) {
    this.dogService.deleteDog(i);
  }

}
