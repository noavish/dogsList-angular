import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DogService } from '../dog/dog.service';
import { Dog } from '../dog/dog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dog-editor',
  templateUrl: './dog-editor.component.html',
  styleUrls: ['./dog-editor.component.css']
})
export class DogEditorComponent implements OnInit {
  @Input() tempDog: Dog = new Dog();
  @Output() dogAdded: EventEmitter<Dog> = new EventEmitter();
  @Output() editedDog: EventEmitter<Dog> = new EventEmitter();
  constructor( private dogService: DogService, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dogService.getDog(params.id);
    });
  }

  addDog() {
     this.dogService.addDog(this.tempDog);
     this.dogAdded.emit(this.tempDog);
  }

  editDog() {
    this.dogService.editDog(this.tempDog.id, this.tempDog);
    this.editedDog.emit(this.tempDog);
    this.tempDog = new Dog();
  }

  cancelEdit() {
    this.tempDog = new Dog();
  }
}
