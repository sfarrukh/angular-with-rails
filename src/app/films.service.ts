import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Film } from './film';
import { Actor } from './actor';

@Injectable()

export class FilmsService {
  private filmsUrl = 'http://localhost:4200/api/films';

  constructor(private http: Http) {}

  getFilms(): Observable<Film[]>{
    return this.http.get(this.filmsUrl)
                    //  .map(this.extractData)
                    .map(res => res.json())
                    //  .catch(this.handleError);
  }


  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg)
  }

  getFilm(id: number): Observable<Film> {
    const url = `${this.filmsUrl}/${id}`;
    return this.http.get(url)
      // .map((res: Response) => <Film>res.json() )
      .map(res => res.json())
  }

  getFilmsActors(id: number): Observable<Actor>{
    const url = `${this.filmsUrl}/${id}/actors`
    return this.http.get(url)
      .map(res => res.json())
  }

  createFilm(formData: any): Observable<Actor>{
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers });

    return this.http.post(this.filmsUrl, formData, options )
      .map(res => res.json())
      // .catch(this.handleError)
  }

  // search(term: string) {
  //   let url = this.filmsUrl;
  //   let params = new URLSearchParams;

  //   params.set('search', term);
  //   params.set('action', 'api_films');
  //   params.set('format', 'json');
  //   params.set('callback', 'HTTP_CALLBACK');

  //   return this.http
  //     .get(url, { search: params })
  //     .map(res => <string[]>res.json()[1] )
  // }

  search(term: string) {
    let url ='http://localhost:4200/api/search/films/?film_search='
    return this.http
      .get(url + term)
      .map(res => res.json() )
  }

}