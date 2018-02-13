import { Injectable } from '@angular/core';

const DOGS = [
  {name: 'Marshmello', weight: 30, birthDate: new Date(2016, 10, 15), toggle: true, icon: '-'},
  {name: 'Rex', weight: 20, birthDate: new Date(2014, 2, 9), toggle: true, icon: '-'},
  {name: 'Woof', weight: 8, birthDate: new Date(2013, 1, 24), toggle: true, icon: '-'},
  {name: 'Chuck', weight: 28, birthDate: new Date(2017, 4, 6), toggle: true, icon: '-'},
  {name: 'Barkley', weight: 4, birthDate: new Date(2013, 6, 22), toggle: true, icon: '-'},
  {name: 'Prince', weight: 65, birthDate: new Date(2012, 9, 1), toggle: true, icon: '-'}
];

@Injectable()
export class DogService {

  constructor() { }
  getDogs() {
    return DOGS;
  }

  deleteDog(i){
    DOGS.splice(i,1);
  }
}
