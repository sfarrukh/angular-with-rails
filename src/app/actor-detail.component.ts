import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/observable';

import { Http } from '@angular/http';

import { Actor } from './actor';
import { ActorsService } from './actors.service';
import { Film } from './film';
import { FilmsService } from './films.service';

@Component({
  selector: '',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css'],
})

export class ActorDetailComponent implements OnInit {
  actor: Actor;
  films: Film;
  items: Observable<string[]>
  term: string

  constructor (
    private actorsService: ActorsService,
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute,
    private http: Http,
    private router: Router
  ){}

  ngOnInit() { this.tutorialWay(), this.search(this.term) }

  // 1.working (in console)
  // showActor(){
  //   this.activatedRoute.params
  //     .subscribe((params: Params) => { 
  //       let id = params['id'];
  //       console.log(id);
  //     });
  // }
  

  // 2.working
  // url = 'http://localhost:4200/api/actors'
  // getActor(id: number): Observable<Actor>{
  //   let myUrl = `${this.url}/${id}`
  //   return this.http.get(myUrl)
  //     .map(res => res.json())
  //     // .subscribe(wamali => this.actor = wamali)
  // }
  // showActor() {
  //   this.activatedRoute.params
  //     .switchMap((params: Params) => this.getActor(+params['id']))
  //     .subscribe(wamali => this.actor = wamali)
  // }


  // 3. working
  tutorialWay(): void {
    this.activatedRoute.params
      .switchMap((params: Params) => this.actorsService
      .getActor(+params['id']) )
      .subscribe(babangi => this.actor = babangi)
  }


  showActorInFilms() {
    this.activatedRoute.params
      .switchMap((params: Params)=> this.actorsService
      .getActorsFilms(+params['id']))
      .subscribe(res => this.films = res)
                // error => this.errorMessage = <any>error);
  }

  gotoFilm(film: Film){
    this.router.navigate(['./film-details', film.film_id] )
  }

  link(actor: Actor, film: Film){
    this.actorsService.link(actor.actor_id, film.film_id)
      .subscribe(res => this.films = res)
  }

  unlink(actor: Actor, film: Film){
    this.actorsService.unlink(actor.actor_id, film.film_id)
      .subscribe(res => this.films = res)
  }
  
  // unlink(actor: Actor, film: Film){
  //   alert("Hello "+actor.actor_id+" "+film.film_id)
  // }
  
  search (term: string) {
    this.items = this.filmsService.search(term);
  }
}