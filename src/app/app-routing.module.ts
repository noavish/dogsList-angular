import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { AboutComponent } from './about/about.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import {DogEditorComponent} from './dog-editor/dog-editor.component';

const routes: Routes = [
  { path: '', component: DogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'add-dog', component: AddDogComponent },
  { path: 'edit-dog/:id', component: DogEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
