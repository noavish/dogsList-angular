import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Dog } from './dog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {
  dogs: any[];
  title = 'Dogs:';
  selectedDog: Dog = new Dog();
  lastUpdated = '';
  filter: string;

  constructor(private dogService: DogService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams.name) {
        this.filter = queryParams.name;
        this.dogs = this.dogService.getDogsByName(queryParams.name);
      } else {
        this.dogs = this.dogService.getDogs();
      }
    });
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

  editDog(dog: Dog) {
    this.selectedDog = Object.assign({}, dog);
  }

  addLastUpdated(dog: Dog) {
    this.lastUpdated = "Last dog added: " + new Date().toString() + ", name: " + dog.name;
  }

  savedEdit(event: Dog) {
    let savedDog = this.dogs.find((dog) => dog.id == event.id);
    savedDog.wasEdited = true;
    Object.assign(event, savedDog);
  }

}
