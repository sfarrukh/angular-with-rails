import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Film } from './film';
import { FilmsService } from './films.service';

import { Observable } from 'rxjs/Observable';
import { Subject }  from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  templateUrl: './films.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css'],

  providers: [ FilmsService ]
})


export class FilmsComponent implements OnInit {
  errorMessage: string;
  films: Film[] = [];
  mode = 'Observable'
  
  searchedFilms: Observable<Film[]>
  term: string;
  private subject = new Subject<string>();

  constructor (
    private router: Router,
    private filmsService: FilmsService
  ) {}

  gotoDetail(film: Film){
    this.router.navigate(['film-details/', film.film_id ])
  }

  ngOnInit(): void { 
    this.searchedFilms = this.subject
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.filmsService.search(term)
        : Observable.of<Film[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Film[]>([]);
      });
  }

  search(term: string): void {
    this.subject.next(term)
  }

  // search (term: string) {
  //   this.searchedFilms = this.filmsService.search(term);
  // }

}