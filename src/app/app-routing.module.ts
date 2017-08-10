import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActorsComponent } from './actors.component';
import { ActorDetailComponent } from './actor-detail.component';
import { ActorFormComponent } from './actor-form.component';
import { FilmsComponent } from './films.component';
import { FilmDetailsComponent } from './film-details.component';
import { FilmFormComponent } from './film-form.component';

const routes: Routes = [
  { path: 'actors', component: ActorsComponent },
  { path: 'actor-detail/:id', component: ActorDetailComponent },
  { path: 'actor-form', component: ActorFormComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'film-details/:id', component: FilmDetailsComponent },
  { path: 'film-form', component: FilmFormComponent },
];

@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}