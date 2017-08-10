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
var actors_service_1 = require("./actors.service");
require("rxjs/add/operator/map");
var ActorFormComponent = (function () {
    function ActorFormComponent(http, actorsService, router) {
        this.http = http;
        this.actorsService = actorsService;
        this.router = router;
        this.actorsUrl = 'http://localhost:4200/api/actors';
    }
    ActorFormComponent.prototype.ngOnInit = function () {
        this.form = new forms_1.FormGroup({
            first_name: new forms_1.FormControl(''),
            last_name: new forms_1.FormControl(''),
        });
    };
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
    ActorFormComponent.prototype.onSubmit = function (formData) {
        var _this = this;
        this.actorsService.createActor(formData)
            .subscribe(function (babanji) {
            _this.form = babanji;
            _this.router.navigate(['actors']);
        });
    };
    return ActorFormComponent;
}());
ActorFormComponent = __decorate([
    core_1.Component({
        selector: '',
        templateUrl: './actor-form.component.html',
        styleUrls: ['./bootstrap.min.css', '../../stylesheets/styled.css']
    }),
    __metadata("design:paramtypes", [http_1.Http,
        actors_service_1.ActorsService,
        router_1.Router])
], ActorFormComponent);
exports.ActorFormComponent = ActorFormComponent;
//# sourceMappingURL=actor-form.component.js.map