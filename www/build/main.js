webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactusPage = (function () {
    function ContactusPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.showErrorMessage = false;
    }
    ContactusPage.prototype.isFormValid = function () {
        if (this.isStringNullOrEmpty(this.fullName) ||
            this.isStringNullOrEmpty(this.email) ||
            this.isStringNullOrEmpty(this.contactReason) ||
            this.isStringNullOrEmpty(this.message)) {
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
            content: 'Searching for teachers, please wait...'
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
    ContactusPage.prototype.isStringNullOrEmpty = function (str) {
        if (str == null || str === "") {
            return true;
        }
        else {
            return false;
        }
    };
    return ContactusPage;
}());
ContactusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contactus',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white;">Contact Us</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 38px; font-weight: 300;">\n            What is your opinion?\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          You can send us anything you wish, feedback, recommendation, new ideas, bugs you\'ve found, or even send message for fun,\n          we\'ll try to comment as soon as possible.\n        </ion-col>\n      </ion-row>\n\n      <!-- Direct contant -->\n      <ion-row text-left>\n        <ion-col col-12>\n          <font style="color: orange">You can contact the owner of this application by:</font>\n        </ion-col>\n        <ion-col col-12>\n          <font style="color: rgb(194, 187, 187)">Email: mmoshikoo@gmail.com</font>\n        </ion-col>\n        <ion-col col-12>\n          <font style="color: rgb(194, 187, 187)">Phone: 0542477052</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n      <ion-list>\n\n        <!-- Full name -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Full name</ion-label>\n              <ion-input type="text" [(ngModel)]="fullName"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Reason to contact -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label>Reason to contact</ion-label>\n              <ion-select [(ngModel)]="contactReason">\n                <ion-option>Suggestion</ion-option>\n                <ion-option>Investment</ion-option>\n                <ion-option>Careers</ion-option>\n                <ion-option>Complain</ion-option>\n                <ion-option>Bug report</ion-option>\n                <ion-option>Other</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Your message</ion-label>\n              <ion-textarea rows="4" type="text" [(ngModel)]="message"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-list>\n\n      <!-- Error message -->\n      <ion-row *ngIf="showErrorMessage" text-center>\n        <ion-col col-12>\n          <font style="color: red;">The fields are not valid.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Buttons -->\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button outline color="primary" block (click)="sendContactUsForm();">Send</button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button outline color="danger" block (click)="clearContactUsForm();">Clear</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavoritesPage = (function () {
    function FavoritesPage(navCtrl, navParams, favoritesManagerProvider, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.apiProvider = apiProvider;
        this.tabRef = this.navCtrl.parent;
        this.userHaveFavorites = false;
        var listOfTeacherID = this.favoritesManagerProvider.getFavorites();
        this.bootstrapFavoritePage(listOfTeacherID);
    }
    FavoritesPage.prototype.goPage = function (page) {
        switch (page) {
            case 'search':
                this.navCtrl.pop();
                this.tabRef.select(1);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    FavoritesPage.prototype.bootstrapFavoritePage = function (listOfTeacherID) {
        if (listOfTeacherID == null || listOfTeacherID.length == 0) {
            this.userHaveFavorites = false;
        }
        else {
            this.userHaveFavorites = true;
            this.getTeachersByID(listOfTeacherID);
        }
    };
    FavoritesPage.prototype.getTeachersByID = function (listOfTeacherID) {
        var data = {
            "listOfTeacherID": listOfTeacherID
        };
        this.apiProvider.httpPost('teacher/getlistofteachersbyid', data)
            .subscribe(function (success) {
            console.log(success);
        }, function (failure) {
            console.log(failure);
        });
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/'<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>\n      <font style="color: white;">Favorites</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 35px; font-weight: 300;">Favorites</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          This is all the favorites teachers you\'ve saved, you can manage all your teachers here and save them for the future.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font style="color: orange">*Tip: </font>\n          In order to keep your teachers quickly accessed, do not remove StudyHub cache from your app.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- No favorites case -->\n      <div *ngIf="!userHaveFavorites">\n        <!-- No teachers as favorites text -->\n        <ion-row text-center>\n          <ion-col col-12>\n            You have none in your favorite list.\n          </ion-col>\n        </ion-row>\n\n        <!-- Search for teachers button -->\n        <ion-row text-center>\n          <ion-col col-12>\n            <button ion-button icon-start outline (click)="goPage(\'search\');">\n              <ion-icon name="ios-search"></ion-icon>\n              Search for teacher\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <div *ngIf="userHaveFavorites">\n        Yup\n      </div>\n\n    </ion-grid>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JointeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JointeacherPage = (function () {
    function JointeacherPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.teachesInstitutions = [];
        this.showErrorMessage = false;
    }
    JointeacherPage.prototype.createTeacher = function () {
        var _this = this;
        this.setErrorMessage(false);
        this.convertStringToInteger();
        if (!this.isModelValid()) {
            this.setErrorMessage(true);
            return;
        }
        var newTeacherData = this.createNewTeacherDataJson();
        var loading = this.loadingCtrl.create({
            content: 'Sending information, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/create', newTeacherData)
            .subscribe(function (success) {
            loading.dismiss();
            var alert = _this.createAlert('Welcome new teacher', 'Your account has been created successfully, this is your teacher page, thank you and good luck.');
            alert.present();
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Something went wrong', 'Please try again later, we have some server issues.');
            alert.present();
        });
    };
    JointeacherPage.prototype.convertStringToInteger = function () {
        if (this.priceFrom != null) {
            this.priceFrom = parseInt(this.priceFrom.toString());
        }
        if (this.priceTo != null) {
            this.priceTo = parseInt(this.priceTo.toString());
        }
        if (this.age != null) {
            this.age = parseInt(this.age.toString());
        }
    };
    JointeacherPage.prototype.isModelValid = function () {
        if (this.teachesAt < 0 ||
            this.priceTo == null || this.priceTo > 200 ||
            this.priceFrom == null || this.priceFrom < 0 ||
            this.priceFrom > this.priceTo ||
            this.age == null || this.age < 0 || this.age > 120 ||
            this.isStringNullOrEmpty(this.phone) ||
            this.isStringNullOrEmpty(this.email) ||
            this.isStringNullOrEmpty(this.gender) ||
            this.isStringNullOrEmpty(this.lastName) ||
            this.isStringNullOrEmpty(this.firstName) ||
            this.isStringNullOrEmpty(this.personalMessage) ||
            this.teachesInstitutions == null || this.teachesInstitutions.length === 0) {
            return false;
        }
        else {
            return true;
        }
    };
    JointeacherPage.prototype.setErrorMessage = function (set) {
        this.showErrorMessage = set;
    };
    JointeacherPage.prototype.isStringNullOrEmpty = function (str) {
        if (str == null || str === "") {
            return true;
        }
        else {
            return false;
        }
    };
    JointeacherPage.prototype.createNewTeacherDataJson = function () {
        var _this = this;
        this.teachesAt = parseInt(this.teachesAt.toString());
        this.teachesInstitutions.forEach(function (value, index) {
            _this.teachesInstitutions[index] = parseInt(value.toString());
        });
        var newTeacher = {
            age: this.age,
            priceTo: this.priceTo,
            priceFrom: this.priceFrom,
            phone: this.phone,
            email: this.email,
            gender: this.gender,
            lastName: this.lastName,
            firstName: this.firstName,
            personalMessage: this.personalMessage,
            teachesAt: this.teachesAt,
            teachesInstitutions: this.teachesInstitutions
        };
        return newTeacher;
    };
    JointeacherPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    return JointeacherPage;
}());
JointeacherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-jointeacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white">Join as Teacher</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 35px; font-weight: 300;">Become a next-generation teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          In order to join as teacher you must fill all the following fields. Be specific with your information to gain more good resume\n          and comments from students. Remember, good instructor is remembered for lifetime.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font style="color: orange">*Tip: </font>\n          Give full information at the relevant fields to interest more students.\n        </ion-col>\n      </ion-row>\n\n      <!-- Price warning -->\n      <ion-row>\n        <ion-col col-12>\n          <font style="color: red">*The price per lesson is for one hour*</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center style="padding-top: 15px;padding-bottom: 15px;">\n        <ion-col col-12>\n          <u>\n            <b>Fill teacher form</b>\n          </u>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n\n      <ion-list>\n\n        <!-- First name and Last name -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>First name</ion-label>\n              <ion-input type="text" [(ngModel)]="firstName"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Last name</ion-label>\n              <ion-input type="text" [(ngModel)]="lastName"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Age and Gender -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Age</ion-label>\n              <ion-input type="number" [(ngModel)]="age"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Gender</ion-label>\n              <ion-select [(ngModel)]="gender" interface="popover">\n                <ion-option value="Male">Male</ion-option>\n                <ion-option value="Female">Female</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email and Phone -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Phone</ion-label>\n              <ion-input type="tel" [(ngModel)]="phone"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Price from and Proce to -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>From price</ion-label>\n              <ion-input type="number" [(ngModel)]="priceFrom"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>To price\n                <font style="color: red;font-size: 10px;">Max 200</font>\n              </ion-label>\n              <ion-input type="number" [(ngModel)]="priceTo"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Teaches subjects -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Teach at</ion-label>\n              <ion-select [(ngModel)]="teachesAt" interface="popover">\n                <ion-option value="0">Student\'s house</ion-option>\n                <ion-option value="1">Academic institution</ion-option>\n                <ion-option value="2">Both</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Teaches institutions</ion-label>\n              <ion-select [(ngModel)]="teachesInstitutions" multiple="true">\n                <ion-option value="0">Holon Institute Of Technology</ion-option>\n                <ion-option value="1">Technion</ion-option>\n                <ion-option value="2">Tel-Aviv University</ion-option>\n                <ion-option value="4">Ben Gurion University</ion-option>\n                <ion-option value="8">Hebrew University</ion-option>\n                <ion-option value="16">Bar-Ilan University</ion-option>\n                <ion-option value="32">Tel-Aviv Jaffa Academic College</ion-option>\n                <ion-option value="64">IDC Herzliya</ion-option>\n                <ion-option value="128">Ariel University</ion-option>\n                <ion-option value="256">Haifa University</ion-option>\n                <ion-option value="512">Sapir Academic College</ion-option>\n                <ion-option value="1024">ORT Braude Collegeof Engineering</ion-option>\n                <ion-option value="2048">The Open University</ion-option>\n                <ion-option value="4096">College of Management</ion-option>\n                <ion-option value="8192">Achva Academic Campus</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Personal Message -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Personal message</ion-label>\n              <ion-textarea rows="5" type="text" [(ngModel)]="personalMessage"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-list>\n\n      <!-- Error message -->\n      <ion-row *ngIf="showErrorMessage" text-center>\n        <ion-col col-12>\n          <font style="color: red;">The fields are not valid.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Send form button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block (click)="createTeacher();">Make me a teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["a" /* AlertController */]])
], JointeacherPage);

//# sourceMappingURL=jointeacher.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__teacherslist_teacherslist__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.brightness = 20;
        this.saturation = 0;
        this.warmth = 1300;
        this.structure = { lower: 30, upper: 140 };
        this.gender = "Both";
        this.showErrorMessage = false;
    }
    SearchPage.prototype.searchTeachers = function () {
        var _this = this;
        this.setErrorMessage(false);
        this.convertStringToInteger();
        if (!this.isModelValid()) {
            this.setErrorMessage(true);
            return;
        }
        this.gender = this.gender === 'Both' ? "" : this.gender;
        var searchTeacherModel = {
            fromPrice: this.structure.lower,
            toPrice: this.structure.upper,
            teachesAt: this.teachesAt,
            teachesInstitutions: this.teachesInstitutions,
            gender: this.gender
        };
        var loading = this.loadingCtrl.create({
            content: 'Getting information, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/search', searchTeacherModel)
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacherslist_teacherslist__["a" /* TeacherslistPage */], { teacherSearchList: success });
                return;
            }
            var alert = _this.createAlert('Couldn\'t find the teachers', 'Please make the search filters to aim to more options, the teachers you asked for doesn\'t exist yet.');
            alert.present();
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
            alert.present();
        });
    };
    SearchPage.prototype.getAllTeachers = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Getting information, please wait...'
        });
        loading.present();
        this.apiProvider.httpGet('teacher/getall')
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__teacherslist_teacherslist__["a" /* TeacherslistPage */], { teacherSearchList: success });
                return;
            }
            var alert = _this.createAlert('Couldn\'t find the teachers', 'Please make the search filters to aim to more options, the teachers you asked for doesn\'t exist yet.');
            alert.present();
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Request failed to send', 'The request has been failed for some reason, please try again later.');
            alert.present();
        });
    };
    SearchPage.prototype.convertStringToInteger = function () {
        if (this.teachesAt != null) {
            this.teachesAt = parseInt(this.teachesAt.toString());
        }
        if (this.teachesInstitutions != null) {
            this.teachesInstitutions = parseInt(this.teachesInstitutions.toString());
        }
    };
    SearchPage.prototype.isModelValid = function () {
        if (this.structure == null ||
            this.gender == null || this.gender === "" ||
            this.teachesAt == null || this.teachesAt < 0 ||
            this.structure.lower == null || this.structure.lower < 0 ||
            this.teachesInstitutions == null || this.teachesInstitutions < 0 ||
            this.structure.upper == null || this.structure.upper > 200 ||
            this.structure.lower > this.structure.upper) {
            return false;
        }
        else {
            return true;
        }
    };
    SearchPage.prototype.setErrorMessage = function (set) {
        this.showErrorMessage = set;
    };
    SearchPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white;">Search Teacher</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 35px; font-weight: 300;">Search for a teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle 1 -->\n      <ion-row>\n        <ion-col col-12>\n          It\'s easy, it\'s fast, just fill the fields you want that your teacher will fit and we will find for you what you\'ve requested.\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle 2 -->\n      <ion-row>\n        <ion-col col-12>\n          We\n          <b>\n            <u>don\'t</u>\n          </b> force you to talk to them in our app, take the conversation to\n          <font style="color: rgb(26, 184, 26);">WhatsApp</font> or other platform as you want, good luck!\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font style="color: orange;">*Tip: </font> Be specific with your filter details in order to get the best results.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Find your next teacher title -->\n      <ion-row text-center style="padding-top: 15px;padding-bottom: 15px;">\n        <ion-col col-12>\n          Find your next teacher\n        </ion-col>\n      </ion-row>\n      <ion-list>\n\n        <!-- Get all teachers button -->\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button outline (click)="getAllTeachers();" small>Get all teachers</button>\n          </ion-col>\n        </ion-row>\n\n        <!-- Price range -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-list-header>\n              Price per hour\n              <ion-badge item-end color="dark">From: {{structure.lower}}</ion-badge>\n              <ion-badge item-end color="dark">To: {{structure.upper}}</ion-badge>\n            </ion-list-header>\n            <ion-item>\n              <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark" min="0" max="200">\n                <ion-label range-left>0</ion-label>\n                <ion-label range-right>200</ion-label>\n              </ion-range>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Teaches institutions -->\n        <ion-row>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Teach at</ion-label>\n              <ion-select [(ngModel)]="teachesAt" interface="popover">\n                <ion-option value="0">Student\'s house</ion-option>\n                <ion-option value="1">Academic institution</ion-option>\n                <ion-option value="2">Both</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n            <ion-item>\n              <ion-label floating>Teaches institutions</ion-label>\n              <ion-select [(ngModel)]="teachesInstitutions">\n                <ion-option value="0">Holon Institute Of Technology</ion-option>\n                <ion-option value="1">Technion</ion-option>\n                <ion-option value="2">Tel-Aviv University</ion-option>\n                <ion-option value="4">Ben-Gurion University</ion-option>\n                <ion-option value="8">Hebrew University</ion-option>\n                <ion-option value="16">Bar-Ilan University</ion-option>\n                <ion-option value="32">Tel-Aviv Jaffa Academic College</ion-option>\n                <ion-option value="64">IDC Herzliya</ion-option>\n                <ion-option value="128">Ariel University</ion-option>\n                <ion-option value="256">Haifa University</ion-option>\n                <ion-option value="512">Sapir Academic College</ion-option>\n                <ion-option value="1024">ORT Braude Collegeof Engineering</ion-option>\n                <ion-option value="2048">The Open University</ion-option>\n                <ion-option value="4096">College of Management</ion-option>\n                <ion-option value="8192">Achva Academic Campus</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Gender -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Prefered gender</ion-label>\n              <ion-select [(ngModel)]="gender" interface="popover">\n                <ion-option value="Male">Male</ion-option>\n                <ion-option value="Female">Female</ion-option>\n                <ion-option value="Both">Doesn\'t matter</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n      </ion-list>\n\n      <!-- Error message -->\n      <ion-row *ngIf="showErrorMessage" text-center>\n        <ion-col col-12>\n          <font style="color: red;">The fields are not valid.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Search teachers button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button (click)="searchTeachers()" block>Search for teacher</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TeacherslistPage = (function () {
    function TeacherslistPage(navCtrl, navParams, modalCtrl, favoritesManagerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.teachersListNotChange = [];
        this.teachers = [];
        var tempArray = this.navParams.get('teacherSearchList');
        for (var _i = 0, tempArray_1 = tempArray; _i < tempArray_1.length; _i++) {
            var item = tempArray_1[_i];
            if (this.favoritesManagerProvider.isIDExist(item._id)) {
                item.isTeacherFavorited = true;
            }
            else {
                item.isTeacherFavorited = false;
            }
        }
        this.teachers = __WEBPACK_IMPORTED_MODULE_0_lodash__["sortBy"](tempArray, [function (o) {
                return o.firstName;
            }]);
        this.teachersListNotChange = this.teachers.slice();
    }
    TeacherslistPage.prototype.expandTeacherInformation = function (index) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__["a" /* SingleteacherPage */], { teacher: this.teachers[index] });
        modal.onDidDismiss(function (data) {
            _this.teachers[index].isTeacherFavorited = data;
            for (var _i = 0, _a = _this.teachersListNotChange; _i < _a.length; _i++) {
                var teacher = _a[_i];
                if (teacher._id === _this.teachers[index]._id) {
                    teacher.isTeacherFavorited = data;
                    break;
                }
            }
        });
        modal.present();
    };
    TeacherslistPage.prototype.onInput = function (event) {
        var val = event.target.value;
        if (val == null || val === '') {
            this.teachers = this.teachersListNotChange;
            return;
        }
        if (val && val.trim() !== '') {
            this.teachers = this.teachersListNotChange.filter(function (item) {
                var fullName = item.firstName + " " + item.lastName;
                return fullName.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    return TeacherslistPage;
}());
TeacherslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-teacherslist',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white;">Teacher List</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 25px; font-weight: 300;">Teachers that fits to your requirements</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n          We\'ve searched in our databases to give you the best results of the teachers that suggest themselves. Go and look at them\n          and pick one.\n        </ion-col>\n      </ion-row>\n\n      <!-- Rank and comment text -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font style="color: orange">The power is in your hands, rank and comment to make the community grow and be better.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Click on the card to expant it text -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font style="font-size: 15px; font-weight: 300;color:rgba(255,255,255,0.6);">\n            <font style="color: white;">*</font> In order to see all the details on the teacher click on the card to expand it\n            <font style="color: white;">*</font>\n          </font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Search bar -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-toolbar color="m-darker">\n            <ion-searchbar [showCancelButton]="shouldShowCancel" (ionInput)="onInput($event)" placeholder="Search for teacher name" type="text"\n              animated="true" debounce="100">\n            </ion-searchbar>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n\n      <!-- Teachers wasn\'t found -->\n      <ion-row text-center *ngIf="teachers.length == 0">\n        <ion-col col-12>\n          <b>Not even single teacher was found, sorry.</b>\n        </ion-col>\n      </ion-row>\n\n      <!-- List of teachers -->\n      <div *ngFor="let teacher of teachers; let i = index;">\n        <ion-card (click)="expandTeacherInformation(i);">\n\n          <!-- Image -->\n          <ion-row>\n            <ion-col col-10 text-left>\n              <img style="width: 150px;" src="assets\\imgs\\imageNotFound.jpg" />\n            </ion-col>\n            <ion-col *ngIf="teacher.isTeacherFavorited" col-2 text-right>\n              <ion-icon name="ios-bookmark-outline" style="font-size: 35px;"></ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <!-- Content - Stars should be modified. -->\n\n          <ion-card-content>\n\n            <!-- Name and Age -->\n            <ion-row>\n              <ion-col col-12>\n                <ion-card-title>\n                  <font style="font-size: 20px;">{{teacher.firstName}} {{teacher.lastName}}</font>\n                  -\n                  <i>{{teacher.gender}} {{teacher.age}}</i>\n                </ion-card-title>\n              </ion-col>\n            </ion-row>\n\n            <!-- Price -->\n            <ion-row>\n              <ion-col col-12>\n                <u>\n                  <b>Price:</b>\n                </u>\n                <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                <font style="font-size: 10px">ILS</font>\n              </ion-col>\n            </ion-row>\n\n            <!-- Rate -->\n            <ion-row>\n              <ion-col col-12>\n                <u>\n                  <b>Rating:</b>\n                </u>\n                <rating readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"></rating>\n              </ion-col>\n            </ion-row>\n\n            <!-- Message -->\n            <ion-row>\n              <ion-col col-12>\n                <u>\n                  <b>Message:</b>\n                </u>\n                {{teacher.personalMessage}}\n              </ion-col>\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], TeacherslistPage);

//# sourceMappingURL=teacherslist.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toaster_toaster__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SingleteacherPage = (function () {
    function SingleteacherPage(navCtrl, navParams, viewCtrl, apiProvider, loadingCtrl, alertCtrl, favoritesManagerProvider, toasterProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.toasterProvider = toasterProvider;
        this.rate = 3;
        this.showErrorMessage = false;
        this.showRecommendationsBoolean = false;
        this.alreadyAddedRecommend = false;
        this.isTeacherFavorited = false;
        this.teacher = this.navParams.get('teacher');
        this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
    }
    SingleteacherPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.isTeacherFavorited);
    };
    SingleteacherPage.prototype.toggleRecommendations = function () {
        this.showRecommendationsBoolean = !this.showRecommendationsBoolean;
    };
    SingleteacherPage.prototype.addNewRecommend = function () {
        var _this = this;
        this.showErrorMessage = false;
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
            return;
        }
        var newRecommendData = {
            "id": this.teacher._id,
            "recommendData": {
                "fullName": this.fullName,
                "email": this.email,
                "message": this.message,
                "rate": this.rate
            }
        };
        var loading = this.loadingCtrl.create({
            content: 'Adding your recommendation, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/addrecommend', newRecommendData)
            .subscribe(function (success) {
            loading.dismiss();
            var alert = _this.createAlert('Your recommendation has been added', 'Thank you for posting recommendation for this teacher, thanks for making our community better.');
            alert.present();
            _this.alreadyAddedRecommend = true;
            _this.showRecommendationsBoolean = false;
            _this.teacher.recommendations.push(newRecommendData.recommendData);
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Failed to add recommendation', 'The request has been failed for some reason, please try again later.');
            alert.present();
        });
    };
    SingleteacherPage.prototype.addFavorite = function () {
        this.favoritesManagerProvider.addID(this.teacher._id);
        this.isTeacherFavorited = true;
        this.toasterProvider.presentToast("Teacher has been added to favorites.");
    };
    SingleteacherPage.prototype.removeFavorite = function () {
        this.favoritesManagerProvider.removeID(this.teacher._id);
        this.isTeacherFavorited = false;
        this.toasterProvider.presentToast("Teacher has been removed from favorites.");
    };
    SingleteacherPage.prototype.isModelValid = function () {
        this.convertRateToInteger();
        if (this.rate == null || this.rate < 0 || this.rate > 5 ||
            this.isStringNullOrEmpty(this.email) ||
            this.isStringNullOrEmpty(this.fullName) ||
            this.isStringNullOrEmpty(this.message)) {
            return false;
        }
        else {
            return true;
        }
    };
    SingleteacherPage.prototype.isStringNullOrEmpty = function (str) {
        if (str == null || str === "") {
            return true;
        }
        else {
            return false;
        }
    };
    SingleteacherPage.prototype.convertRateToInteger = function () {
        if (this.rate != null) {
            this.rate = parseInt(this.rate.toString());
        }
    };
    SingleteacherPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    return SingleteacherPage;
}());
SingleteacherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-singleteacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss();">\n        <font style="color: white;">Close</font>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>\n      <font style="color: white;">{{teacher.firstName}} {{teacher.lastName}}</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <!-- Image -->\n    <ion-row>\n      <ion-col col-7 text-left>\n        <img style="width: 150px;" src="assets\\imgs\\imageNotFound.jpg" />\n      </ion-col>\n      <ion-col *ngIf="!isTeacherFavorited" col-5 text-right>\n        <button ion-button icon-start small outline color="dark" (click)="addFavorite()">\n          <ion-icon name="star"></ion-icon>\n          Add favorite\n        </button>\n      </ion-col>\n      <ion-col *ngIf="isTeacherFavorited" col-5 text-right>\n        <button ion-button icon-start small outline color="dark" (click)="removeFavorite()">\n          <ion-icon name="star"></ion-icon>\n          Remove favorite\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <!-- First name and Last name -->\n    <ion-row>\n      <ion-col col-12>\n        <font style="font-size: 20px;">\n          <i>{{teacher.firstName}} {{teacher.lastName}}</i>\n        </font> -\n        <i>{{teacher.gender}}, {{teacher.age}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Phone -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Phone: </b>\n        <i>{{teacher.phone}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Email -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Email: </b>\n        <i>{{teacher.email}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Prices -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Price: </b>\n        <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n        <font style="font-size: 10px">ILS</font>\n      </ion-col>\n    </ion-row>\n\n    <!-- Teaches At -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Teaches at:</b> {{1|teachesAt}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Teaches Institutions -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Teaches at Institutions:</b>\n      </ion-col>\n      <ion-col col-12 *ngFor="let subject of teacher.teachesInstitutions">\n        - {{subject | teachesInstitutions}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Message -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Personal message: </b>{{teacher.personalMessage}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Recommendations Text and Add recommend icon -->\n    <ion-row>\n      <ion-col col-10 text-left>\n        <b>\n          <u>Recommendations:</u>\n        </b>\n      </ion-col>\n      <ion-col col-2 text-right *ngIf="!alreadyAddedRecommend">\n        <ion-icon style="font-size: 30px" name="ios-add-circle-outline" (click)="toggleRecommendations()"></ion-icon>\n      </ion-col>\n      <ion-col col-2 text-right *ngIf="alreadyAddedRecommend">\n        <ion-icon style="font-size: 30px" name="md-done-all"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- Show recommendation -->\n    <div *ngIf="showRecommendationsBoolean" text-center>\n\n      <ion-list>\n\n        <!-- Add Recommendations text -->\n        <ion-row>\n          <ion-col col-12>\n            <b>\n              <u>Add recommendations:</u>\n            </b>\n          </ion-col>\n        </ion-row>\n\n        <!-- Full name input -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Full name</ion-label>\n              <ion-input type="text" [(ngModel)]="fullName"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email input -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Email</ion-label>\n              <ion-input type="email" [(ngModel)]="email"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Rate input -->\n        <ion-row>\n          <ion-col col-12>\n            <rating [(ngModel)]="rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"\n              nullable="false"></rating>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message input -->\n        <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Message</ion-label>\n              <ion-textarea rows="4" type="email" [(ngModel)]="message"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <!-- Error message -->\n        <ion-row *ngIf="showErrorMessage">\n          <ion-col col-12>\n            <font style="color: red;">The fields are not valid.</font>\n          </ion-col>\n        </ion-row>\n\n        <!-- Add button message -->\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button block outline (click)="addNewRecommend()" icon-start>\n              <ion-icon name="add"></ion-icon>Add</button>\n          </ion-col>\n        </ion-row>\n\n      </ion-list>\n\n    </div>\n\n    <!-- Recommendations List -->\n    <ion-row *ngFor="let recommend of teacher.recommendations" style="border-bottom: 1px solid #b18b22;">\n      <ion-col col-12>\n        {{recommend.fullName}} - {{recommend.rate}}\n      </ion-col>\n      <ion-col col-12>\n        - {{recommend.message}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_toaster_toaster__["a" /* ToasterProvider */]])
], SingleteacherPage);

//# sourceMappingURL=singleteacher.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		287,
		5
	],
	"../pages/favorites/favorites.module": [
		288,
		4
	],
	"../pages/jointeacher/jointeacher.module": [
		289,
		3
	],
	"../pages/search/search.module": [
		290,
		2
	],
	"../pages/singleteacher/singleteacher.module": [
		291,
		1
	],
	"../pages/teacherslist/teacherslist.module": [
		292,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalStorageProvider = (function () {
    function LocalStorageProvider(localStorageService) {
        this.localStorageService = localStorageService;
    }
    LocalStorageProvider.prototype.Set = function (key, value) {
        this.localStorageService.set(key, value);
    };
    LocalStorageProvider.prototype.Get = function (key) {
        return this.localStorageService.get(key);
    };
    LocalStorageProvider.prototype.Remove = function (key) {
        this.localStorageService.remove(key);
    };
    return LocalStorageProvider;
}());
LocalStorageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__["LocalStorageService"]])
], LocalStorageProvider);

//# sourceMappingURL=local-storage.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToasterProvider = (function () {
    function ToasterProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToasterProvider.prototype.presentToast = function (message, time, location) {
        if (time === void 0) { time = 3000; }
        if (location === void 0) { location = "buttom"; }
        var toast = this.toastCtrl.create({
            message: message,
            duration: time,
            position: location
        });
        toast.present();
    };
    return ToasterProvider;
}());
ToasterProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
], ToasterProvider);

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="ios-aperture-outline"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-contact',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contact\contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white;">Settings</font>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n  This page is in construction- fuck off\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jointeacher_jointeacher__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabRef = this.navCtrl.parent;
    }
    HomePage.prototype.goPage = function (page) {
        switch (page) {
            case 'search':
                this.tabRef.select(1);
                break;
            case 'contactme':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__contactus_contactus__["a" /* ContactusPage */]);
                break;
            case 'joinasteacher':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__jointeacher_jointeacher__["a" /* JointeacherPage */]);
                break;
            case 'favorites':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */]);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <font style="color: white;">StudyHub</font>\n    </ion-title>\n    <ion-buttons end icon-only style="color: #f5ae08;">\n      <div (click)="goPage(\'favorites\');">\n        <ion-icon name="ios-star"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-white" style="font-size: 43px; font-weight: 300;">Built for students and teachers</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          <div style="font-size: 20px; font-weight: 300;color:rgba(255,255,255,0.6);">\n            StudyHub is a study platform inspired by the way you work. You can find teachers\n            <font style="color: white;">from your home</font> and talk with them directly, Manage your teachers & Teach other people.\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <div style="font-size: 20px; font-weight: 300;color:rgba(255,255,255,0.6);">\n            <font style="color: white;">\n              <b>Keep it simple and fun</b>\n            </font>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Start using button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button color="secondary" (click)="goPage(\'search\');">\n            <b>Start using StudyHub</b>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <!-- White area -->\n  <div>\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center style="padding-top: 15px;padding-bottom: 15px;">\n        <ion-col col-12>\n          StudyHub for individuals\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for individuals subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font style="font-size: 17px;font-weight: 300;color: #586069;">As individual user at StudyHub you can find teachers around Israel, talk with them directly at WhatsApp, rank teachers\n            and tell your opinion about them.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers title -->\n      <ion-row text-center style="padding-top: 15px;padding-bottom: 15px;">\n        <ion-col col-12>\n          StudyHub for teachers\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font style="font-size: 17px;font-weight: 300;color: #586069;">\n            As a teacher at StudyHub you\'ll be shown at students searches over the app, you will have your own profile and you will be\n            able to manage it as you wish.\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Join as teacher button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button outline color="primary" (click)="goPage(\'joinasteacher\');" icon-start>\n            <ion-icon name="ios-person-add-outline"></ion-icon>\n            Join as teacher\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <hr>\n\n      <ion-row>\n        <ion-col col-12>\n          <font style="font-size: 25px;">\n            <b>StudyHub - Owner</b>\n          </font>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          Moshe Binieli\n        </ion-col>\n        <ion-col col-12>\n          mmoshikoo@gmail.com\n        </ion-col>\n        <ion-col col-12>\n          Computer Science student and Full Stack developer.\n        </ion-col>\n        <ion-col col-12>\n\n          <button ion-button outline color="dark" small icon-start (click)="goPage(\'contactme\');">\n            <ion-icon name="ios-contacts"></ion-icon>Contact us</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_search_search__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_toaster_toaster__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_teaches_at_teaches_at__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_jointeacher_jointeacher__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_teacherslist_teacherslist__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_singleteacher_singleteacher__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_local_storage_local_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_favorites_manager_favorites_manager__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pipes_teaches_institutions_teaches_institutions__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_18__pages_jointeacher_jointeacher__["a" /* JointeacherPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jointeacher/jointeacher.module#JointeacherPageModule', name: 'JointeacherPage', segment: 'jointeacher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/singleteacher/singleteacher.module#SingleteacherPageModule', name: 'SingleteacherPage', segment: 'singleteacher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacherslist/teacherslist.module#TeacherslistPageModule', name: 'TeacherslistPage', segment: 'teacherslist', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'StudyHub',
                storageType: 'localStorage'
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_jointeacher_jointeacher__["a" /* JointeacherPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_17__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_15__providers_toaster_toaster__["a" /* ToasterProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_local_storage_local_storage__["a" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_23__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */],
            __WEBPACK_IMPORTED_MODULE_22__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesAtPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeachesAtPipe = (function () {
    function TeachesAtPipe() {
    }
    TeachesAtPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var teachesAtValue = "";
        switch (value) {
            case 0:
                teachesAtValue = 'Home';
                break;
            case 1:
                teachesAtValue = 'Academic Institute';
                break;
            case 2:
                teachesAtValue = 'Both';
                break;
        }
        return teachesAtValue;
    };
    return TeachesAtPipe;
}());
TeachesAtPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'teachesAt',
    })
], TeachesAtPipe);

//# sourceMappingURL=teaches-at.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesInstitutionsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeachesInstitutionsPipe = (function () {
    function TeachesInstitutionsPipe() {
    }
    TeachesInstitutionsPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var teachesInstitutionsValue = "";
        switch (value) {
            case 0:
                teachesInstitutionsValue = 'Holon Institute Of Technology';
                break;
            case 1:
                teachesInstitutionsValue = 'Technion';
                break;
            case 2:
                teachesInstitutionsValue = 'Tel-Aviv University';
                break;
            case 4:
                teachesInstitutionsValue = 'Ben-Gurion Universit';
                break;
            case 8:
                teachesInstitutionsValue = 'Hebrew University';
                break;
            case 16:
                teachesInstitutionsValue = 'Bar-Ilan University';
                break;
            case 32:
                teachesInstitutionsValue = 'Tel-Aviv Jaffa Academic College';
                break;
            case 64:
                teachesInstitutionsValue = 'IDC Herzliya';
                break;
            case 128:
                teachesInstitutionsValue = 'Ariel University';
                break;
            case 256:
                teachesInstitutionsValue = 'Haifa University';
                break;
            case 512:
                teachesInstitutionsValue = 'Sapir Academic College';
                break;
            case 1024:
                teachesInstitutionsValue = 'ORT Braude Collegeof Engineering';
                break;
            case 2048:
                teachesInstitutionsValue = 'The Open University';
                break;
            case 4096:
                teachesInstitutionsValue = 'College of Management';
                break;
            case 8192:
                teachesInstitutionsValue = 'Achva Academic Campus';
                break;
        }
        return teachesInstitutionsValue;
    };
    return TeachesInstitutionsPipe;
}());
TeachesInstitutionsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'teachesInstitutions',
    })
], TeachesInstitutionsPipe);

//# sourceMappingURL=teaches-institutions.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiProvider = (function () {
    function ApiProvider(http) {
        this.http = http;
        // private endPoint: string = "http://localhost:8000/";
        this.endPoint = "https://teacher-student-backend.herokuapp.com/";
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
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return headers;
    };
    ApiProvider.prototype.checkResultModel = function (result) {
        try {
            var dataCovertedToJson = result.json();
            return dataCovertedToJson;
        }
        catch (ex) {
            return null;
        }
    };
    return ApiProvider;
}());
ApiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_local_storage_local_storage__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FavoritesManagerProvider = (function () {
    function FavoritesManagerProvider(localStorage) {
        this.localStorage = localStorage;
    }
    FavoritesManagerProvider.prototype.addID = function (id) {
        if (id == null || id === "") {
            return false;
        }
        if (this.isIDExist(id)) {
            return false;
        }
        var favoritesList = this.getFavorites();
        if (favoritesList == null) {
            favoritesList = [];
        }
        favoritesList.push(id);
        this.setFavorites(favoritesList);
    };
    FavoritesManagerProvider.prototype.isIDExist = function (id) {
        var favoritesList = this.getFavorites();
        if (favoritesList == null) {
            return false;
        }
        for (var _i = 0, favoritesList_1 = favoritesList; _i < favoritesList_1.length; _i++) {
            var favorite = favoritesList_1[_i];
            if (favorite === id) {
                return true;
            }
        }
        return false;
    };
    FavoritesManagerProvider.prototype.removeID = function (id) {
        var favoritesList = this.getFavorites();
        if (favoritesList == null) {
            return false;
        }
        for (var i = 0; i < favoritesList.length; i++) {
            if (favoritesList[i] == id) {
                favoritesList.splice(i, 1);
                this.setFavorites(favoritesList);
                break;
            }
        }
    };
    FavoritesManagerProvider.prototype.getFavorites = function () {
        var favoritesID = this.localStorage.Get('FavoritesIDs');
        return favoritesID;
    };
    FavoritesManagerProvider.prototype.setFavorites = function (value) {
        this.localStorage.Set('FavoritesIDs', value);
    };
    return FavoritesManagerProvider;
}());
FavoritesManagerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_local_storage_local_storage__["a" /* LocalStorageProvider */]])
], FavoritesManagerProvider);

//# sourceMappingURL=favorites-manager.js.map

/***/ })

},[212]);
//# sourceMappingURL=main.js.map