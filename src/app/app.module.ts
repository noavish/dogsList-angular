import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DogService } from './dog.service';
import { CatService } from './cat.service';
import { UserService } from './user/user.service';




import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DogComponent } from './dog/dog.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DogComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [DogService, CatService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
