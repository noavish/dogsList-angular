import { Injectable } from '@angular/core';
import { Dog } from './dog';

const DOGS: Dog[] = [
  {id: 1, name: 'Marshmello', weight: 30, birthDate: new Date(2016, 10, 15), toggle: true, icon: '-', wasEdited: false},
  {id: 2, name: 'Rex', weight: 20, birthDate: new Date(2014, 2, 9), toggle: true, icon: '-', wasEdited: false},
  {id: 3, name: 'Woof', weight: 8, birthDate: new Date(2013, 1, 24), toggle: true, icon: '-', wasEdited: false},
  {id: 4, name: 'Chuck', weight: 28, birthDate: new Date(2017, 4, 6), toggle: true, icon: '-', wasEdited: false},
  {id: 5, name: 'Barkley', weight: 4, birthDate: new Date(2013, 6, 22), toggle: true, icon: '-', wasEdited: false},
  {id: 6, name: 'Prince', weight: 65, birthDate: new Date(2012, 9, 1), toggle: true, icon: '-', wasEdited: false}
];

@Injectable()
export class DogService {
  dogs: Dog[] = DOGS;

  constructor() { }

  getDogs(): Dog[] {
    return DOGS;
  }

  addDog(newDog: Dog) {
    newDog.id = this.generateId();
    this.dogs.push(newDog);
  }

  editDog(id: number, dog: Dog){
    let updateDog = this.dogs.find((dog) => dog.id == id);
    updateDog = Object.assign(updateDog, dog);
  }

  generateId (): number {
    return this.dogs[this.dogs.length - 1].id + 1;
  }

  deleteDog(i) {
    DOGS.splice(i, 1);
  }

  getDog(id) {
    return this.dogs.find((dog) => dog.id == id);
  }

  getDogsByName(queryName: string) {
    return this.dogs.filter((dog) => queryName.toLowerCase() == dog.name.toLowerCase());
  }
}
