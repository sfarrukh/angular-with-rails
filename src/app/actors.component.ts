import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Actor }     from './actor';
import { ActorsService } from './actors.service';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'my-app',
  templateUrl: './actors.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css'],
})


export class ActorsComponent implements OnInit {
  errorMessage: string;
  bogicho: Actor[] = [];
  mode = 'Observable';

  searched_actors: Observable<Actor[]>
  term: string;
  private subject = new Subject<string>();

  constructor (
    private actorsService: ActorsService,
    private router: Router,
  ) {}

  ngOnInit(): void { 
    this.searched_actors = this.subject
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.actorsService.search(term)
        : Observable.of<Actor[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Actor[]>([]);
      });
  }

  search(term: string): void {
    this.subject.next(term)
  }

  showActors() {
    this.actorsService.getActors()
              .subscribe(
                res => this.bogicho = res,
                error => this.errorMessage = <any>error);
  }

  gotoDetail(ok: Actor){
    // alert(ok.first_name);
    this.router.navigate(['/actor-detail', ok.actor_id])
  }

  selectedLetter(letter: string){
    this.actorsService.letter(letter)
    // alert(letter)
      .subscribe(
        res => this.bogicho = res,
        error => this.errorMessage = <any>error
      )
  }

  // search (term: string) {
  //   this.searched_actors = this.actorsService.search(term);
  // }


}