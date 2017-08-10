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
var ActorsService = (function () {
    function ActorsService(http) {
        this.http = http;
        // private actorsUrl = 'api/actors/actors.json';
        this.actorsUrl = 'http://localhost:4200/api/actors';
    }
    ActorsService.prototype.getActors = function () {
        return this.http.get(this.actorsUrl)
            .map(function (res) { return res.json(); });
        //  .catch(this.handleError);
    };
    ActorsService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    ActorsService.prototype.handleError = function (error) {
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
    ActorsService.prototype.getActor = function (id) {
        var url = this.actorsUrl + "/" + id;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ActorsService.prototype.getActorsFilms = function (id) {
        var url = this.actorsUrl + "/" + id + "/films";
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    ActorsService.prototype.createActor = function (formData) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.actorsUrl, formData, options)
            .map(function (res) { return res.json(); });
        // .catch(this.handleError)
    };
    ActorsService.prototype.search = function (term) {
        var url = ' http://localhost:4200/api/search/actors/?actor_search=';
        return this.http
            .get(url + term)
            .map(function (res) { return res.json(); });
    };
    ActorsService.prototype.link = function (actor_id, film_id) {
        var url = 'http://localhost:4200/api/actors';
        return this.http
            .get(url + "/" + actor_id + "/link?film_id=" + film_id)
            .map(function (res) { return res.json(); });
    };
    ActorsService.prototype.unlink = function (actor_id, film_id) {
        // alert("Hello "+actor_id+" "+film_id);
        var url = 'http://localhost:4200/api/actors';
        return this.http
            .get(url + "/" + actor_id + "/unlink?film_id=" + film_id)
            .map(function (res) { return res.json(); });
    };
    return ActorsService;
}());
ActorsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ActorsService);
exports.ActorsService = ActorsService;
//# sourceMappingURL=actors.service.js.map