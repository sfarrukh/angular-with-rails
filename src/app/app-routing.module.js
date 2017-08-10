"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var pishak_component_1 = require("./pishak.component");
var actors_component_1 = require("./actors.component");
var actor_detail_component_1 = require("./actor-detail.component");
var actor_form_component_1 = require("./actor-form.component");
var films_component_1 = require("./films.component");
var film_details_component_1 = require("./film-details.component");
var film_form_component_1 = require("./film-form.component");
var film_search_component_1 = require("./film-search.component");
var _0_plural_retrieval_1 = require("./0_plural_retrieval");
var routes = [
    { path: 'pishak', component: pishak_component_1.PishakComponent },
    { path: 'actors', component: actors_component_1.ActorsComponent },
    { path: 'actor-detail/:id', component: actor_detail_component_1.ActorDetailComponent },
    { path: 'actor-form', component: actor_form_component_1.ActorFormComponent },
    { path: 'films', component: films_component_1.FilmsComponent },
    { path: 'film-details/:id', component: film_details_component_1.FilmDetailsComponent },
    { path: 'film-form', component: film_form_component_1.FilmFormComponent },
    { path: 'film-search', component: film_search_component_1.FilmSearchComponent },
    { path: 'plural-retrieval', component: _0_plural_retrieval_1.PluralRetrieval }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map