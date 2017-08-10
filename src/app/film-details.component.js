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
var films_service_1 = require("./films.service");
var FilmDetailsComponent = (function () {
    function FilmDetailsComponent(filmsService, activatedRoute, router) {
        this.filmsService = filmsService;
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    FilmDetailsComponent.prototype.ngOnInit = function () { this.showFilm(); };
    FilmDetailsComponent.prototype.showFilm = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.filmsService
            .getFilm(+params['id']); })
            .subscribe(function (babangi) { return _this.film = babangi; });
    };
    FilmDetailsComponent.prototype.showActors = function () {
        var _this = this;
        this.activatedRoute.params
            .switchMap(function (params) { return _this.filmsService
            .getFilmsActors(+params['id']); })
            .subscribe(function (res) { return _this.actors = res; });
        // error => this.errorMessage = <any>error);
    };
    FilmDetailsComponent.prototype.gotoActor = function (actor) {
        this.router.navigate(['./actor-detail', actor.actor_id]);
    };
    return FilmDetailsComponent;
}());
FilmDetailsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './film-details.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css']
    }),
    __metadata("design:paramtypes", [films_service_1.FilmsService,
        router_1.ActivatedRoute,
        router_1.Router])
], FilmDetailsComponent);
exports.FilmDetailsComponent = FilmDetailsComponent;
//# sourceMappingURL=film-details.component.js.map