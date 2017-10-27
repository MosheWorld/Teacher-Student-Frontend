var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ApiProvider } from './../../providers/api/api';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
var ContactusPage = /** @class */ (function () {
    function ContactusPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.showErrorMessage = false;
    }
    ;
    ContactusPage.prototype.isFormValid = function () {
        if (this.fullName == null ||
            this.fullName === "" ||
            this.email == null ||
            this.email === "" ||
            this.contactReason == null ||
            this.contactReason === "" ||
            this.message == null ||
            this.message === "") {
            return false;
        }
        else {
            return true;
        }
    };
    ContactusPage.prototype.sendContactUsForm = function () {
        var _this = this;
        this.setErrorMessage(false);
        if (!this.isFormValid()) {
            this.setErrorMessage(true);
            return;
        }
        var data = {
            fullName: this.fullName,
            email: this.email,
            contactReason: this.contactReason,
            message: this.message
        };
        var loading = this.loadingCtrl.create({
            content: 'Sending information, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('contactus/create', data)
            .subscribe(function (success) {
            loading.dismiss();
            var alert = _this.createAlert('Request send successfully', 'Your request to contact you sent successfully.We\'ll contact you as soon as possible, thank you.');
            alert.present();
            _this.navCtrl.pop();
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
            alert.present();
        });
    };
    ContactusPage.prototype.clearContactUsForm = function () {
        this.setErrorMessage(false);
        this.fullName = "";
        this.email = "";
        this.contactReason = "";
        this.message = "";
    };
    ContactusPage.prototype.setErrorMessage = function (set) {
        this.showErrorMessage = set;
    };
    ContactusPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    ContactusPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contactus',
            templateUrl: 'contactus.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ApiProvider,
            LoadingController, AlertController])
    ], ContactusPage);
    return ContactusPage;
}());
export { ContactusPage };
//# sourceMappingURL=contactus.js.map