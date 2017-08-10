"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var pishak_component_1 = require("./pishak.component");
var actors_component_1 = require("./actors.component");
var actor_detail_component_1 = require("./actor-detail.component");
var actor_form_component_1 = require("./actor-form.component");
var films_component_1 = require("./films.component");
var film_details_component_1 = require("./film-details.component");
var film_form_component_1 = require("./film-form.component");
var film_search_component_1 = require("./film-search.component");
var _0_plural_retrieval_1 = require("./0_plural_retrieval");
var pishak_service_1 = require("./pishak.service");
var actors_service_1 = require("./actors.service");
var films_service_1 = require("./films.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            // InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            pishak_component_1.PishakComponent,
            actors_component_1.ActorsComponent,
            films_component_1.FilmsComponent,
            actor_detail_component_1.ActorDetailComponent,
            actor_form_component_1.ActorFormComponent,
            film_details_component_1.FilmDetailsComponent,
            film_form_component_1.FilmFormComponent,
            _0_plural_retrieval_1.PluralRetrieval,
            film_search_component_1.FilmSearchComponent,
        ],
        providers: [
            pishak_service_1.PishakService,
            actors_service_1.ActorsService,
            films_service_1.FilmsService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map