"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var http_1 = require("@angular/http");
var actors_service_1 = require("./actors.service");
var films_service_1 = require("./films.service");
var ActorDetailComponent = (function () {
    function ActorDetailComponent(actorsService, filmsService, activatedRoute, http, router) {
        this.actorsService = actorsService;
        this.filmsService = filmsService;
        this.activatedRoute = activatedRoute;
        this.http = http;
        this.router = router;
    }
    ActorDetailComponent.prototype.ngOnInit = function () { this.tutorialWay(), this.search(this.term); };
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
    ActorDetailComponent.prototype.tutorialWay = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.actorsService
            .getActor(+params['id']); })
            .subscribe(function (babangi) { return _this.actor = babangi; });
    };
    ActorDetailComponent.prototype.showActorInFilms = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.actorsService
            .getActorsFilms(+params['id']); })
            .subscribe(function (res) { return _this.films = res; });
        // error => this.errorMessage = <any>error);
    };
    ActorDetailComponent.prototype.gotoFilm = function (film) {
        this.router.navigate(['./film-details', film.film_id]);
    };
    ActorDetailComponent.prototype.link = function (actor, film) {
        var _this = this;
        this.actorsService.link(actor.actor_id, film.film_id)
            .subscribe(function (res) { return _this.films = res; });
    };
    ActorDetailComponent.prototype.unlink = function (actor, film) {
        var _this = this;
        this.actorsService.unlink(actor.actor_id, film.film_id)
            .subscribe(function (res) { return _this.films = res; });
    };
    // unlink(actor: Actor, film: Film){
    //   alert("Hello "+actor.actor_id+" "+film.film_id)
    // }
    ActorDetailComponent.prototype.search = function (term) {
        this.items = this.filmsService.search(term);
    };
    return ActorDetailComponent;
}());
ActorDetailComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: './actor-detail.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css'],
    }),
    __metadata("design:paramtypes", [actors_service_1.ActorsService,
        films_service_1.FilmsService,
        router_1.ActivatedRoute,
        http_1.Http,
        router_1.Router])
], ActorDetailComponent);
exports.ActorDetailComponent = ActorDetailComponent;
//# sourceMappingURL=actor-detail.component.js.map