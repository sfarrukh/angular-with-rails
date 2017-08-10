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
var actors_service_1 = require("./actors.service");
var Observable_1 = require("rxjs/Observable");
var Subject_1 = require("rxjs/Subject");
// Observable class extensions
require("rxjs/add/observable/of");
// Observable operators
require("rxjs/add/operator/catch");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var ActorsComponent = (function () {
    function ActorsComponent(actorsService, router) {
        this.actorsService = actorsService;
        this.router = router;
        this.bogicho = [];
        this.mode = 'Observable';
        this.subject = new Subject_1.Subject();
    }
    ActorsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searched_actors = this.subject
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.actorsService.search(term)
            : Observable_1.Observable.of([]); })
            .catch(function (error) {
            console.log(error);
            return Observable_1.Observable.of([]);
        });
    };
    ActorsComponent.prototype.search = function (term) {
        this.subject.next(term);
    };
    ActorsComponent.prototype.showActors = function () {
        var _this = this;
        this.actorsService.getActors()
            .subscribe(function (res) { return _this.bogicho = res; }, function (error) { return _this.errorMessage = error; });
    };
    ActorsComponent.prototype.gotoDetail = function (ok) {
        // alert(ok.first_name);
        this.router.navigate(['/actor-detail', ok.actor_id]);
    };
    ActorsComponent.prototype.gotoActorForm = function () {
        this.router.navigate(['/actor-form']);
    };
    return ActorsComponent;
}());
ActorsComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './actors.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css'],
    }),
    __metadata("design:paramtypes", [actors_service_1.ActorsService,
        router_1.Router])
], ActorsComponent);
exports.ActorsComponent = ActorsComponent;
//# sourceMappingURL=actors.component.js.map