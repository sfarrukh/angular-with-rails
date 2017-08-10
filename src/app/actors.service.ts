import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Actor } from './actor';
import { Film } from './film';

@Injectable()

export class ActorsService {
  // private actorsUrl = 'api/actors/actors.json';
  private actorsUrl = 'http://localhost:4200/api/actors';

  constructor(private http: Http) {}

  getActors(): Observable<Actor[]>{
    return this.http.get(this.actorsUrl)
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


    getActor(id: number): Observable<Actor> {
      const url = `${this.actorsUrl}/${id}`;
      return this.http.get(url)
        // .map((res: Response) => <Actor>res.json() )
        .map(res => res.json())
    }

    getActorsFilms(id: number): Observable<Film> {
      const url = `${this.actorsUrl}/${id}/films`;
      return this.http.get(url)
        .map(res => res.json())
    }

    createActor(formData: any): Observable<Actor>{
      let headers = new Headers({'Content-Type':'application/json'});
      let options = new RequestOptions({headers: headers });

      return this.http.post(this.actorsUrl, formData, options )
        .map(res => res.json())
        // .catch(this.handleError)
    }

    search(term: string) {
      let url =' http://localhost:4200/api/search/actors/?actor_search='
      return this.http
        .get(url + term)
        .map(res => res.json() )
    }

    letter(letter: string) {
      let url = 'http://localhost:4200/api/search/actors_letter?first_letter='
      return this.http
        .get(url + letter)
        .map(res => res.json())
    }

    link(actor_id: number, film_id: number){
      let url = 'http://localhost:4200/api/actors'
      return this.http
        .get(url + "/" + actor_id + "/link?film_id=" + film_id)
        .map(res => res.json())
    }

    unlink(actor_id: number, film_id: number){
      // alert("Hello "+actor_id+" "+film_id);
      let url = 'http://localhost:4200/api/actors'
      return this.http
        .get(url + "/" + actor_id + "/unlink?film_id=" + film_id)
        .map(res => res.json())
    }

}