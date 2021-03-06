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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var FilmsService = (function () {
    function FilmsService(http) {
        this.http = http;
        this.filmsUrl = 'http://localhost:4200/api/films';
    }
    FilmsService.prototype.getFilms = function () {
        return this.http.get(this.filmsUrl)
            .map(function (res) { return res.json(); });
        //  .catch(this.handleError);
    };
    FilmsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    FilmsService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    FilmsService.prototype.getFilm = function (id) {
        var url = this.filmsUrl + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    FilmsService.prototype.getFilmsActors = function (id) {
        var url = this.filmsUrl + "/" + id + "/actors";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    FilmsService.prototype.createFilm = function (formData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.filmsUrl, formData, options)
            .map(function (res) { return res.json(); });
        // .catch(this.handleError)
    };
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
    FilmsService.prototype.search = function (term) {
        var url = ' http://localhost:4200/api/search/films/?film_search=';
        return this.http
            .get(url + term)
            .map(function (res) { return res.json(); });
    };
    return FilmsService;
}());
FilmsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FilmsService);
exports.FilmsService = FilmsService;
//# sourceMappingURL=films.service.js.map