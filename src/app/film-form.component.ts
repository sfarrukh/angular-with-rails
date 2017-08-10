import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Film } from './film';
import { FilmsService } from './films.service';

import 'rxjs/add/operator/map';

@Component({
  selector: '',
  templateUrl: './film-form.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css']

})

export class FilmFormComponent implements OnInit {
  form: any;

  private filmsUrl = 'http://localhost:4200/api/films'
  
  constructor (
    private http: Http,
    private filmsService: FilmsService,
    private router: Router
  ){}

  ngOnInit(){
    this.form = new FormGroup({
      title: new FormControl(''), 
      language_id: new FormControl(''), 
      rental_duration: new FormControl(''), 
      rental_rate: new FormControl(''), 
      replacement_cost: new FormControl(''), 
      release_year: new FormControl(''), 
      description: new FormControl(''), 
      // rating: new FormControl(''), 
      // special_features: new FormControl('')
    });
  }

  onSubmit(formData: any){
    this.filmsService.createFilm(formData)
      .subscribe(babanji => {
        this.form = babanji;
        this.router.navigate(['films'])
      })
  }
}