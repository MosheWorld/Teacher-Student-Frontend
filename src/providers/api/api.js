var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http) {
        this.http = http;
        this.endPoint = "http://localhost:8000/";
    }
    ApiProvider.prototype.httpGet = function (path) {
        var _this = this;
        var url = this.endPoint + path;
        return this.http.get(url, null).map(function (res) { return _this.checkResultModel(res); });
    };
    ApiProvider.prototype.httpPost = function (path, data) {
        var _this = this;
        var url = this.endPoint + path;
        var header = this.buildHeader();
        return this.http.post(url, JSON.stringify(data), { headers: header }).map(function (res) { return _this.checkResultModel(res); });
    };
    ApiProvider.prototype.buildHeader = function () {
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        return headers;
    };
    ApiProvider.prototype.checkResultModel = function (res) {
        try {
            var dataCovertedToJson = res.json();
            return dataCovertedToJson;
        }
        catch (ex) {
            return null;
        }
    };
    ApiProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Http])
    ], ApiProvider);
    return ApiProvider;
}());
export { ApiProvider };
//# sourceMappingURL=api.js.map