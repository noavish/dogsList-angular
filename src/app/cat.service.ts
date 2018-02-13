import { Injectable } from '@angular/core';

const CATS = [
  {name: 'Mashuya', weight: 30, birthDate: new Date(2016, 10, 15), toggle: true, icon: '-'},
  {name: 'Spotnik', weight: 20, birthDate: new Date(2014, 2, 9), toggle: true, icon: '-'}
];

@Injectable()
export class CatService {

  constructor() { }
  getCats() {
    return CATS;
  }

  deleteCat(i){
    CATS.splice(i,1);
  }
}
