webpackJsonp([0],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileProvider = (function () {
    //#endregion
    //#region Constructor
    function ProfileProvider() {
        this.isLoggedIn = false;
    }
    //#endregion
    //#region Public Methods
    ProfileProvider.prototype.SetUserLoggedIn = function (newProfile) {
        this.profile = newProfile;
        this.isLoggedIn = true;
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contactus_contactus__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jointeacher_jointeacher__ = __webpack_require__(292);
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
    //#endregion
    //#region Constructor
    function HomePage(navCtrl, rd) {
        this.navCtrl = navCtrl;
        this.rd = rd;
    }
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.rd.removeClass(_this.subtitleAnimation.nativeElement, "m-opacity-0");
            _this.rd.addClass(_this.subtitleAnimation.nativeElement, "fadeInDownBig");
            setTimeout(function () {
                _this.rd.removeClass(_this.buttonuAnimation.nativeElement, "m-opacity-0");
                _this.rd.addClass(_this.buttonuAnimation.nativeElement, "fadeInDownBig");
                setTimeout(function () {
                    _this.rd.removeClass(_this.buttonuAnimation.nativeElement, "fadeInDownBig");
                    _this.rd.addClass(_this.buttonuAnimation.nativeElement, "bounce");
                }, 2000);
            }, 800);
        }, 600);
    };
    HomePage.prototype.ionViewDidLeave = function () {
        this.rd.removeClass(this.subtitleAnimation.nativeElement, "animated");
        this.rd.removeClass(this.buttonuAnimation.nativeElement, "animated");
    };
    //#endregion
    //#region Public Methods
    HomePage.prototype.goPage = function (page) {
        switch (page) {
            case 'search':
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__search_search__["a" /* SearchPage */]);
                break;
            case 'contactme':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contactus_contactus__["a" /* ContactusPage */]);
                break;
            case 'joinasteacher':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__jointeacher_jointeacher__["a" /* JointeacherPage */]);
                break;
            case 'favorites':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */]);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('subtitleAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], HomePage.prototype, "subtitleAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('buttonuAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], HomePage.prototype, "buttonuAnimation", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">StudyHub</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="goPage(\'favorites\');" class="animated flip">\n        <ion-icon name="ios-bookmarks"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div text-center class="m-background-2b3137 m-margin-top0">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-43px m-font-weight-300">\n            For students and private teachers\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row #subtitleAnimation class="animated m-opacity-0">\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300 m-opacity-6">\n            StudyHub is a study platform inspired by the way you work. You can find teachers\n            <font class="m-color-white">from your home</font> and talk with them directly, Manage your teachers & Teach other people.\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300">\n            <b>Keep it simple and fun</b>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Start using button -->\n      <ion-row #buttonuAnimation class="animated m-opacity-0">\n        <ion-col col-12>\n          <button ion-button color="secondary" (click)="goPage(\'search\');">\n            <b>Start using StudyHub</b>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n    \n  </div>\n\n  <!-- White area -->\n  <div>\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for individuals\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for individuals subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">As individual user at StudyHub you can find teachers around Israel, talk with them directly at WhatsApp, rank teachers\n            and tell your opinion about them.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for teachers\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">\n            As a teacher at StudyHub you\'ll be shown at students searches over the app, you will have your own profile and you will be\n            able to manage it as you wish.\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Join as teacher button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button outline color="primary" (click)="goPage(\'joinasteacher\');" icon-start>\n            <ion-icon name="ios-person-add-outline"></ion-icon>\n            Join as teacher\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Slider -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-slides autoplay="3000" effect="slider" centeredSlides="true" loop="true" pager="true" speed="800">\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider1.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider4.jpg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider3.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider2.jpg" />\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n\n      <hr>\n\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-font-size-25px">\n            <b>StudyHub - Owner</b>\n          </font>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          Moshe Binieli\n        </ion-col>\n        <ion-col col-12>\n          mmoshikoo@gmail.com\n        </ion-col>\n        <ion-col col-12>\n          Computer Science Student and Full Stack Developer.\n        </ion-col>\n        <ion-col col-12>\n\n          <button ion-button outline color="dark" small icon-start (click)="goPage(\'contactme\');">\n            <ion-icon name="ios-contacts"></ion-icon>Contact us</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SingleteacherPage = (function () {
    //#endregion
    //#region Constructor
    function SingleteacherPage(navCtrl, navParams, viewCtrl, apiProvider, loadingCtrl, alertCtrl, favoritesManagerProvider, toasterProvider, rd) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.toasterProvider = toasterProvider;
        this.rd = rd;
        this.fullNameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]);
        this.messageFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(100)]);
        this.rate = 3;
        this.showErrorMessage = false;
        this.showRecommendationsBoolean = false;
        this.alreadyAddedRecommend = false;
        this.isTeacherFavorited = false;
        this.matcher = new MyErrorStateMatcher();
        this.currentChosenType = "1";
        this.searchedSubject = null;
        this.searchedInstitute = null;
        this.teacher = this.navParams.get('teacher');
        this.searchedSubject = this.navParams.get('subject');
        this.searchedInstitute = this.navParams.get('institute');
        this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
    }
    //#endregion
    //#region Public Methods
    SingleteacherPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.isTeacherFavorited);
    };
    SingleteacherPage.prototype.openRecommendations = function () {
        this.showRecommendationsBoolean = true;
    };
    SingleteacherPage.prototype.closeRecommendations = function () {
        var _this = this;
        this.rd.removeClass(this.elAddRecommend.nativeElement, "bounceInDown");
        this.rd.addClass(this.elAddRecommend.nativeElement, "bounceOutUp");
        setTimeout(function () {
            _this.showRecommendationsBoolean = false;
        }, 1000);
    };
    SingleteacherPage.prototype.addNewRecommend = function () {
        var _this = this;
        this.showErrorMessage = false;
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
            return;
        }
        var newRecommendData = {
            id: this.teacher._id,
            recommendData: {
                fullName: this.fullNameFormControl.value,
                email: this.emailFormControl.value,
                message: this.messageFormControl.value,
                rate: this.rate
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
        this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been added to favorites.");
    };
    SingleteacherPage.prototype.removeFavorite = function () {
        this.favoritesManagerProvider.removeID(this.teacher._id);
        this.isTeacherFavorited = false;
        this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been removed from favorites.");
    };
    SingleteacherPage.prototype.openWhatsApp = function () {
        if (this.teacher && this.teacher.phone) {
            if ((this.teacher.phone).indexOf("972") !== -1) {
                window.open('https://api.whatsapp.com/send?phone=' + this.teacher.phone);
            }
            else if (this.teacher.phone[0] === "0") {
                var number = "972" + this.teacher.phone;
                window.open('https://api.whatsapp.com/send?phone=' + number);
            }
        }
    };
    //#endregion
    //#region Private Methods
    SingleteacherPage.prototype.isModelValid = function () {
        this.convertRateToInteger();
        if (this.rate == null || this.rate < 0 || this.rate > 5 ||
            !this.emailFormControl.valid || !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(this.emailFormControl.value) ||
            !this.fullNameFormControl.valid ||
            !this.messageFormControl.valid) {
            return false;
        }
        else {
            return true;
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
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('addRecommend'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], SingleteacherPage.prototype, "elAddRecommend", void 0);
SingleteacherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-singleteacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss();">\n        <font class="m-color-white">Close</font>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>\n      <font class="m-color-white">{{teacher.firstName}} {{teacher.lastName}}</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Teacher details + Image + Recommendation button -->\n      <ion-row>\n        <ion-col col-7>\n          <!-- Name and LastName -->\n          <b class="m-font-size-21px">{{teacher.firstName}} {{teacher.lastName}}, </b>\n          <!-- Gender and Age -->\n          <i>{{teacher.gender | gender}}, {{teacher.age}}</i>\n          <!-- Rate stars -->\n          <h6>\n            <rating class="m-display-inline-block m-margin-top-min15 m-font-size-0" [(ngModel)]="teacher.rate" readOnly="true" max="5"\n              emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star" nullable="false"></rating>\n          </h6>\n          <!-- Rate text -->\n          <font class="m-font-size-15px">\n            <i>{{teacher.rate}}</i>\n            <font *ngIf="teacher.recommendations.length === 1">\n              <i>( {{teacher.recommendations.length}} person rated )</i>\n            </font>\n            <font *ngIf="teacher.recommendations.length !== 1">\n              <i>( {{teacher.recommendations.length}} people rated )</i>\n            </font>\n          </font>\n          <!-- Price -->\n          <font class="m-display-block m-padding-top-10px">\n            <i class="m-font-size-15px">{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n            <font class="m-font-size-10px">\n              <u>ILS</u>\n            </font>\n          </font>\n          <!-- Recommendation button -->\n          <div *ngIf="!isTeacherFavorited" class="m-padding-top-10px">\n            <button ion-button icon-start small outline class="m-color-white m-border-color-white" (click)="addFavorite()">\n              <ion-icon name="ios-bookmark-outline"></ion-icon>\n              Add favorite\n            </button>\n          </div>\n          <div *ngIf="isTeacherFavorited" class="m-padding-top-10px">\n            <button ion-button icon-start small outline class="m-color-white m-border-color-white" (click)="removeFavorite()">\n              <ion-icon name="ios-bookmark-outline"></ion-icon>\n              Remove favorite\n            </button>\n          </div>\n        </ion-col>\n        <!-- Image -->\n        <ion-col col-5 text-left *ngIf="teacher.image == null">\n          <img class="m-default-image-cards-singleteacher" src="assets\\imgs\\imageNotFound.jpg" />\n        </ion-col>\n        <ion-col col-5 text-left *ngIf="teacher.image != null">\n          <img class="m-default-image-cards-singleteacher" src="{{teacher.image}}" />\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <ion-grid padding>\n\n    <!-- Phone -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Phone: </b>\n        <i>{{teacher.phone}}</i>\n        <ion-icon class="m-padding-left-7px" color="secondary" name="logo-whatsapp" (click)="openWhatsApp()"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- Email -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Email: </b>\n        <i>{{teacher.email}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Teaches At -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Teaches at:</b> {{teacher.teachesAt|teachesAt}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Message -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Personal message: </b>{{teacher.personalMessage}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Recommendations Text and Add recommend icon -->\n    <ion-row>\n      <ion-col col-12 text-center *ngIf="!alreadyAddedRecommend && !showRecommendationsBoolean">\n        <button ion-button outline icon-start small color="dark" (click)="openRecommendations()">\n          <ion-icon name="ios-add-outline"></ion-icon>\n          Add recommendation\n        </button>\n      </ion-col>\n      <ion-col col-12 text-center *ngIf="!alreadyAddedRecommend && showRecommendationsBoolean">\n        <button ion-button outline icon-start small color="dark" (click)="closeRecommendations()">\n          <ion-icon name="ios-close-outline"></ion-icon>\n          Close recommendation\n        </button>\n      </ion-col>\n      <ion-col col-12 text-center *ngIf="alreadyAddedRecommend">\n        <font class="m-color-c2bbbb"> * Your recommendation has been added *</font>\n      </ion-col>\n    </ion-row>\n\n    <!-- Show recommendation -->\n    <div #addRecommend class="animated bounceInDown" *ngIf="showRecommendationsBoolean" text-center>\n\n      <form class="m-form">\n\n        <!-- Add Recommendations text -->\n        <ion-row>\n          <ion-col col-12>\n            <b>\n              <u>Add recommendations:</u>\n            </b>\n          </ion-col>\n        </ion-row>\n\n        <!-- Full name and Email -->\n        <ion-row>\n          <!-- Full name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" matInput placeholder="Full name" [formControl]="fullNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>First name and Last name</mat-hint>\n              <mat-error *ngIf="fullNameFormControl.hasError(\'required\')">\n                Full name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Email -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput placeholder="Email" [formControl]="emailFormControl"\n                [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Rate input -->\n        <ion-row>\n          <ion-col col-12>\n            <rating [(ngModel)]="rate" [ngModelOptions]="{standalone: true}" readOnly="false" max="5" emptyStarIconName="star-outline"\n              halfStarIconName="star-half" starIconName="star" nullable="false"></rating>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="100" rows="3" placeholder="Message" [formControl]="messageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Please be kind :)</mat-hint>\n              <mat-hint align="end">{{messageFormControl.value.length}} / 100</mat-hint>\n              <mat-error *ngIf="messageFormControl.hasError(\'minlength\') && !messageFormControl.hasError(\'required\')">\n                Minimum number is 1\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'maxlength\') && !messageFormControl.hasError(\'required\')">\n                Maximum number is 100\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'required\')">\n                Write down something.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Error message - Fields -->\n        <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n          <ion-col col-12>\n            <font class="m-color-red">Please fill the requested fields.</font>\n          </ion-col>\n        </ion-row>\n\n        <!-- Add button message -->\n        <ion-row>\n          <ion-col col-12>\n            <button ion-button block outline (click)="addNewRecommend()" icon-start>\n              <ion-icon name="add"></ion-icon>Add</button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n    </div>\n\n    <!-- Institutions + Subjects + Recommendations Header-->\n    <ion-row>\n      <ion-col col-12>\n        <ion-segment [(ngModel)]="currentChosenType">\n          <ion-segment-button value="1" class="m-font-size-10px-impo">\n            Subjects\n          </ion-segment-button>\n          <ion-segment-button value="2" class="m-font-size-10px-impo">\n            Institutions\n          </ion-segment-button>\n          <ion-segment-button [hidden]="teacher.recommendations == null || teacher.recommendations.length === 0" value="3" class="m-font-size-10px-impo">\n            Recommendations\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n\n    <!-- Institutions + Subjects + Recommendations Content-->\n    <div>\n\n      <!-- Subjects -->\n      <ion-row *ngIf="currentChosenType === \'1\'">\n        <ion-col col-12>\n          <ion-list>\n            <ul *ngFor="let subject of teacher.teachesSubjects">\n              <li *ngIf="searchedSubject === subject.toString();else othercontent">\n                <b>{{subject | teachesSubjects}}</b>\n              </li>\n              <ng-template #othercontent>\n                <li>{{subject | teachesSubjects}}</li>\n              </ng-template>\n            </ul>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Institution -->\n      <ion-row *ngIf="currentChosenType === \'2\'">\n        <ion-col col-12>\n          <ion-list>\n            <ul *ngFor="let institution of teacher.teachesInstitutions">\n              <li *ngIf="searchedInstitute === institution.toString();else othercontent">\n                <b>{{institution | teachesInstitutions}}</b>\n              </li>\n              <ng-template #othercontent>\n                <li>{{institution | teachesInstitutions}}</li>\n              </ng-template>\n            </ul>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n\n      <!-- Recommendations -->\n      <ion-row *ngIf="currentChosenType === \'3\'">\n        <ion-col col-12>\n          <ion-card *ngFor="let recommend of teacher.recommendations">\n            <ion-card-header class="m-padding-top-0 m-padding-buttom-0">\n              {{recommend.fullName}} -\n              <rate-show [stars]="recommend.rate"></rate-show>\n            </ion-card-header>\n            <ion-card-content>\n              {{recommend.message}}\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n\n    </div>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__["a" /* ToasterProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]])
], SingleteacherPage);

//# sourceMappingURL=singleteacher.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__favorites_favorites__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SettingsPage = (function () {
    //#endregion
    //#region Constructor
    function SettingsPage(navCtrl, navParams, favoritesManagerProvider, apiProvider, authService, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.apiProvider = apiProvider;
        this.authService = authService;
        this.profileProvider = profileProvider;
    }
    //#endregion
    //#region Public Methods
    SettingsPage.prototype.goPage = function (page) {
        switch (page) {
            case 'favorites':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__favorites_favorites__["a" /* FavoritesPage */]);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    SettingsPage.prototype.clearIDLocalStorage = function () {
        this.favoritesManagerProvider.removeAll();
    };
    SettingsPage.prototype.SignInWithFB = function () {
        var _this = this;
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID)
            .then(function (signedInUser) {
            _this.user = signedInUser;
            _this.CreateUser(signedInUser);
            _this.apiProvider.httpPost('auth/createfacebookuser', _this.user)
                .subscribe(function (success) { console.log(success); }, function (failure) { console.log(failure); });
        });
    };
    //#endregion
    //#region Private Methods
    SettingsPage.prototype.CreateUser = function (user) {
        var newUser = {
            email: user.email,
            photoUrl: user.photoUrl,
            lastName: user.lastName,
            firstName: user.firstName
        };
        this.profileProvider.SetUserLoggedIn(newUser);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">Settings</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="goPage(\'favorites\');">\n        <ion-icon name="ios-bookmarks"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        Settings page, go away, it\'s not ready!\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button outline small color="danger" (click)="clearIDLocalStorage()">Clear favorites</button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row text-center>\n\n      <ion-col col-12>\n        Test Buttons - Not in use\n      </ion-col>\n\n      <ion-col col-12>\n        <button (click)="SignInWithFB()" class="loginBtn loginBtn--facebook">\n          Login with Facebook\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        <button class="loginBtn loginBtn--google">\n          Login with Google\n        </button>\n      </ion-col>\n\n      <ion-col col-12>\n        {{user?.firstName}} {{user?.lastName}}\n      </ion-col>\n      <ion-col col-12>\n        {{user?.email}}\n      </ion-col>\n      <ion-col col-12>\n        <img src="{{user?.photoUrl}}">\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5_angular4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 190:
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
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 234:
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
webpackEmptyAsyncContext.id = 234;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    //#region Constructor
    function ToasterProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    //#endregion
    //#region Public Methods
    ToasterProvider.prototype.presentToast = function (message, time, location) {
        if (time === void 0) { time = 2000; }
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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
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
    //#region Constructor
    function LocalStorageProvider(localStorageService) {
        this.localStorageService = localStorageService;
    }
    //#endregion
    //#region Public Methods
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleteacher_singleteacher__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_favorites_manager_favorites_manager__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var TeacherslistPage = (function () {
    //#endregion
    //#region Constructor
    function TeacherslistPage(navCtrl, navParams, modalCtrl, favoritesManagerProvider, apiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.apiProvider = apiProvider;
        //#region Members
        this.teachers = [];
        this.teachersListNotChange = [];
        var tempArray = this.navParams.get('teacherSearchList');
        for (var _i = 0, tempArray_1 = tempArray; _i < tempArray_1.length; _i++) {
            var item = tempArray_1[_i];
            this.GetImageForTeacher(item);
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
    //#endregion
    //#region Public Methods
    TeacherslistPage.prototype.expandTeacherInformation = function (index) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__singleteacher_singleteacher__["a" /* SingleteacherPage */], {
            teacher: this.teachers[index],
            subject: this.navParams.get('subject'),
            institute: this.navParams.get('institute')
        });
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
    TeacherslistPage.prototype.sortByTeacherList = function (sortByType) {
        if (sortByType != null && sortByType.length > 1) {
            if (sortByType === "Name") {
                this.sortByName();
            }
            else if (sortByType === "Rate") {
                this.sortByRate();
            }
            else if (sortByType === "Recommendations") {
                this.sortByRecommendations();
            }
            else if (sortByType === "RecommendationsRate") {
                this.sortByRecommendationsRate();
            }
        }
    };
    //#endregion
    //#region Private Methods
    TeacherslistPage.prototype.sortByName = function () {
        this.teachers.sort(function (a, b) {
            var first = (a.firstName + " " + a.lastName).toLowerCase();
            var second = (b.firstName + " " + b.lastName).toLowerCase();
            if (first < second) {
                return -1;
            }
            if (first > second) {
                return 1;
            }
            else {
                return 0;
            }
        });
    };
    TeacherslistPage.prototype.sortByRate = function () {
        this.teachers.sort(function (a, b) {
            if (a.rate < b.rate) {
                return 1;
            }
            if (a.rate > b.rate) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    TeacherslistPage.prototype.sortByRecommendations = function () {
        this.teachers.sort(function (a, b) {
            if (a.recommendations.length < b.recommendations.length) {
                return 1;
            }
            if (a.recommendations.length > b.recommendations.length) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    TeacherslistPage.prototype.sortByRecommendationsRate = function () {
        this.teachers.sort(function (a, b) {
            if (a.recommendations.length < b.recommendations.length) {
                return 1;
            }
            if (a.recommendations.length > b.recommendations.length) {
                return -1;
            }
            else {
                if (a.recommendations.length > b.recommendations.length) {
                    return -1;
                }
                else if (a.recommendations.length < b.recommendations.length) {
                    return 1;
                }
                else {
                    return 0;
                }
            }
        });
    };
    TeacherslistPage.prototype.GetImageForTeacher = function (teacher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.apiProvider.httpGet("image/getimagebyid/" + teacher.image)
                    .subscribe(function (success) { teacher.image = success.image; }, function (failure) { teacher.image = "assets\\imgs\\imageNotFound.jpg"; });
                return [2 /*return*/];
            });
        });
    };
    return TeacherslistPage;
}());
TeacherslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-teacherslist',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Teacher List</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div [matMenuTriggerFor]="menu">\n        <ion-icon name="md-more"></ion-icon>\n      </div>\n    </ion-buttons>\n\n    <mat-menu #menu="matMenu">\n      <button mat-menu-item disabled>\n        <span>Sort By</span>\n      </button>\n      <button mat-menu-item (click)="sortByTeacherList(\'Name\')">\n        <span>Name</span>\n      </button>\n      <button mat-menu-item (click)="sortByTeacherList(\'Rate\')">\n        <span>Rate</span>\n      </button>\n      <button mat-menu-item (click)="sortByTeacherList(\'Recommendations\')">\n        <span>Recommendations</span>\n      </button>\n      <button mat-menu-item (click)="sortByTeacherList(\'RecommendationsRate\')">\n        <span>Recommendations + Rate</span>\n      </button>\n    </mat-menu>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- White area -->\n  <div>\n\n    <!-- Search bar -->\n    <ion-row class="m-sticky-search-bar">\n      <ion-col col-12 class="m-padding-0-impo">\n        <ion-toolbar color="m-darker">\n          <ion-searchbar [showCancelButton]="false" (ionInput)="onInput($event)" placeholder="Search for teacher name" type="text"\n            animated="true" debounce="100">\n          </ion-searchbar>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <ion-grid>\n\n      <!-- Teachers wasn\'t found -->\n      <ion-row text-center *ngIf="teachers.length == 0">\n        <ion-col col-12>\n          <b>Not even single teacher was found, sorry.</b>\n        </ion-col>\n      </ion-row>\n\n      <!-- List of teachers -->\n      <div *ngFor="let teacher of teachers; let i = index;">\n        <ion-card (click)="expandTeacherInformation(i);">\n\n          <!-- Image and Favorite and All Personal Details -->\n          <ion-row>\n            <ion-col col-6 class="m-padding-top-10px">\n              <!-- Name -->\n              <h1>\n                <b>{{teacher.firstName}} {{teacher.lastName}}</b>\n              </h1>\n              <!-- price -->\n              <h5 class="m-padding-top-3px">\n                <b>Price:</b>\n                <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                <font class="m-font-size-10px">ILS</font>\n              </h5>\n              <!-- Rate -->\n              <h5 class="m-padding-top-3px">\n                <b>Rating:</b>\n                <font *ngIf="teacher.recommendations.length === 1">\n                  <i>( {{teacher.recommendations.length}} person )</i>\n                </font>\n                <font *ngIf="teacher.recommendations.length !== 1">\n                  <i>( {{teacher.recommendations.length}} people )</i>\n                </font>\n              </h5>\n              <!-- Stars -->\n              <h6 class="m-padding-top-3px m-font-size-0-impo">\n                <rating [(ngModel)]="teachers[i].rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n                  starIconName="star" nullable="false"></rating>\n              </h6>\n            </ion-col>\n            <ion-col *ngIf="teacher.image == null" col-5 text-right>\n              <img class="m-default-image-cards-teacherlist" src="assets\\imgs\\imageNotFound.jpg" />\n            </ion-col>\n            <ion-col *ngIf="teacher.image != null" col-5 text-right>\n              <img class="m-default-image-cards-teacherlist" src="{{teacher.image}}" />\n            </ion-col>\n            <ion-col *ngIf="teacher.isTeacherFavorited" col-1 text-right>\n              <ion-icon name="ios-bookmark-outline" class="m-font-size-35px"></ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <!-- Message -->\n          <ion-row>\n            <ion-col col-12>\n              <b>Message:</b>\n              {{teacher.personalMessage}}\n            </ion-col>\n          </ion-row>\n\n          <!-- Click to see more details -->\n          <ion-row text-center>\n            <ion-col col-12>\n              <font class="m-color-midnightblue m-font-size-13px">\n                <i>* Click on the card to see more details *</i>\n              </font>\n            </ion-col>\n          </ion-row>\n\n        </ion-card>\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
], TeacherslistPage);

//# sourceMappingURL=teacherslist.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ContactusPage = (function () {
    //#endregion
    //#region Constructor
    function ContactusPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        //#region Members
        this.fullNameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.contactReasonFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.messageFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(200)]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]);
        this.showErrorMessage = false;
        this.matcher = new MyErrorStateMatcher();
    }
    //#endregion
    //#region Public Methods
    ContactusPage.prototype.sendContactUsForm = function () {
        var _this = this;
        this.showErrorMessage = false;
        if (!this.isFormValid()) {
            this.showErrorMessage = true;
            return;
        }
        var data = {
            fullName: this.fullNameFormControl.value,
            email: this.emailFormControl.value,
            contactReason: this.contactReasonFormControl.value,
            message: this.messageFormControl.value
        };
        var loading = this.loadingCtrl.create({
            content: 'Sending the information, please wait...'
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
    ContactusPage.prototype.openWhatsApp = function () {
        window.open('https://api.whatsapp.com/send?phone=972542477052');
    };
    //#endregion
    //#region Private Methods
    ContactusPage.prototype.isFormValid = function () {
        if (!this.fullNameFormControl.valid ||
            !this.emailFormControl.valid || !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(this.emailFormControl.value) ||
            !this.contactReasonFormControl.valid ||
            !this.messageFormControl.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    ContactusPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    return ContactusPage;
}());
ContactusPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-contactus',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Contact Us</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-30px m-font-weight-300">\n            What is your opinion?\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          You can send us anything you wish, feedback, recommendation, new ideas, bugs you\'ve found, or even send message for fun,\n          we\'ll try to comment as soon as possible.\n        </ion-col>\n      </ion-row>\n\n      <!-- Direct contant -->\n      <ion-row text-left>\n        <ion-col col-12>\n          <font class="m-color-orange">You can contact the owner of this application by:</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Email: mmoshikoo@gmail.com</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Phone: 0542477052</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Full name and Reason to contact -->\n        <ion-row>\n          <!-- Full name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="24" matInput placeholder="Full name" [formControl]="fullNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>First name and Last name</mat-hint>\n              <mat-error *ngIf="fullNameFormControl.hasError(\'required\')">\n                Full name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Reason to contact -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Reason to contact" [formControl]="contactReasonFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.reasonToContactArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Why do you want to contact us?</mat-hint>\n              <mat-error *ngIf="contactReasonFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <input type="email" maxlength="40" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput placeholder="Email" [formControl]="emailFormControl"\n                [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="messageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Tell us your ideas, we will be happy to know.</mat-hint>\n              <mat-hint align="end">{{messageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="messageFormControl.hasError(\'minlength\') && !messageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'maxlength\') && !messageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'required\')">\n                Write down something.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n          <ion-col col-12>\n            <font class="m-color-red">Please fill the requested fields.</font>\n          </ion-col>\n        </ion-row>\n\n        \n      <!-- Buttons -->\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="primary" block (click)="sendContactUsForm();">\n            <ion-icon name="ios-send-outline"></ion-icon>\n            Send\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="secondary" block (click)="openWhatsApp();">\n            <ion-icon name="logo-whatsapp"></ion-icon>\n            WhatsApp\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JointeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var JointeacherPage = (function () {
    //#endregion
    //#region Constructor
    function JointeacherPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, rd, platform, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.rd = rd;
        this.platform = platform;
        this.commonProvider = commonProvider;
        //#region Members
        this.firstNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.lastNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email]);
        this.phoneFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10)]);
        this.personalMessageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(200)]);
        this.toPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.fromPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.teachesAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.ageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(16), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(120)]);
        this.genderAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesInstitutionsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesSubjectsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.image = null;
        this.matcher = new MyErrorStateMatcher();
        this.showErrorMessagePrices = false;
        this.showErrorMessage = false;
        // We take minutes 20 in the calculation to take the padding at calculation.
        this.imageWidth = platform.width() - 20;
        this.imageHeight = platform.width() - 20;
    }
    //#endregion
    //#region Public Methods
    JointeacherPage.prototype.createTeacher = function () {
        var _this = this;
        this.showErrorMessage = false;
        this.showErrorMessagePrices = false;
        this.convertStringToInteger();
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
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
    JointeacherPage.prototype.rotateBase64Image90deg = function (base64Image, isClockwise) {
        var offScreenCanvas = document.createElement('canvas');
        var offScreenCanvasCtx = offScreenCanvas.getContext('2d');
        var img = new Image();
        img.src = base64Image;
        offScreenCanvas.height = img.width;
        offScreenCanvas.width = img.height;
        // rotate and draw source image into the off-screen canvas:
        if (isClockwise) {
            offScreenCanvasCtx.rotate(90 * Math.PI / 180);
            offScreenCanvasCtx.translate(0, -offScreenCanvas.width);
        }
        else {
            offScreenCanvasCtx.rotate(-90 * Math.PI / 180);
            offScreenCanvasCtx.translate(-offScreenCanvas.height, 0);
        }
        offScreenCanvasCtx.drawImage(img, 0, 0);
        this.image = offScreenCanvas.toDataURL("image/jpeg", 100);
    };
    JointeacherPage.prototype.readImageBase64 = function ($event) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__["ImageCompressService"].filesToCompressedImageSource($event.target.files).
            then(function (observableImages) {
            observableImages.subscribe(function (compressedObject) {
                _this.image = compressedObject.compressedImage.imageDataUrl;
            }, function (error) {
                console.log("Error while converting image.");
            });
        });
    };
    JointeacherPage.prototype.clearImage = function () {
        var _this = this;
        if (this.image && this.image.length > 0) {
            this.rd.removeClass(this.elViewImage.nativeElement, "flash");
            this.rd.addClass(this.elViewImage.nativeElement, "fadeOutLeft");
            setTimeout(function () {
                _this.image = null;
                _this.el.nativeElement.value = "";
            }, 1000);
        }
    };
    //#endregion
    //#region Private Methods
    JointeacherPage.prototype.convertStringToInteger = function () {
        if (this.fromPriceFormControl.valid) {
            this.fromPriceFormControl.setValue(parseInt(this.fromPriceFormControl.value));
        }
        if (this.toPriceFormControl.valid) {
            this.toPriceFormControl.setValue(parseInt(this.toPriceFormControl.value));
        }
        if (this.ageFormControl.valid) {
            this.ageFormControl.setValue(parseInt(this.ageFormControl.value));
        }
    };
    JointeacherPage.prototype.isModelValid = function () {
        if (!this.isFormsValid() ||
            this.isFormsNullOrEmpty() ||
            this.fromPriceFormControl.value > this.toPriceFormControl.value ||
            !this.isPhoneValid(this.phoneFormControl.value) ||
            !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(this.emailFormControl.value) ||
            this.teachesInstitutionsFormControl.value == null || this.teachesInstitutionsFormControl.value.length === 0 ||
            this.teachesSubjectsFormControl.value == null || this.teachesSubjectsFormControl.value.length === 0) {
            if (this.fromPriceFormControl.value > this.toPriceFormControl.value) {
                this.showErrorMessagePrices = true;
            }
            return false;
        }
        else {
            return true;
        }
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
        this.teachesInstitutionsFormControl.value.forEach(function (value, index) {
            _this.teachesInstitutionsFormControl.value[index] = parseInt(value.toString());
        });
        this.teachesSubjectsFormControl.value.forEach(function (value, index) {
            _this.teachesSubjectsFormControl.value[index] = parseInt(value.toString());
        });
        var newTeacher = {
            age: this.ageFormControl.value,
            priceTo: this.toPriceFormControl.value,
            priceFrom: this.fromPriceFormControl.value,
            phone: this.phoneFormControl.value,
            email: this.emailFormControl.value,
            gender: parseInt(this.genderAtFormControl.value),
            lastName: this.lastNameFormControl.value,
            firstName: this.firstNameFormControl.value,
            personalMessage: this.personalMessageFormControl.value,
            teachesAt: parseInt(this.teachesAtFormControl.value),
            teachesInstitutions: this.teachesInstitutionsFormControl.value,
            teachesSubjects: this.teachesSubjectsFormControl.value,
            rate: 0,
            image: this.image
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
    JointeacherPage.prototype.isFormsValid = function () {
        if (!this.firstNameFormControl.valid ||
            !this.lastNameFormControl.valid ||
            !this.ageFormControl.valid ||
            !this.genderAtFormControl.valid ||
            !this.emailFormControl.valid ||
            !this.phoneFormControl.valid ||
            !this.toPriceFormControl.valid ||
            !this.fromPriceFormControl.valid ||
            !this.teachesAtFormControl.valid ||
            !this.teachesSubjectsFormControl.valid ||
            !this.teachesInstitutionsFormControl.valid ||
            !this.personalMessageFormControl.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    JointeacherPage.prototype.isFormsNullOrEmpty = function () {
        if (this.isStringNullOrEmpty(this.firstNameFormControl.value) ||
            this.isStringNullOrEmpty(this.lastNameFormControl.value) ||
            this.isStringNullOrEmpty(this.emailFormControl.value) ||
            this.isStringNullOrEmpty(this.phoneFormControl.value) ||
            this.isStringNullOrEmpty(this.personalMessageFormControl.value)) {
            return true;
        }
        else {
            return false;
        }
    };
    JointeacherPage.prototype.isPhoneValid = function (phone) {
        if (this.isStringNullOrEmpty(phone) || phone.length < 9) {
            return false;
        }
        else {
            if (phone.substring(0, 1) === "0") {
                return true;
            }
            else if (phone.substring(0, 3) === "972") {
                return true;
            }
            else if (phone.substring(0, 4) === "+972") {
                return true;
            }
            else {
                this.phoneFormControl.setErrors({ "badphonenumber": true });
                return false;
            }
        }
    };
    return JointeacherPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('inputImage'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], JointeacherPage.prototype, "el", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('viewImage'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], JointeacherPage.prototype, "elViewImage", void 0);
JointeacherPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-jointeacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Join as Teacher</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Become a next-generation teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          In order to join as teacher you must fill all the following fields. Be specific with your information to gain more good resume\n          and comments from students. Remember, good instructor is remembered for lifetime.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font>\n          Give full information at the relevant fields to interest more students.\n        </ion-col>\n      </ion-row>\n\n      <!-- Price warning -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-red">*The price per lesson is for one hour*</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-top-15px m-padding-buttom-15px">\n        <ion-col col-12>\n          <u>\n            <b>Fill teacher form</b>\n          </u>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- First name and Last name -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- First name-->\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="12" matInput placeholder="First name" [formControl]="firstNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal first name</mat-hint>\n              <mat-error *ngIf="firstNameFormControl.hasError(\'required\')">\n                First name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Last name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="12" matInput placeholder="Last name" [formControl]="lastNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal last name</mat-hint>\n              <mat-error *ngIf="lastNameFormControl.hasError(\'required\')">\n                Last name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Age and Gender -->\n        <ion-row>\n          <!-- Age -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="3" matInput placeholder="Age" [formControl]="ageFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>What\'s your age?</mat-hint>\n              <mat-error *ngIf="ageFormControl.hasError(\'minlength\') || ageFormControl.hasError(\'maxlength\') && !ageFormControl.hasError(\'required\')">\n                Type proper age.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'min\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be less than 16.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'max\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be greater than 120.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'required\')">\n                Age is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field>\n              <mat-select placeholder="Gender" [formControl]="genderAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What is your gender?</mat-hint>\n              <mat-error *ngIf="genderAtFormControl.hasError(\'required\')">Male or Female?</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email and phone number -->\n        <ion-row>\n          <!-- Email -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="email" maxlength="40" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput\n                placeholder="Email" [formControl]="emailFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Phone -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" maxlength="10" matInput placeholder="Phone" [formControl]="phoneFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal phone number</mat-hint>\n              <mat-error *ngIf="phoneFormControl.hasError(\'minlength\') || phoneFormControl.hasError(\'maxlength\') && !phoneFormControl.hasError(\'required\')">\n                Length of phone number is invalid.\n              </mat-error>\n              <mat-error *ngIf="phoneFormControl.errors && phoneFormControl.errors.badphonenumber && !phoneFormControl.hasError(\'required\')">\n                Phone number is invalid.\n              </mat-error>\n              <mat-error *ngIf="phoneFormControl.hasError(\'required\')">\n                Phone is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- From price and To price -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- From price -->\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="From price" [formControl]="fromPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>1 is Minimum.</mat-hint>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'minlength\') || fromPriceFormControl.hasError(\'maxlength\') && !fromPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'min\') && !fromPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'max\') && !fromPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'required\')">\n                From price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- To Price -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="To price" [formControl]="toPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>200 is Maximum.</mat-hint>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'minlength\') || toPriceFormControl.hasError(\'maxlength\') && !toPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'min\') && !toPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'max\') && !toPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'required\')">\n                To price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Teaches institutions -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What places do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesAtFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Teaches institutions -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" multiple>\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">{{item.viewValue}}</mat-option>\n              </mat-select>\n              <mat-hint>What institutions do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesInstitutionsFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teaches Subjects -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach Subjects" [formControl]="teachesSubjectsFormControl" multiple>\n                <mat-optgroup *ngFor="let group of commonProvider.teachesSubjectsGroupsArray" [label]="group.name">\n                  <mat-option *ngFor="let subject of group.subjects" [value]="subject.value">\n                    {{ subject.viewValue }}\n                  </mat-option>\n                </mat-optgroup>\n              </mat-select>\n              <mat-hint>What courses do you teach?</mat-hint>\n              <mat-error *ngIf="teachesSubjectsFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Personal Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="personalMessageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Say something about your self.</mat-hint>\n              <mat-hint align="end">{{personalMessageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'minlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'maxlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'required\')">\n                You must say few words about yourself.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Get image button and clear button -->\n        <ion-row>\n          <ion-col col-6>\n            <input #inputImage type="file" id="inputImageid" class="m-display-none" (change)="readImageBase64($event)" accept="image/*">\n            <button ion-button outline block icon-start small color="dark" onclick="document.getElementById(\'inputImageid\').click();">\n              <ion-icon name="ios-camera-outline"></ion-icon>\n              Add Image\n            </button>\n          </ion-col>\n          <ion-col col-6 *ngIf="image != null && image.length > 0">\n            <button ion-button outline block icon-start small color="dark" (click)="clearImage()">\n              <ion-icon name="ios-trash-outline"></ion-icon>\n              Clear\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <!-- Image + Left Rotation + Right Rotation -->\n        <ion-row text-center #viewImage *ngIf="image != null && image.length > 0" class="animated flash">\n          <ion-col col-12>\n            <img height="{{imageHeight}}" width="{{imageWidth}}" src="{{image}}">\n          </ion-col>\n          <!-- Left Rotation -->\n          <ion-col col-6>\n            <button ion-button outline block icon-start small color="dark" (click)="rotateBase64Image90deg(image, false)">\n              <ion-icon name="ios-return-left"></ion-icon>\n              Rotate Left\n            </button>\n          </ion-col>\n          <!-- Right Rotation -->\n          <ion-col col-6>\n            <button ion-button outline block icon-end small color="dark" (click)="rotateBase64Image90deg(image, true)">\n              Rotate Right\n              <ion-icon name="ios-return-right"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Send form button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block (click)="createTeacher();">Make me a teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]])
], JointeacherPage);

//# sourceMappingURL=jointeacher.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(385);




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_common_common__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_teaches_at_teaches_at__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_jointeacher_jointeacher__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_favorites_manager_favorites_manager__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_tabs__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_input__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_select__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_rate_show_rate_show__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_autocomplete__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular4_social_login__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_profile_profile__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var config = new __WEBPACK_IMPORTED_MODULE_35_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_35_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_35_angular4_social_login__["FacebookLoginProvider"]("200690180499086")
    }
]);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_21__pages_jointeacher_jointeacher__["a" /* JointeacherPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */],
            __WEBPACK_IMPORTED_MODULE_32__components_rate_show_rate_show__["a" /* RateShowComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_35_angular4_social_login__["SocialLoginModule"].initialize(config),
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {
                locationStrategy: 'path'
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                    { component: __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */], name: 'Search', segment: 'search' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */], name: 'Settings', segment: 'settings' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */], name: 'Contactus', segment: 'contactus' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */], name: 'Favorites', segment: 'favorites' },
                    { component: __WEBPACK_IMPORTED_MODULE_21__pages_jointeacher_jointeacher__["a" /* JointeacherPage */], name: 'Jointeacher', segment: 'jointeacher' },
                    { component: __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */], name: 'Teacherslist', segment: 'teacherslist' },
                    { component: __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */], name: 'Singleteacher', segment: 'singleteacher' },
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'StudyHub',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_34__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_29__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_material_menu__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_30__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_31__angular_material_select__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_33__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_jointeacher_jointeacher__["a" /* JointeacherPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_10__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_16__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__["a" /* ToasterProvider */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__["a" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"],
            __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */],
            __WEBPACK_IMPORTED_MODULE_26__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_36__providers_profile_profile__["a" /* ProfileProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_profile_profile__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(175);
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
    //#endregion
    //#region Constructor
    function MyApp(platform, statusBar, splashScreen, profileProvider) {
        var _this = this;
        this.profileProvider = profileProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
                { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */] },
                { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */] }
            ];
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/'<ion-menu [content]="content">\n    <!-- Title -->\n    <ion-header>\n        <ion-toolbar>\n            <ion-title text-center>\n                <font class="m-color-white">StudyHub</font>\n            </ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n\n        <!-- Loggin in teacher -->\n        <ion-row text-center *ngIf="profileProvider.isLoggedIn == true">\n            <ion-col col-12>\n                <img style="border-radius: 100%;" src="{{profileProvider.profile.photoUrl}}" />\n            </ion-col>\n            <ion-col col-12>\n                <label style="font-family: fantasy;font-size: 22px;">\n                    Welcome {{profileProvider.profile.firstName}} {{profileProvider.profile.lastName}}\n                </label>\n            </ion-col>\n            <ion-col col-12>\n                <button ion-button outline icon-start small color="dark">\n                    <ion-icon name="ios-person-outline"></ion-icon>\n                    Edit profile\n                </button>\n            </ion-col>\n        </ion-row>\n\n        <!-- Buttons -->\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_0__providers_profile_profile__["a" /* ProfileProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
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
    //#endregion
    //#region Constructor
    function ApiProvider(http) {
        this.http = http;
        //#region Members
        // public endPoint: string = "http://localhost:8000/";
        this.endPoint = "https://teacher-student-backend.herokuapp.com/";
    }
    //#endregion
    //#region Public Methods
    ApiProvider.prototype.httpGet = function (path) {
        var _this = this;
        var url = this.endPoint + path;
        return this.http.get(url, null)
            .map(function (res) { return _this.checkResultModel(res); });
    };
    ApiProvider.prototype.httpPost = function (path, data) {
        var _this = this;
        var url = this.endPoint + path;
        var header = this.buildHeader();
        return this.http.post(url, JSON.stringify(data), { headers: header })
            .map(function (res) { return _this.checkResultModel(res); });
    };
    //#endregion
    //#region Private Methods
    ApiProvider.prototype.buildHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_local_storage_local_storage__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(67);
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
    //#region Constructor
    function FavoritesManagerProvider(localStorage) {
        this.localStorage = localStorage;
    }
    //#endregion
    //#region Public Methods
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
    FavoritesManagerProvider.prototype.removeAll = function () {
        this.setFavorites([]);
    };
    //#endregion
    //#region Private Methods
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

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(175);
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
    //#endregion
    //#region Constructor
    function TabsPage() {
        //#region Members
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\tabs\tabs.html"*/'<ion-tabs #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="ios-aperture-outline"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GenderPipe = (function () {
    function GenderPipe() {
    }
    GenderPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var genderValue = "";
        switch (value) {
            case 1:
                genderValue = "Male";
                break;
            case 2:
                genderValue = "Female";
                break;
            default:
                console.log("Bad pipe input.");
        }
        return genderValue;
    };
    return GenderPipe;
}());
GenderPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'gender',
    })
], GenderPipe);

//# sourceMappingURL=gender.js.map

/***/ }),

/***/ 714:
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
            case 1:
                teachesAtValue = 'Home';
                break;
            case 2:
                teachesAtValue = 'Academic Institute';
                break;
            case 3:
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

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesSubjectsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TeachesSubjectsPipe = (function () {
    function TeachesSubjectsPipe() {
    }
    TeachesSubjectsPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var teachesSubjectsValue;
        switch (value) {
            case 1:
                teachesSubjectsValue = 'Advanced Control Theory';
                break;
            case 2:
                teachesSubjectsValue = 'Advanced Programming Workshop';
                break;
            case 3:
                teachesSubjectsValue = 'Algorithm in Optimization';
                break;
            case 4:
                teachesSubjectsValue = 'Analog Linear Electronic Circuits';
                break;
            case 5:
                teachesSubjectsValue = 'Antennas and Radiation';
                break;
            case 6:
                teachesSubjectsValue = 'Approximation algorithms';
                break;
            case 7:
                teachesSubjectsValue = 'Artificial Intelligence';
                break;
            case 8:
                teachesSubjectsValue = 'Automata and Formal Languages';
                break;
            case 9:
                teachesSubjectsValue = 'Calculus';
                break;
            case 10:
                teachesSubjectsValue = 'Communication Engineering';
                break;
            case 11:
                teachesSubjectsValue = 'Compilation Theory';
                break;
            case 12:
                teachesSubjectsValue = 'Complex Functions';
                break;
            case 13:
                teachesSubjectsValue = 'Complex Valued Functions';
                break;
            case 14:
                teachesSubjectsValue = 'Computability and Complexity of Algorithms';
                break;
            case 15:
                teachesSubjectsValue = 'Computer Architecture';
                break;
            case 16:
                teachesSubjectsValue = 'Computer Communication Networks';
                break;
            case 17:
                teachesSubjectsValue = 'Computer Graphics';
                break;
            case 18:
                teachesSubjectsValue = 'Computer Organization and Assembly';
                break;
            case 19:
                teachesSubjectsValue = 'Computer Structure and Switching Theory';
                break;
            case 20:
                teachesSubjectsValue = 'Computer Vision';
                break;
            case 21:
                teachesSubjectsValue = 'Conversion Laboratory Energy';
                break;
            case 22:
                teachesSubjectsValue = 'Data Base Systems';
                break;
            case 23:
                teachesSubjectsValue = 'Data Compression';
                break;
            case 24:
                teachesSubjectsValue = 'Data Mining';
                break;
            case 25:
                teachesSubjectsValue = 'Data Structures';
                break;
            case 26:
                teachesSubjectsValue = 'Design and Analysis of Algorithms';
                break;
            case 27:
                teachesSubjectsValue = 'Design Patterns';
                break;
            case 28:
                teachesSubjectsValue = 'Digital Circuits';
                break;
            case 29:
                teachesSubjectsValue = 'Digital Signal Processing';
                break;
            case 30:
                teachesSubjectsValue = 'Digital Systems';
                break;
            case 31:
                teachesSubjectsValue = 'Discrete Mathematics';
                break;
            case 32:
                teachesSubjectsValue = 'Dynamics and Control Spacecraft';
                break;
            case 33:
                teachesSubjectsValue = 'Electric Drives';
                break;
            case 34:
                teachesSubjectsValue = 'Electrical Engineering Laboratory';
                break;
            case 35:
                teachesSubjectsValue = 'Electromagnetic Fields';
                break;
            case 36:
                teachesSubjectsValue = 'Electronic Materials';
                break;
            case 37:
                teachesSubjectsValue = 'Electronics Computer Aided Design';
                break;
            case 38:
                teachesSubjectsValue = 'Energy Conversion';
                break;
            case 39:
                teachesSubjectsValue = 'Engineering Economics';
                break;
            case 40:
                teachesSubjectsValue = 'Expert Systems';
                break;
            case 41:
                teachesSubjectsValue = 'Filter Design';
                break;
            case 42:
                teachesSubjectsValue = 'Fluid Mechanics';
                break;
            case 43:
                teachesSubjectsValue = 'Forecasting Methods';
                break;
            case 44:
                teachesSubjectsValue = 'Foundations of Information Systems';
                break;
            case 45:
                teachesSubjectsValue = 'Fourier Series and Integral Transforms';
                break;
            case 46:
                teachesSubjectsValue = 'Geometry View Multiple';
                break;
            case 47:
                teachesSubjectsValue = 'Graph Theory';
                break;
            case 48:
                teachesSubjectsValue = 'Hardware Description Languages';
                break;
            case 49:
                teachesSubjectsValue = 'High and Low Voltages Devices';
                break;
            case 50:
                teachesSubjectsValue = 'High Voltage Engineering';
                break;
            case 51:
                teachesSubjectsValue = 'Introduction to Computer Science';
                break;
            case 52:
                teachesSubjectsValue = 'Introduction to Control Theory';
                break;
            case 53:
                teachesSubjectsValue = 'Introduction to Cryptography';
                break;
            case 54:
                teachesSubjectsValue = 'Introduction to Fuzzy Logic';
                break;
            case 55:
                teachesSubjectsValue = 'Introduction to Lasers';
                break;
            case 56:
                teachesSubjectsValue = 'Introduction to Linear Systems';
                break;
            case 57:
                teachesSubjectsValue = 'Introduction to Microwaves';
                break;
            case 58:
                teachesSubjectsValue = 'Introduction to Modern Analysis';
                break;
            case 59:
                teachesSubjectsValue = 'Introduction to Robotics';
                break;
            case 60:
                teachesSubjectsValue = 'Laboratory of Logic Digital Circuits';
                break;
            case 61:
                teachesSubjectsValue = 'Linear Algebra';
                break;
            case 62:
                teachesSubjectsValue = 'Logic Design';
                break;
            case 63:
                teachesSubjectsValue = 'Logic For Computer Science';
                break;
            case 64:
                teachesSubjectsValue = 'Logic Programming';
                break;
            case 65:
                teachesSubjectsValue = 'Machine Learning';
                break;
            case 66:
                teachesSubjectsValue = 'Machine Vision';
                break;
            case 67:
                teachesSubjectsValue = 'Mathematical Modeling';
                break;
            case 68:
                teachesSubjectsValue = 'Mathematical Tools for Computer Science';
                break;
            case 69:
                teachesSubjectsValue = 'Mechanics of Solids';
                break;
            case 70:
                teachesSubjectsValue = 'Microprocessors';
                break;
            case 71:
                teachesSubjectsValue = 'Microprocessors Laboratory';
                break;
            case 72:
                teachesSubjectsValue = 'Modern Optics and Electro optics';
                break;
            case 73:
                teachesSubjectsValue = 'Network Theory';
                break;
            case 74:
                teachesSubjectsValue = 'Neural Networks';
                break;
            case 75:
                teachesSubjectsValue = 'Numerical algorithms';
                break;
            case 76:
                teachesSubjectsValue = 'Numerical Analysis';
                break;
            case 77:
                teachesSubjectsValue = 'Object Oriented Programming';
                break;
            case 78:
                teachesSubjectsValue = 'Operating Systems';
                break;
            case 79:
                teachesSubjectsValue = 'Ordinary Differential Equations';
                break;
            case 80:
                teachesSubjectsValue = 'Partial Differential Equations';
                break;
            case 81:
                teachesSubjectsValue = 'Photonics and Electro-optics systems';
                break;
            case 82:
                teachesSubjectsValue = 'Power Electronics Systems';
                break;
            case 83:
                teachesSubjectsValue = 'Power Systems';
                break;
            case 84:
                teachesSubjectsValue = 'Programming in C';
                break;
            case 85:
                teachesSubjectsValue = 'Programming in C#';
                break;
            case 86:
                teachesSubjectsValue = 'Programming in Java';
                break;
            case 87:
                teachesSubjectsValue = 'Programming in JavaScript';
                break;
            case 88:
                teachesSubjectsValue = 'Programming in Python';
                break;
            case 89:
                teachesSubjectsValue = 'Random Signals';
                break;
            case 90:
                teachesSubjectsValue = 'Real Time Systems';
                break;
            case 91:
                teachesSubjectsValue = 'Receiving and Transmitting Techniques';
                break;
            case 92:
                teachesSubjectsValue = 'Robots Dynamics and Control';
                break;
            case 93:
                teachesSubjectsValue = 'Secure Quality Programs';
                break;
            case 94:
                teachesSubjectsValue = 'Semiconductor Devices';
                break;
            case 95:
                teachesSubjectsValue = 'Semiconductors';
                break;
            case 96:
                teachesSubjectsValue = 'Signal and Image Processing ';
                break;
            case 97:
                teachesSubjectsValue = 'Signals and Systems';
                break;
            case 98:
                teachesSubjectsValue = 'Statistical Inference';
                break;
            case 99:
                teachesSubjectsValue = 'Statistics and Probability';
                break;
            case 100:
                teachesSubjectsValue = 'Switching and Logic Design';
                break;
            case 101:
                teachesSubjectsValue = 'System Programming';
                break;
            case 102:
                teachesSubjectsValue = 'Waves and Distributed Systems';
                break;
            case 103:
                teachesSubjectsValue = 'Waves Propagation';
                break;
            case 104:
                teachesSubjectsValue = 'Web Programming';
                break;
            default:
                console.log("Bad pipe value.");
                break;
        }
        return teachesSubjectsValue;
    };
    return TeachesSubjectsPipe;
}());
TeachesSubjectsPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'teachesSubjects',
    })
], TeachesSubjectsPipe);

//# sourceMappingURL=teaches-subjects.js.map

/***/ }),

/***/ 716:
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
            case 1:
                teachesInstitutionsValue = 'Holon Institute Of Technology';
                break;
            case 2:
                teachesInstitutionsValue = 'Technion';
                break;
            case 3:
                teachesInstitutionsValue = 'Ariel University';
                break;
            case 4:
                teachesInstitutionsValue = 'Bar-Ilan University';
                break;
            case 5:
                teachesInstitutionsValue = 'Ben Gurion University';
                break;
            case 6:
                teachesInstitutionsValue = 'Ben-Gurion University of the Negev';
                break;
            case 7:
                teachesInstitutionsValue = 'Hebrew University';
                break;
            case 8:
                teachesInstitutionsValue = 'Open University of Israel';
                break;
            case 9:
                teachesInstitutionsValue = 'Tel-Aviv University';
                break;
            case 10:
                teachesInstitutionsValue = 'Weizmann Institute of Science';
                break;
            case 11:
                teachesInstitutionsValue = 'Academic College of Tel Aviv-Yafo';
                break;
            case 12:
                teachesInstitutionsValue = 'Afeka College of Engineering';
                break;
            case 13:
                teachesInstitutionsValue = 'Ashkelon Academic College';
                break;
            case 14:
                teachesInstitutionsValue = 'Beersheba Tehni School';
                break;
            case 15:
                teachesInstitutionsValue = 'Beit Zvi School of the Performing Arts';
                break;
            case 16:
                teachesInstitutionsValue = 'Bezalel Academy of Art and Design';
                break;
            case 17:
                teachesInstitutionsValue = 'Carmel Academic Center';
                break;
            case 18:
                teachesInstitutionsValue = 'Center for Academic Studies';
                break;
            case 19:
                teachesInstitutionsValue = 'College of Law and Business';
                break;
            case 20:
                teachesInstitutionsValue = 'COMAS';
                break;
            case 21:
                teachesInstitutionsValue = 'Dan Academic Center';
                break;
            case 22:
                teachesInstitutionsValue = 'Hadassah Academic College';
                break;
            case 23:
                teachesInstitutionsValue = 'Haredi College of Jerusalem';
                break;
            case 24:
                teachesInstitutionsValue = 'Interdisciplinary Center Herzliya';
                break;
            case 25:
                teachesInstitutionsValue = 'Israel College of the Bible';
                break;
            case 26:
                teachesInstitutionsValue = 'Jerusalem Academy of Music and Dance';
                break;
            case 27:
                teachesInstitutionsValue = 'Jerusalem College of Engineering';
                break;
            case 28:
                teachesInstitutionsValue = 'Jerusalem College of Technology';
                break;
            case 29:
                teachesInstitutionsValue = 'Jerusalem University College';
                break;
            case 30:
                teachesInstitutionsValue = 'Kfar-Avraham Technology College';
                break;
            case 31:
                teachesInstitutionsValue = 'Kinneret Academic College';
                break;
            case 32:
                teachesInstitutionsValue = 'Lander Institute';
                break;
            case 33:
                teachesInstitutionsValue = 'Netanya Academic College';
                break;
            case 34:
                teachesInstitutionsValue = 'Ono Academi College';
                break;
            case 35:
                teachesInstitutionsValue = 'ORT Braude College of Engineering';
                break;
            case 36:
                teachesInstitutionsValue = 'Peres Academic Center';
                break;
            case 37:
                teachesInstitutionsValue = 'Reidman College';
                break;
            case 38:
                teachesInstitutionsValue = 'Ruppin Academic Center';
                break;
            case 39:
                teachesInstitutionsValue = 'Sami Shamoon College of Engineering';
                break;
            case 40:
                teachesInstitutionsValue = 'Sapir Academic College';
                break;
            case 41:
                teachesInstitutionsValue = 'Shenkar College of Engineering and Design';
                break;
            case 42:
                teachesInstitutionsValue = 'Tel-Hai Academic College';
                break;
            default:
                console.log("Bad pipe value.");
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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RateShowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RateShowComponent = (function () {
    //#endregion
    //#region Constructor
    function RateShowComponent() {
    }
    return RateShowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], RateShowComponent.prototype, "stars", void 0);
RateShowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rate-show',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\components\rate-show\rate-show.html"*/'<div style="display: inline-block">\n    <rating [(ngModel)]="stars" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"\n        nullable="false"></rating>\n</div>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\components\rate-show\rate-show.html"*/
    }),
    __metadata("design:paramtypes", [])
], RateShowComponent);

//# sourceMappingURL=rate-show.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorites_favorites__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teacherslist_teacherslist__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyErrorStateMatcher = (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SearchPage = (function () {
    //#endregion
    //#region Constructor
    function SearchPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, commonProvider, rd) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.rd = rd;
        //#region Members
        this.brightness = 20;
        this.saturation = 0;
        this.warmth = 1300;
        this.structure = { lower: 30, upper: 140 };
        this.genderFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null);
        this.teachesAtFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null);
        this.teachesSubjectsFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null);
        this.teachesInstitutionsFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */](null);
        this.showErrorMessagePrices = false;
        this.showErrorMessage = false;
        this.matcher = new MyErrorStateMatcher();
        this.filteredStates = this.teachesSubjectsFormControl.valueChanges
            .startWith(null)
            .map(function (subject) { return subject ? _this.filterStates(subject) : _this.commonProvider.subjectsArray.slice(); });
    }
    SearchPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        setTimeout(function () {
            _this.rd.removeClass(_this.getTeachersAnimation.nativeElement, "m-opacity-0");
            _this.rd.addClass(_this.getTeachersAnimation.nativeElement, "fadeIn");
        }, 700);
    };
    //#endregion
    //#region Public Methods
    SearchPage.prototype.filterStates = function (input) {
        return this.commonProvider.subjectsArray.filter(function (subject) {
            return subject.viewValue.toLowerCase().includes(input.toLowerCase());
        });
    };
    SearchPage.prototype.searchTeachers = function () {
        var _this = this;
        this.showErrorMessage = false;
        this.showErrorMessagePrices = false;
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
            return;
        }
        var searchTeacherModel = {
            fromPrice: this.structure.lower,
            toPrice: this.structure.upper,
            teachesAt: this.teachesAtFormControl.value == null ? this.teachesAtFormControl.value : parseInt(this.teachesAtFormControl.value),
            teachesInstitutions: this.teachesInstitutionsFormControl.value == null ? this.teachesInstitutionsFormControl.value : parseInt(this.teachesInstitutionsFormControl.value),
            teachesSubjects: this.getSubjectID(),
            gender: this.genderFormControl.value == null ? this.genderFormControl.value : parseInt(this.genderFormControl.value)
        };
        var loading = this.loadingCtrl.create({
            content: 'Getting teachers, please wait...'
        });
        loading.present();
        var searchedSubject = this.getsearchedSubject();
        var searchedInstitute = this.getsearchedInstitute();
        this.apiProvider.httpPost('teacher/search', searchTeacherModel)
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__teacherslist_teacherslist__["a" /* TeacherslistPage */], {
                    teacherSearchList: success,
                    subject: searchedSubject,
                    institute: searchedInstitute
                });
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
            content: 'Getting teachers, please wait...'
        });
        loading.present();
        this.apiProvider.httpGet('teacher/getall')
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__teacherslist_teacherslist__["a" /* TeacherslistPage */], { teacherSearchList: success });
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
    SearchPage.prototype.goPage = function (page) {
        switch (page) {
            case 'favorites':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__favorites_favorites__["a" /* FavoritesPage */]);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    //#endregion
    //#region Private Methods
    SearchPage.prototype.isModelValid = function () {
        if (this.structure == null ||
            !this.genderFormControl.valid ||
            !this.teachesAtFormControl.valid ||
            !this.teachesSubjectsFormControl.valid ||
            this.structure.lower == null || this.structure.lower < 0 ||
            !this.teachesInstitutionsFormControl.valid ||
            this.structure.upper == null || this.structure.upper > 200 ||
            this.structure.lower > this.structure.upper) {
            if (this.structure.lower > this.structure.upper) {
                this.showErrorMessagePrices = true;
            }
            return false;
        }
        else {
            return true;
        }
    };
    SearchPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    SearchPage.prototype.getSubjectID = function () {
        var _this = this;
        var subjectID;
        if (this.teachesSubjectsFormControl.value != null) {
            subjectID = this.commonProvider.subjectsArray.find(function (data) {
                return data.viewValue === _this.teachesSubjectsFormControl.value;
            });
        }
        return subjectID == null ? null : parseInt(subjectID.value);
    };
    SearchPage.prototype.getsearchedSubject = function () {
        var _this = this;
        var result = null;
        if (this.teachesSubjectsFormControl.value && this.teachesSubjectsFormControl.value != null && this.teachesSubjectsFormControl.value !== "") {
            result = this.teachesSubjectsFormControl.value;
        }
        if (result && result != "") {
            result = this.commonProvider.subjectsArray.find(function (data) {
                return data.viewValue === _this.teachesSubjectsFormControl.value;
            });
            result = result.value;
        }
        return result;
    };
    SearchPage.prototype.getsearchedInstitute = function () {
        var result = null;
        if (this.teachesInstitutionsFormControl.value && this.teachesInstitutionsFormControl.value != null && this.teachesInstitutionsFormControl.value !== "") {
            result = this.teachesInstitutionsFormControl.value;
        }
        return result;
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('getTeachersAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], SearchPage.prototype, "getTeachersAnimation", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">Search Teacher</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="goPage(\'favorites\');">\n        <ion-icon name="ios-bookmarks"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-weight-300 m-font-size-35px">Search for a teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font> Be specific with your filter details in order to get the best results.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Get all teachers button -->\n      <ion-row #getTeachersAnimation text-center class="animated m-opacity-0">\n        <ion-col col-12>\n          <button ion-button outline icon-start small (click)="getAllTeachers();">\n            <ion-icon name="ios-people"></ion-icon>\n            See all teachers at StudyHub\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Price range -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-list-header>\n            Price per hour\n            <ion-badge item-end color="dark">From: {{structure.lower}}</ion-badge>\n            <ion-badge item-end color="dark">To: {{structure.upper}}</ion-badge>\n          </ion-list-header>\n          <ion-item>\n            <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark" min="0" max="200">\n              <ion-label range-left>0</ion-label>\n              <ion-label range-right>200</ion-label>\n            </ion-range>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Teaches institutions -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Institidues you\'re looking for?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teaches Subjects -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <input matInput type="text" maxlength="55" placeholder="Teaches subjects" aria-label="Teaches subjects" [matAutocomplete]="auto"\n                [formControl]="teachesSubjectsFormControl">\n              <mat-autocomplete #auto="matAutocomplete">\n                <mat-option *ngFor="let state of filteredStates | async" [value]="state.viewValue">\n                  {{ state.viewValue }}\n                </mat-option>\n              </mat-autocomplete>\n              <mat-hint>What courses are you looking for?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Gender -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Preferred place to learn?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Gender" [formControl]="genderFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n                <mat-option value="3">Doesn\'t matter</mat-option>\n              </mat-select>\n              <mat-hint>Gender preferred of your teacher?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Search teachers button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button (click)="searchTeachers()" block>Search for teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_core__["Renderer2"]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FavoritesPage = (function () {
    //#endregion
    //#region Constructor
    function FavoritesPage(navCtrl, navParams, favoritesManagerProvider, apiProvider, modalCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        //#region Members
        this.tabRef = this.navCtrl.parent;
        this.userHaveFavorites = false;
        this.teachers = [];
        var listOfTeacherID = this.favoritesManagerProvider.getFavorites();
        this.bootstrapFavoritePage(listOfTeacherID);
    }
    //#endregion
    //#region Public Methods
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
    FavoritesPage.prototype.expandTeacherInformation = function (index) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__["a" /* SingleteacherPage */], { teacher: this.teachers[index] });
        modal.onDidDismiss(function (data) {
            if (data === false) {
                _this.teachers.splice(index, 1);
                if (_this.teachers.length === 0) {
                    _this.userHaveFavorites = false;
                }
            }
        });
        modal.present();
    };
    //#endregion
    //#region Private Methods
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
        var _this = this;
        var data = {
            "listOfTeacherID": listOfTeacherID
        };
        var loading = this.loadingCtrl.create({
            content: 'Loading favorites, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/getlistofteachersbyid', data)
            .subscribe(function (teachersList) {
            teachersList = teachersList.filter(function (teacher) { return teacher != null; });
            _this.teachers = teachersList;
            for (var _i = 0, _a = _this.teachers; _i < _a.length; _i++) {
                var teacher = _a[_i];
                _this.GetImageForTeacher(teacher);
            }
            loading.dismiss();
        }, function (failure) {
            var alert = _this.createAlert('Couldn\'t load the favorites teachers', 'There was some problem, we couldn\'t load the favorite teachers, please try again later.');
            alert.present();
        });
    };
    FavoritesPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    FavoritesPage.prototype.GetImageForTeacher = function (teacher) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.apiProvider.httpGet("image/getimagebyid/" + teacher.image)
                    .subscribe(function (success) { teacher.image = success.image; }, function (failure) { teacher.image = "assets\\imgs\\imageNotFound.jpg"; });
                return [2 /*return*/];
            });
        });
    };
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/'<ion-header>\n  <ion-navbar text-center>\n    <ion-title>\n      <font class="m-color-white">Favorites</font>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Favorites</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          This is all the favorites teachers you\'ve saved, you can manage all your teachers here and save them for the future.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- No favorites case -->\n      <div *ngIf="!userHaveFavorites">\n        <!-- No teachers as favorites text -->\n        <ion-row text-center>\n          <ion-col col-12>\n            You have none in your favorite list.\n          </ion-col>\n        </ion-row>\n\n        <!-- Search for teachers button -->\n        <ion-row text-center>\n          <ion-col col-12>\n            <button ion-button icon-start outline (click)="goPage(\'search\');">\n              <ion-icon name="ios-search"></ion-icon>\n              Search for teacher\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- There are teachers in favorites list -->\n      <div *ngIf="userHaveFavorites">\n\n        <ion-row>\n          <ion-col col-6 class="animated zoomIn" *ngFor="let teacher of teachers;let i = index;">\n            <ion-card (click)="expandTeacherInformation(i);" text-center>\n              <!-- Image -->\n              <ion-col col-12 class="m-padding-0-impo" *ngIf="teacher.image == null">\n                <img class="m-default-image-cards" src="assets\\imgs\\imageNotFound.jpg" />\n              </ion-col>\n              <ion-col col-12 class="m-padding-0-impo" *ngIf="teacher.image != null">\n                <img class="m-default-image-cards-favorite" src="{{teacher.image}}" />\n              </ion-col>\n\n              <!-- Name and Last Name-->\n              <ion-col col-12>\n                <h2><b>{{teacher.firstName}} {{teacher.lastName}}</b></h2>\n              </ion-col>\n              <!-- Price -->\n              <ion-col col-12 class="m-padding-0-impo">\n                <h2>\n                  <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                  <font class="m-font-size-10px">ILS</font>\n                </h2>\n              </ion-col>\n              <!-- Rate -->\n              <ion-col col-12 class="m-padding-0-impo">\n                  <rate-show [stars]="teachers[i].rate"></rate-show>\n              </ion-col>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommonProvider = (function () {
    // subjectsArray.sort(function (a, b) {
    //   if (a.viewValue.toLowerCase() < b.viewValue.toLowerCase()) {
    //     return -1;
    //   } else if (a.viewValue.toLowerCase() > b.viewValue.toLowerCase()) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });
    // for (var i = 1; i <= subjectsArray.length; i++) {
    //   var buildString = "{ value: '" + i + "', viewValue: '" + subjectsArray[i - 1].viewValue + "' },<br>";
    //   document.getElementById("test").innerHTML += buildString;
    // }
    function CommonProvider() {
        this.teachesAtArray = [
            { value: '1', viewValue: 'Student\'s house' },
            { value: '2', viewValue: 'Academic institution' },
            { value: '3', viewValue: 'Both' }
        ];
        this.genderArray = [
            { value: '1', viewValue: 'Male' },
            { value: '2', viewValue: 'Female' }
        ];
        this.teachesInstitutionsArray = [
            { value: '1', viewValue: 'Holon Institute Of Technology' },
            { value: '2', viewValue: 'Technion' },
            { value: '3', viewValue: 'Ariel University' },
            { value: '4', viewValue: 'Bar-Ilan University' },
            { value: '5', viewValue: 'Ben Gurion University' },
            { value: '6', viewValue: 'Ben-Gurion University of the Negev' },
            { value: '7', viewValue: 'Hebrew University' },
            { value: '8', viewValue: 'Open University of Israel' },
            { value: '9', viewValue: 'Tel-Aviv University' },
            { value: '10', viewValue: 'Weizmann Institute of Science' },
            { value: '11', viewValue: 'Academic College of Tel Aviv-Yafo' },
            { value: '12', viewValue: 'Afeka College of Engineering' },
            { value: '13', viewValue: 'Ashkelon Academic College' },
            { value: '14', viewValue: 'Beersheba Tehni School' },
            { value: '15', viewValue: 'Beit Zvi School of the Performing Arts' },
            { value: '16', viewValue: 'Bezalel Academy of Art and Design' },
            { value: '17', viewValue: 'Carmel Academic Center' },
            { value: '18', viewValue: 'Center for Academic Studies' },
            { value: '19', viewValue: 'College of Law and Business' },
            { value: '20', viewValue: 'COMAS' },
            { value: '21', viewValue: 'Dan Academic Center' },
            { value: '22', viewValue: 'Hadassah Academic College' },
            { value: '23', viewValue: 'Haredi College of Jerusalem' },
            { value: '24', viewValue: 'Interdisciplinary Center Herzliya' },
            { value: '25', viewValue: 'Israel College of the Bible' },
            { value: '26', viewValue: 'Jerusalem Academy of Music and Dance' },
            { value: '27', viewValue: 'Jerusalem College of Engineering' },
            { value: '28', viewValue: 'Jerusalem College of Technology' },
            { value: '29', viewValue: 'Jerusalem University College' },
            { value: '30', viewValue: 'Kfar-Avraham Technology College' },
            { value: '31', viewValue: 'Kinneret Academic College' },
            { value: '32', viewValue: 'Lander Institute' },
            { value: '33', viewValue: 'Netanya Academic College' },
            { value: '34', viewValue: 'Ono Academi College' },
            { value: '35', viewValue: 'ORT Braude College of Engineering' },
            { value: '36', viewValue: 'Peres Academic Center' },
            { value: '37', viewValue: 'Reidman College' },
            { value: '38', viewValue: 'Ruppin Academic Center' },
            { value: '39', viewValue: 'Sami Shamoon College of Engineering' },
            { value: '40', viewValue: 'Sapir Academic College' },
            { value: '41', viewValue: 'Shenkar College of Engineering and Design' },
            { value: '42', viewValue: 'Tel-Hai Academic College' }
        ];
        this.subjectsArray = [
            { value: '1', viewValue: 'Advanced Control Theory' },
            { value: '2', viewValue: 'Advanced Programming Workshop' },
            { value: '3', viewValue: 'Algorithm in Optimization' },
            { value: '4', viewValue: 'Analog Linear Electronic Circuits' },
            { value: '5', viewValue: 'Antennas and Radiation' },
            { value: '6', viewValue: 'Approximation algorithms' },
            { value: '7', viewValue: 'Artificial Intelligence' },
            { value: '8', viewValue: 'Automata and Formal Languages' },
            { value: '9', viewValue: 'Calculus' },
            { value: '10', viewValue: 'Communication Engineering' },
            { value: '11', viewValue: 'Compilation Theory' },
            { value: '12', viewValue: 'Complex Functions' },
            { value: '13', viewValue: 'Complex Valued Functions' },
            { value: '14', viewValue: 'Computability and Complexity of Algorithms' },
            { value: '15', viewValue: 'Computer Architecture' },
            { value: '16', viewValue: 'Computer Communication Networks' },
            { value: '17', viewValue: 'Computer Graphics' },
            { value: '18', viewValue: 'Computer Organization and Assembly' },
            { value: '19', viewValue: 'Computer Structure and Switching Theory' },
            { value: '20', viewValue: 'Computer Vision' },
            { value: '21', viewValue: 'Conversion Laboratory Energy' },
            { value: '22', viewValue: 'Data Base Systems' },
            { value: '23', viewValue: 'Data Compression' },
            { value: '24', viewValue: 'Data Mining' },
            { value: '25', viewValue: 'Data Structures' },
            { value: '26', viewValue: 'Design and Analysis of Algorithms' },
            { value: '27', viewValue: 'Design Patterns' },
            { value: '28', viewValue: 'Digital Circuits' },
            { value: '29', viewValue: 'Digital Signal Processing' },
            { value: '30', viewValue: 'Digital Systems' },
            { value: '31', viewValue: 'Discrete Mathematics' },
            { value: '32', viewValue: 'Dynamics and Control Spacecraft' },
            { value: '33', viewValue: 'Electric Drives' },
            { value: '34', viewValue: 'Electrical Engineering Laboratory' },
            { value: '35', viewValue: 'Electromagnetic Fields' },
            { value: '36', viewValue: 'Electronic Materials' },
            { value: '37', viewValue: 'Electronics Computer Aided Design' },
            { value: '38', viewValue: 'Energy Conversion' },
            { value: '39', viewValue: 'Engineering Economics' },
            { value: '40', viewValue: 'Expert Systems' },
            { value: '41', viewValue: 'Filter Design' },
            { value: '42', viewValue: 'Fluid Mechanics' },
            { value: '43', viewValue: 'Forecasting Methods' },
            { value: '44', viewValue: 'Foundations of Information Systems' },
            { value: '45', viewValue: 'Fourier Series and Integral Transforms' },
            { value: '46', viewValue: 'Geometry View Multiple' },
            { value: '47', viewValue: 'Graph Theory' },
            { value: '48', viewValue: 'Hardware Description Languages' },
            { value: '49', viewValue: 'High and Low Voltages Devices' },
            { value: '50', viewValue: 'High Voltage Engineering' },
            { value: '51', viewValue: 'Introduction to Computer Science' },
            { value: '52', viewValue: 'Introduction to Control Theory' },
            { value: '53', viewValue: 'Introduction to Cryptography' },
            { value: '54', viewValue: 'Introduction to Fuzzy Logic' },
            { value: '55', viewValue: 'Introduction to Lasers' },
            { value: '56', viewValue: 'Introduction to Linear Systems' },
            { value: '57', viewValue: 'Introduction to Microwaves' },
            { value: '58', viewValue: 'Introduction to Modern Analysis' },
            { value: '59', viewValue: 'Introduction to Robotics' },
            { value: '60', viewValue: 'Laboratory of Logic Digital Circuits' },
            { value: '61', viewValue: 'Linear Algebra' },
            { value: '62', viewValue: 'Logic Design' },
            { value: '63', viewValue: 'Logic For Computer Science' },
            { value: '64', viewValue: 'Logic Programming' },
            { value: '65', viewValue: 'Machine Learning' },
            { value: '66', viewValue: 'Machine Vision' },
            { value: '67', viewValue: 'Mathematical Modeling' },
            { value: '68', viewValue: 'Mathematical Tools for Computer Science' },
            { value: '69', viewValue: 'Mechanics of Solids' },
            { value: '70', viewValue: 'Microprocessors' },
            { value: '71', viewValue: 'Microprocessors Laboratory' },
            { value: '72', viewValue: 'Modern Optics and Electro optics' },
            { value: '73', viewValue: 'Network Theory' },
            { value: '74', viewValue: 'Neural Networks' },
            { value: '75', viewValue: 'Numerical algorithms' },
            { value: '76', viewValue: 'Numerical Analysis' },
            { value: '77', viewValue: 'Object Oriented Programming' },
            { value: '78', viewValue: 'Operating Systems' },
            { value: '79', viewValue: 'Ordinary Differential Equations' },
            { value: '80', viewValue: 'Partial Differential Equations' },
            { value: '81', viewValue: 'Photonics and Electro-optics systems' },
            { value: '82', viewValue: 'Power Electronics Systems' },
            { value: '83', viewValue: 'Power Systems' },
            { value: '84', viewValue: 'Programming in C' },
            { value: '85', viewValue: 'Programming in C#' },
            { value: '86', viewValue: 'Programming in Java' },
            { value: '87', viewValue: 'Programming in JavaScript' },
            { value: '88', viewValue: 'Programming in Python' },
            { value: '89', viewValue: 'Random Signals' },
            { value: '90', viewValue: 'Real Time Systems' },
            { value: '91', viewValue: 'Receiving and Transmitting Techniques' },
            { value: '92', viewValue: 'Robots Dynamics and Control' },
            { value: '93', viewValue: 'Secure Quality Programs' },
            { value: '94', viewValue: 'Semiconductor Devices' },
            { value: '95', viewValue: 'Semiconductors' },
            { value: '96', viewValue: 'Signal and Image Processing ' },
            { value: '97', viewValue: 'Signals and Systems' },
            { value: '98', viewValue: 'Statistical Inference' },
            { value: '99', viewValue: 'Statistics and Probability' },
            { value: '100', viewValue: 'Switching and Logic Design' },
            { value: '101', viewValue: 'System Programming' },
            { value: '102', viewValue: 'Waves and Distributed Systems' },
            { value: '103', viewValue: 'Waves Propagation' },
            { value: '104', viewValue: 'Web Programming' }
        ];
        this.teachesSubjectsGroupsArray = [
            {
                name: 'A',
                subjects: [
                    { value: '1', viewValue: 'Advanced Control Theory' },
                    { value: '2', viewValue: 'Advanced Programming Workshop' },
                    { value: '3', viewValue: 'Algorithm in Optimization' },
                    { value: '4', viewValue: 'Analog Linear Electronic Circuits' },
                    { value: '5', viewValue: 'Antennas and Radiation' },
                    { value: '6', viewValue: 'Approximation algorithms' },
                    { value: '7', viewValue: 'Artificial Intelligence' },
                    { value: '8', viewValue: 'Automata and Formal Languages' }
                ]
            },
            {
                name: 'C',
                subjects: [
                    { value: '9', viewValue: 'Calculus' },
                    { value: '10', viewValue: 'Communication Engineering' },
                    { value: '11', viewValue: 'Compilation Theory' },
                    { value: '12', viewValue: 'Complex Functions' },
                    { value: '13', viewValue: 'Complex Valued Functions' },
                    { value: '14', viewValue: 'Computability and Complexity of Algorithms' },
                    { value: '15', viewValue: 'Computer Architecture' },
                    { value: '16', viewValue: 'Computer Communication Networks' },
                    { value: '17', viewValue: 'Computer Graphics' },
                    { value: '18', viewValue: 'Computer Organization and Assembly' },
                    { value: '19', viewValue: 'Computer Structure and Switching Theory' },
                    { value: '20', viewValue: 'Computer Vision' },
                    { value: '21', viewValue: 'Conversion Laboratory Energy' }
                ]
            },
            {
                name: 'D',
                subjects: [
                    { value: '22', viewValue: 'Data Base Systems' },
                    { value: '23', viewValue: 'Data Compression' },
                    { value: '24', viewValue: 'Data Mining' },
                    { value: '25', viewValue: 'Data Structures' },
                    { value: '26', viewValue: 'Design and Analysis of Algorithms' },
                    { value: '27', viewValue: 'Design Patterns' },
                    { value: '28', viewValue: 'Digital Circuits' },
                    { value: '29', viewValue: 'Digital Signal Processing' },
                    { value: '30', viewValue: 'Digital Systems' },
                    { value: '31', viewValue: 'Discrete Mathematics' },
                    { value: '32', viewValue: 'Dynamics and Control Spacecraft' }
                ]
            },
            {
                name: 'E',
                subjects: [
                    { value: '33', viewValue: 'Electric Drives' },
                    { value: '34', viewValue: 'Electrical Engineering Laboratory' },
                    { value: '35', viewValue: 'Electromagnetic Fields' },
                    { value: '36', viewValue: 'Electronic Materials' },
                    { value: '37', viewValue: 'Electronics Computer Aided Design' },
                    { value: '38', viewValue: 'Energy Conversion' },
                    { value: '39', viewValue: 'Engineering Economics' },
                    { value: '40', viewValue: 'Expert Systems' }
                ]
            },
            {
                name: 'F',
                subjects: [
                    { value: '41', viewValue: 'Filter Design' },
                    { value: '42', viewValue: 'Fluid Mechanics' },
                    { value: '43', viewValue: 'Forecasting Methods' },
                    { value: '44', viewValue: 'Foundations of Information Systems' },
                    { value: '45', viewValue: 'Fourier Series and Integral Transforms' }
                ]
            },
            {
                name: 'G',
                subjects: [
                    { value: '46', viewValue: 'Geometry View Multiple' },
                    { value: '47', viewValue: 'Graph Theory' }
                ]
            },
            {
                name: 'H',
                subjects: [
                    { value: '48', viewValue: 'Hardware Description Languages' },
                    { value: '49', viewValue: 'High and Low Voltages Devices' },
                    { value: '50', viewValue: 'High Voltage Engineering' }
                ]
            },
            {
                name: 'I',
                subjects: [
                    { value: '51', viewValue: 'Introduction to Computer Science' },
                    { value: '52', viewValue: 'Introduction to Control Theory' },
                    { value: '53', viewValue: 'Introduction to Cryptography' },
                    { value: '54', viewValue: 'Introduction to Fuzzy Logic' },
                    { value: '55', viewValue: 'Introduction to Lasers' },
                    { value: '56', viewValue: 'Introduction to Linear Systems' },
                    { value: '57', viewValue: 'Introduction to Microwaves' },
                    { value: '58', viewValue: 'Introduction to Modern Analysis' },
                    { value: '59', viewValue: 'Introduction to Robotics' }
                ]
            },
            {
                name: 'L',
                subjects: [
                    { value: '60', viewValue: 'Laboratory of Logic Digital Circuits' },
                    { value: '61', viewValue: 'Linear Algebra' },
                    { value: '62', viewValue: 'Logic Design' },
                    { value: '63', viewValue: 'Logic For Computer Science' },
                    { value: '64', viewValue: 'Logic Programming' }
                ]
            },
            {
                name: 'M',
                subjects: [
                    { value: '65', viewValue: 'Machine Learning' },
                    { value: '66', viewValue: 'Machine Vision' },
                    { value: '67', viewValue: 'Mathematical Modeling' },
                    { value: '68', viewValue: 'Mathematical Tools for Computer Science' },
                    { value: '69', viewValue: 'Mechanics of Solids' },
                    { value: '70', viewValue: 'Microprocessors' },
                    { value: '71', viewValue: 'Microprocessors Laboratory' },
                    { value: '72', viewValue: 'Modern Optics and Electro optics' }
                ]
            },
            {
                name: 'N',
                subjects: [
                    { value: '73', viewValue: 'Network Theory' },
                    { value: '74', viewValue: 'Neural Networks' },
                    { value: '75', viewValue: 'Numerical algorithms' },
                    { value: '76', viewValue: 'Numerical Analysis' }
                ]
            },
            {
                name: 'O',
                subjects: [
                    { value: '77', viewValue: 'Object Oriented Programming' },
                    { value: '78', viewValue: 'Operating Systems' },
                    { value: '79', viewValue: 'Ordinary Differential Equations' }
                ]
            },
            {
                name: 'P',
                subjects: [
                    { value: '80', viewValue: 'Partial Differential Equations' },
                    { value: '81', viewValue: 'Photonics and Electro-optics systems' },
                    { value: '82', viewValue: 'Power Electronics Systems' },
                    { value: '83', viewValue: 'Power Systems' },
                    { value: '84', viewValue: 'Programming in C' },
                    { value: '85', viewValue: 'Programming in C#' },
                    { value: '86', viewValue: 'Programming in Java' },
                    { value: '87', viewValue: 'Programming in JavaScript' },
                    { value: '88', viewValue: 'Programming in Python' }
                ]
            },
            {
                name: 'R',
                subjects: [
                    { value: '89', viewValue: 'Random Signals' },
                    { value: '90', viewValue: 'Real Time Systems' },
                    { value: '91', viewValue: 'Receiving and Transmitting Techniques' },
                    { value: '92', viewValue: 'Robots Dynamics and Control' }
                ]
            },
            {
                name: 'S',
                subjects: [
                    { value: '93', viewValue: 'Secure Quality Programs' },
                    { value: '94', viewValue: 'Semiconductor Devices' },
                    { value: '95', viewValue: 'Semiconductors' },
                    { value: '96', viewValue: 'Signal and Image Processing ' },
                    { value: '97', viewValue: 'Signals and Systems' },
                    { value: '98', viewValue: 'Statistical Inference' },
                    { value: '99', viewValue: 'Statistics and Probability' },
                    { value: '100', viewValue: 'Switching and Logic Design' },
                    { value: '101', viewValue: 'System Programming' }
                ]
            },
            {
                name: 'W',
                subjects: [
                    { value: '102', viewValue: 'Waves and Distributed Systems' },
                    { value: '103', viewValue: 'Waves Propagation' },
                    { value: '104', viewValue: 'Web Programming' }
                ]
            }
        ];
        this.reasonToContactArray = [
            { value: 'Suggestion', viewValue: 'Suggestion' },
            { value: 'Investment', viewValue: 'Investment' },
            { value: 'Careers', viewValue: 'Careers' },
            { value: 'Complain', viewValue: 'Complain' },
            { value: 'Bug report', viewValue: 'Bug report' },
            { value: 'Other', viewValue: 'Other' }
        ];
    }
    return CommonProvider;
}());
CommonProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], CommonProvider);

//# sourceMappingURL=common.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map