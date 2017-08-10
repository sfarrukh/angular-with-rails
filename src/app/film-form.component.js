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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var films_service_1 = require("./films.service");
require("rxjs/add/operator/map");
var FilmFormComponent = (function () {
    function FilmFormComponent(http, filmsService, router) {
        this.http = http;
        this.filmsService = filmsService;
        this.router = router;
        this.filmsUrl = 'http://localhost:4200/api/films';
    }
    FilmFormComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            title: new forms_1.FormControl(''),
            language_id: new forms_1.FormControl(''),
            rental_duration: new forms_1.FormControl(''),
            rental_rate: new forms_1.FormControl(''),
            replacement_cost: new forms_1.FormControl(''),
            release_year: new forms_1.FormControl(''),
            description: new forms_1.FormControl(''),
        });
    };
    FilmFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.filmsService.createFilm(formData)
            .subscribe(function (babanji) {
            _this.form = babanji;
            _this.router.navigate(['films']);
        });
    };
    return FilmFormComponent;
}());
FilmFormComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: './film-form.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css']
    }),
    __metadata("design:paramtypes", [http_1.Http,
        films_service_1.FilmsService,
        router_1.Router])
], FilmFormComponent);
exports.FilmFormComponent = FilmFormComponent;
//# sourceMappingURL=film-form.component.js.map