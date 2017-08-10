import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }   from '@angular/forms'
import { HttpModule, JsonpModule }  from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { ActorsComponent } from './actors.component';
import { ActorDetailComponent } from './actor-detail.component';
import { ActorFormComponent } from './actor-form.component';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './film-details.component';
import { FilmFormComponent } from './film-form.component';

import { ActorsService } from './actors.service';
import { FilmsService } from './films.service';

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule, 
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  
  declarations: [
    AppComponent,
    ActorsComponent,
    FilmsComponent,
    ActorDetailComponent,
    ActorFormComponent,
    FilmDetailsComponent,
    FilmFormComponent,
  ],

  providers: [
     ActorsService,
     FilmsService
  ],
  
  bootstrap: [ AppComponent ]
})

export class AppModule { }
