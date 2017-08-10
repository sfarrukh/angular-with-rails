import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Actor } from './actor';
import { ActorsService } from './actors.service';

import 'rxjs/add/operator/map';

@Component({
  selector: '',
  templateUrl: './actor-form.component.html',
  styleUrls: ['./bootstrap.min.css', '../stylesheets/styled.css']

})

export class ActorFormComponent implements OnInit {
  form: any;

  private actorsUrl = 'http://localhost:4200/api/actors'
  
  constructor (
    private http: Http,
    private actorsService: ActorsService,
    private router: Router
  ){}

  ngOnInit(){
    this.form = new FormGroup({
      first_name: new FormControl(''),
      last_name: new FormControl(''),
    });
  }

  // TEST
  // onSubmit(formValues: any){
  //   console.log(formValues)
  // }


  // TEST
  // private headers = new Headers({'Content-Type': 'application/json'});

  // onSubmit(formValue: any){
  //   return this.http.post(this.actorsUrl, formValue, {headers: this.headers })
  //     .map(response => {})
  //     .subscribe(babanji => this.form = babanji)
  // }

  onSubmit(formData: any){
    this.actorsService.createActor(formData)
      .subscribe(babanji => {
        this.form = babanji;
        this.router.navigate(['actors'])
      })
  }
}