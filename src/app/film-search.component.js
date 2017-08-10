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
var films_service_1 = require("./films.service");
var FilmSearchComponent = (function () {
    function FilmSearchComponent(router, filmsService) {
        this.router = router;
        this.filmsService = filmsService;
        this.films = [];
        this.mode = 'Observable';
    }
    FilmSearchComponent.prototype.gotoDetail = function (film) {
        this.router.navigate(['film-details/', film.film_id]);
    };
    FilmSearchComponent.prototype.ngOnInit = function () { this.search(this.term); };
    FilmSearchComponent.prototype.search = function (term) {
        this.items = this.filmsService.search(term);
    };
    return FilmSearchComponent;
}());
FilmSearchComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './film-search.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css'],
        providers: [films_service_1.FilmsService]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        films_service_1.FilmsService])
], FilmSearchComponent);
exports.FilmSearchComponent = FilmSearchComponent;
//# sourceMappingURL=film-search.component.js.map