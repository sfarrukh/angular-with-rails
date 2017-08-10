import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Film } from './film';
import { FilmsService } from './films.service';
import { Actor } from './actor';

@Component ({
  selector: 'my-app',
  templateUrl: './film-details.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css']
})

export class FilmDetailsComponent {
  film: Film;
  actors: Actor;

  constructor (
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit() { this.showFilm() }

  showFilm(): void {
    this.activatedRoute.params
      .switchMap((params: Params) => this.filmsService
      .getFilm(+params['id']) )
      .subscribe(babangi => this.film = babangi)
  }

  showActors() {
    this.activatedRoute.params
      .switchMap((params: Params)=> this.filmsService
      .getFilmsActors(+params['id']))
      .subscribe(res => this.actors = res)
                // error => this.errorMessage = <any>error);
  }

  gotoActor(actor: Actor){
    this.router.navigate(['./actor-detail', actor.actor_id] )
  }
}