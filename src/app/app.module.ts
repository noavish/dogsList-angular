import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog/dog.service';
import { CatService } from './cat.service';
import { UserService } from './user/user.service';




import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DogComponent } from './dog/dog.component';
import { DogEditorComponent } from './dog-editor/dog-editor.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { AddDogComponent } from './add-dog/add-dog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DogComponent,
    DogEditorComponent,
    AboutComponent,
    AddDogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [DogService, CatService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
