webpackJsonp([7],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__ = __webpack_require__(63);
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
        this.teacher = this.navParams.get('teacher');
        this.isTeacherFavorited = this.favoritesManagerProvider.isIDExist(this.teacher._id);
    }
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
        selector: 'page-singleteacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss();">\n        <font class="m-color-white">Close</font>\n      </button>\n    </ion-buttons>\n    <ion-title text-center>\n      <font class="m-color-white">{{teacher.firstName}} {{teacher.lastName}}</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <!-- Image and add recommend button -->\n    <ion-row>\n      <ion-col col-7 text-left *ngIf="teacher.image == null">\n        <img class="m-default-image-cards-singleteacher" src="assets\\imgs\\imageNotFound.jpg" />\n      </ion-col>\n      <ion-col col-7 text-left *ngIf="teacher.image != null">\n        <img class="m-default-image-cards-singleteacher" src="{{teacher.image}}" />\n      </ion-col>\n      <ion-col *ngIf="!isTeacherFavorited" col-5 text-right>\n        <button ion-button icon-end small outline color="dark" (click)="addFavorite()">\n          Add favorite\n          <ion-icon name="star"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col *ngIf="isTeacherFavorited" col-5 text-right>\n        <button ion-button icon-end small outline color="dark" (click)="removeFavorite()">\n          Remove favorite\n          <ion-icon name="star"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <!-- First name and Last name and Gender and Age -->\n    <ion-row>\n      <ion-col col-12>\n        <font class="m-font-size-20px">\n          <i>{{teacher.firstName}} {{teacher.lastName}}</i>\n        </font> -\n        <i>{{teacher.gender | gender}}, {{teacher.age}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Phone -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Phone: </b>\n        <i>{{teacher.phone}}</i>\n        <ion-icon class="m-padding-left-7px" color="secondary" name="logo-whatsapp" (click)="openWhatsApp()"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- Email -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Email: </b>\n        <i>{{teacher.email}}</i>\n      </ion-col>\n    </ion-row>\n\n    <!-- Prices -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Price: </b>\n        <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n        <font class="m-font-size-10px">ILS</font>\n      </ion-col>\n    </ion-row>\n\n    <!-- Rate -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Rate: </b>\n        <i>{{teacher.rate}}</i>\n        <font *ngIf="teacher.recommendations.length === 1">\n          <i>( {{teacher.recommendations.length}} person rated )</i>\n        </font>\n        <font *ngIf="teacher.recommendations.length !== 1">\n          <i>( {{teacher.recommendations.length}} people rated )</i>\n        </font>\n      </ion-col>\n    </ion-row>\n\n    <!-- Teaches At -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Teaches at:</b> {{teacher.teachesAt|teachesAt}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Teaches Institutions -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Teaches at Institutions:</b>\n      </ion-col>\n      <ion-col col-12 *ngFor="let subject of teacher.teachesInstitutions">\n        - {{subject | teachesInstitutions}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Message -->\n    <ion-row>\n      <ion-col col-12>\n        <b>Personal message: </b>{{teacher.personalMessage}}\n      </ion-col>\n    </ion-row>\n\n    <!-- Recommendations Text and Add recommend icon -->\n    <ion-row>\n      <ion-col col-6 text-left>\n        <b>\n          <u>Recommendations:</u>\n        </b>\n      </ion-col>\n      <ion-col col-6 text-right *ngIf="!alreadyAddedRecommend && !showRecommendationsBoolean">\n        <button ion-button outline icon-end small color="dark" (click)="openRecommendations()">\n          Add\n          <ion-icon name="ios-add-outline"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 text-right *ngIf="!alreadyAddedRecommend && showRecommendationsBoolean">\n        <button ion-button outline icon-end small color="dark" (click)="closeRecommendations()">\n          Close\n          <ion-icon name="ios-close-outline"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6 text-right *ngIf="alreadyAddedRecommend">\n        <ion-icon class="m-font-size-30px" name="md-done-all"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <!-- Show recommendation -->\n    <div #addRecommend class="animated bounceInDown" *ngIf="showRecommendationsBoolean" text-center>\n\n      <form class="m-form">\n\n      <!-- Add Recommendations text -->\n      <ion-row>\n        <ion-col col-12>\n          <b>\n            <u>Add recommendations:</u>\n          </b>\n        </ion-col>\n      </ion-row>\n\n      <!-- Full name and Email -->\n      <ion-row>\n        <!-- Full name -->\n        <ion-col col-6>\n          <mat-form-field class="m-full-width">\n            <input type="text" matInput placeholder="Full name" [formControl]="fullNameFormControl" [errorStateMatcher]="matcher">\n            <mat-hint>First name and Last name</mat-hint>\n            <mat-error *ngIf="fullNameFormControl.hasError(\'required\')">\n              Full name is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </ion-col>\n        <!-- Email -->\n        <ion-col col-6>\n          <mat-form-field class="m-full-width">\n            <input pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput placeholder="Email" [formControl]="emailFormControl"\n              [errorStateMatcher]="matcher">\n            <mat-hint>Ex: Email@gmail.com</mat-hint>\n            <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n              Please enter a valid email address.\n            </mat-error>\n            <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n              Email is\n              <strong>required</strong>\n            </mat-error>\n          </mat-form-field>\n        </ion-col>\n      </ion-row>\n\n      <!-- Rate input -->\n      <ion-row>\n        <ion-col col-12>\n          <rating [(ngModel)]="rate" [ngModelOptions]="{standalone: true}" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half" starIconName="star"\n            nullable="false"></rating>\n        </ion-col>\n      </ion-row>\n\n      <!-- Message -->\n      <ion-row>\n        <ion-col col-12>\n          <mat-form-field class="m-full-width">\n            <textarea matInput maxlength="100" rows="3" placeholder="Message" [formControl]="messageFormControl" [errorStateMatcher]="matcher"></textarea>\n            <mat-hint align="start">Please be kind :)</mat-hint>\n            <mat-hint align="end">{{messageFormControl.value.length}} / 100</mat-hint>\n            <mat-error *ngIf="messageFormControl.hasError(\'minlength\') && !messageFormControl.hasError(\'required\')">\n              Minimum number is 1\n            </mat-error>\n            <mat-error *ngIf="messageFormControl.hasError(\'maxlength\') && !messageFormControl.hasError(\'required\')">\n              Maximum number is 100\n            </mat-error>\n            <mat-error *ngIf="messageFormControl.hasError(\'required\')">\n              Write down something.\n            </mat-error>\n          </mat-form-field>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Add button message -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block outline (click)="addNewRecommend()" icon-start>\n            <ion-icon name="add"></ion-icon>Add</button>\n        </ion-col>\n      </ion-row>\n\n      </form>\n\n    </div>\n\n    <!-- Recommendations List -->\n    <ion-row *ngFor="let recommend of teacher.recommendations" class="m-border-bottom-1px-solid-b18b22">\n      <ion-col col-12>\n        {{recommend.fullName}} - {{recommend.rate}}\n      </ion-col>\n      <ion-col col-12>\n        - {{recommend.message}}\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\singleteacher\singleteacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__["a" /* ToasterProvider */],
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]])
], SingleteacherPage);

//# sourceMappingURL=singleteacher.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(88);
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
    function ContactusPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.fullNameFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.contactReasonFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.messageFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].maxLength(200)]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].email]);
        this.showErrorMessage = false;
        this.matcher = new MyErrorStateMatcher();
    }
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
        selector: 'page-contactus',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Contact Us</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-38px m-font-weight-300">\n            What is your opinion?\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          You can send us anything you wish, feedback, recommendation, new ideas, bugs you\'ve found, or even send message for fun,\n          we\'ll try to comment as soon as possible.\n        </ion-col>\n      </ion-row>\n\n      <!-- Direct contant -->\n      <ion-row text-left>\n        <ion-col col-12>\n          <font class="m-color-orange">You can contact the owner of this application by:</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Email: mmoshikoo@gmail.com</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Phone: 0542477052</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Full name and Reason to contact -->\n        <ion-row>\n          <!-- Full name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" matInput placeholder="Full name" [formControl]="fullNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>First name and Last name</mat-hint>\n              <mat-error *ngIf="fullNameFormControl.hasError(\'required\')">\n                Full name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Reason to contact -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Reason to contact" [formControl]="contactReasonFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.reasonToContactArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Why do you want to contact us?</mat-hint>\n              <mat-error *ngIf="contactReasonFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <input pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput placeholder="Email" [formControl]="emailFormControl"\n                [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="messageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Tell us your ideas, we will be happy to know.</mat-hint>\n              <mat-hint align="end">{{messageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="messageFormControl.hasError(\'minlength\') && !messageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'maxlength\') && !messageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'required\')">\n                Write down something.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n          <ion-col col-12>\n            <font class="m-color-red">Please fill the requested fields.</font>\n          </ion-col>\n        </ion-row>\n\n        \n      <!-- Buttons -->\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="primary" block (click)="sendContactUsForm();">\n            <ion-icon name="ios-send-outline"></ion-icon>\n            Send\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="secondary" block (click)="openWhatsApp();">\n            <ion-icon name="logo-whatsapp"></ion-icon>\n            WhatsApp\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JointeacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(88);
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
    function JointeacherPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, rd, platform, commonProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.rd = rd;
        this.platform = platform;
        this.commonProvider = commonProvider;
        this.firstNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.lastNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email]);
        this.phoneFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10)]);
        this.personalMessageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(200)]);
        this.toPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.fromPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.teachesAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.ageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(120)]);
        this.genderAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesInstitutionsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.image = null;
        this.matcher = new MyErrorStateMatcher();
        this.showErrorMessagePrices = false;
        this.showErrorMessage = false;
        // We take minutes 20 in the calculation to take the padding at calculation.
        this.imageWidth = platform.width() - 20;
        this.imageHeight = platform.width() - 20;
    }
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
        if (!this.teachesAtFormControl.value ||
            !this.fromPriceFormControl.valid ||
            !this.toPriceFormControl.valid ||
            this.fromPriceFormControl.value > this.toPriceFormControl.value ||
            !this.ageFormControl.valid ||
            !this.phoneFormControl.valid ||
            !this.isPhoneValid(this.phoneFormControl.value) ||
            !this.emailFormControl.valid ||
            !__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default()(this.emailFormControl.value) ||
            !this.genderAtFormControl.valid ||
            !this.firstNameFormControl.valid ||
            !this.lastNameFormControl.valid ||
            !this.personalMessageFormControl.valid ||
            !this.teachesAtFormControl.valid ||
            this.teachesAtFormControl.value == null || this.teachesAtFormControl.value.length === 0) {
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
        selector: 'page-jointeacher',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Join as Teacher</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Become a next-generation teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          In order to join as teacher you must fill all the following fields. Be specific with your information to gain more good resume\n          and comments from students. Remember, good instructor is remembered for lifetime.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font>\n          Give full information at the relevant fields to interest more students.\n        </ion-col>\n      </ion-row>\n\n      <!-- Price warning -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-red">*The price per lesson is for one hour*</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-top-15px m-padding-buttom-15px">\n        <ion-col col-12>\n          <u>\n            <b>Fill teacher form</b>\n          </u>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- First name and Last name -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- First name-->\n            <mat-form-field class="m-full-width">\n              <input type="text" matInput placeholder="First name" [formControl]="firstNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal first name</mat-hint>\n              <mat-error *ngIf="firstNameFormControl.hasError(\'required\')">\n                First name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Last name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" matInput placeholder="Last name" [formControl]="lastNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal last name</mat-hint>\n              <mat-error *ngIf="lastNameFormControl.hasError(\'required\')">\n                Last name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Age and Gender -->\n        <ion-row>\n          <!-- Age -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="3" matInput placeholder="Age" [formControl]="ageFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>What\'s your age?</mat-hint>\n              <mat-error *ngIf="ageFormControl.hasError(\'minlength\') || ageFormControl.hasError(\'maxlength\') && !ageFormControl.hasError(\'required\')">\n                Type proper age.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'min\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be less than 1.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'max\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be greater than 120.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'required\')">\n                Age is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field>\n              <mat-select placeholder="Gender" [formControl]="genderAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What is your gender?</mat-hint>\n              <mat-error *ngIf="genderAtFormControl.hasError(\'required\')">Male or Female?</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email and phone number -->\n        <ion-row>\n          <!-- Email -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput placeholder="Email" [formControl]="emailFormControl"\n                [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Phone -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" maxlength="10" matInput placeholder="Phone" [formControl]="phoneFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal phone number</mat-hint>\n              <mat-error *ngIf="phoneFormControl.hasError(\'minlength\') || phoneFormControl.hasError(\'maxlength\') && !phoneFormControl.hasError(\'required\')">\n                Phone is not valid.\n              </mat-error>\n              <mat-error *ngIf="phoneFormControl.hasError(\'required\')">\n                Phone is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- From price and To price -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- From price -->\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="From price" [formControl]="fromPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>1 is Minimum.</mat-hint>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'minlength\') || fromPriceFormControl.hasError(\'maxlength\') && !fromPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'min\') && !fromPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'max\') && !fromPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'required\')">\n                From price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- To Price -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="To price" [formControl]="toPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>200 is Maximum.</mat-hint>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'minlength\') || toPriceFormControl.hasError(\'maxlength\') && !toPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'min\') && !toPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'max\') && !toPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'required\')">\n                To price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Teaches institutions -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What places do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesAtFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Teaches institutions -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" multiple>\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">{{item.viewValue}}</mat-option>\n              </mat-select>\n              <mat-hint>What institutions do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesInstitutionsFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Personal Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="personalMessageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Say something about your self.</mat-hint>\n              <mat-hint align="end">{{personalMessageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'minlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'maxlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'required\')">\n                You must say few words about yourself.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Get image button and clear button -->\n        <ion-row>\n          <ion-col col-6>\n            <input #inputImage type="file" id="inputImageid" class="m-display-none" (change)="readImageBase64($event)" accept="image/*">\n            <button ion-button outline block icon-start small color="dark" onclick="document.getElementById(\'inputImageid\').click();">\n              <ion-icon name="ios-camera-outline"></ion-icon>\n              Add Image\n            </button>\n          </ion-col>\n          <ion-col col-6 *ngIf="image != null && image.length > 0">\n            <button ion-button outline block icon-start small color="dark" (click)="clearImage()">\n              <ion-icon name="ios-trash-outline"></ion-icon>\n              Clear\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <!-- Image -->\n        <ion-row text-center #viewImage *ngIf="image != null && image.length > 0" class="animated flash">\n          <ion-col col-12>\n            <img height="{{imageHeight}}" width="{{imageWidth}}" src="{{image}}">\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Send form button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block (click)="createTeacher();">Make me a teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\jointeacher\jointeacher.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */]])
], JointeacherPage);

//# sourceMappingURL=jointeacher.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__favorites_favorites__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_common_common__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teacherslist_teacherslist__ = __webpack_require__(176);
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
    function SearchPage(navCtrl, navParams, apiProvider, loadingCtrl, alertCtrl, commonProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiProvider = apiProvider;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.brightness = 20;
        this.saturation = 0;
        this.warmth = 1300;
        this.structure = { lower: 30, upper: 140 };
        this.teachesSubjectsFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null);
        this.teachesAtFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null);
        this.teachesInstitutionsFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null);
        this.genderFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null);
        this.showErrorMessagePrices = false;
        this.showErrorMessage = false;
        this.matcher = new MyErrorStateMatcher();
        this.filteredStates = this.teachesSubjectsFormControl.valueChanges
            .startWith(null)
            .map(function (subject) { return subject ? _this.filterStates(subject) : _this.commonProvider.subjectsArray.slice(); });
    }
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
        var subjectID = this.getSubjectID();
        var searchTeacherModel = {
            fromPrice: this.structure.lower,
            toPrice: this.structure.upper,
            teachesAt: this.teachesAtFormControl.value == null ? this.teachesAtFormControl.value : parseInt(this.teachesAtFormControl.value),
            teachesInstitutions: this.teachesInstitutionsFormControl.value == null ? this.teachesInstitutionsFormControl.value : parseInt(this.teachesInstitutionsFormControl.value),
            gender: this.genderFormControl.value == null ? this.genderFormControl.value : parseInt(this.genderFormControl.value)
        };
        var loading = this.loadingCtrl.create({
            content: 'Getting teachers, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/search', searchTeacherModel)
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
    return SearchPage;
}());
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Search Teacher</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-f5ae08">\n      <div (click)="goPage(\'favorites\');">\n        <ion-icon name="ios-star"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-weight-300 m-font-size-35px">Search for a teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle 1 -->\n      <ion-row>\n        <ion-col col-12>\n          It\'s easy, it\'s fast, just fill the fields you want that your teacher will fit and we will find for you what you\'ve requested.\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle 2 -->\n      <ion-row>\n        <ion-col col-12>\n          We\n          <b>\n            <u>don\'t</u>\n          </b> force you to talk to them in our app, take the conversation to\n          <font class="m-color-1ab81a">WhatsApp</font> or other platform as you want, good luck!\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font> Be specific with your filter details in order to get the best results.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Find your next teacher title -->\n      <ion-row text-center class="m-padding-top-15px m-padding-buttom-15px">\n        <ion-col col-12>\n          Find your next teacher\n        </ion-col>\n      </ion-row>\n\n      <!-- Get all teachers button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button outline icon-start small (click)="getAllTeachers();">\n            <ion-icon name="ios-people"></ion-icon>\n            Get all teachers\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Price range -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-list-header>\n            Price per hour\n            <ion-badge item-end color="dark">From: {{structure.lower}}</ion-badge>\n            <ion-badge item-end color="dark">To: {{structure.upper}}</ion-badge>\n          </ion-list-header>\n          <ion-item>\n            <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark" min="0" max="200">\n              <ion-label range-left>0</ion-label>\n              <ion-label range-right>200</ion-label>\n            </ion-range>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Teaches institutions -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Institidues you\'re looking for?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teaches Subjects -->\n        <ion-row>\n          <ion-col col-12>\n            <font style="color: red;">Subjects not applied yet, beta.</font>\n            <mat-form-field class="m-full-width">\n              <input matInput placeholder="Teaches subjects" aria-label="Teaches subjects" [matAutocomplete]="auto" [formControl]="teachesSubjectsFormControl">\n              <mat-autocomplete #auto="matAutocomplete">\n                <mat-option *ngFor="let state of filteredStates | async" [value]="state.viewValue">\n                  {{ state.viewValue }}\n                </mat-option>\n              </mat-autocomplete>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Gender -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Preferred place to learn?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Gender" [formControl]="genderFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n                <mat-option value="3">Doesn\'t matter</mat-option>\n              </mat-select>\n              <mat-hint>Gender preferred of your teacher?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Search teachers button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button (click)="searchTeachers()" block>Search for teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_7__providers_common_common__["a" /* CommonProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__ = __webpack_require__(63);
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
    TeacherslistPage.prototype.sortByTeacherList = function () {
        if (this.sortByType != null && this.sortByType.length > 1) {
            if (this.sortByType === "Name") {
                this.sortByName();
            }
            else if (this.sortByType === "Rate") {
                this.sortByRate();
            }
            else if (this.sortByType === "Recommendations") {
                this.sortByRecommendations();
            }
            else if (this.sortByType === "RecommendationsRate") {
                this.sortByRecommendationsRate();
            }
        }
    };
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
    return TeacherslistPage;
}());
TeacherslistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-teacherslist',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Teacher List</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div onclick="document.getElementById(\'selectOrderByID\').click();">\n        <ion-icon name="md-reorder"></ion-icon>\n      </div>\n    </ion-buttons>\n\n    <!-- List of orders - Display is none always -->\n    <ion-item class="m-display-none">\n      <ion-label>Sort By</ion-label>\n      <ion-select [(ngModel)]="sortByType" id="selectOrderByID" interface="action-sheet" (ionChange)="sortByTeacherList()">\n        <ion-option value="Name">Name</ion-option>\n        <ion-option value="Rate">Rate</ion-option>\n        <ion-option value="Recommendations">Recommendations</ion-option>\n        <ion-option value="RecommendationsRate">Recommendations + Rate</ion-option>\n      </ion-select>\n    </ion-item>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-25px m-font-weight-300">Teachers that fits to your requirements</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n          We\'ve searched in our databases to give you the best results of the teachers that suggest themselves. Go and look at them\n          and pick one.\n        </ion-col>\n      </ion-row>\n\n      <!-- Rank and comment text -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-orange">The power is in your hands, rank and comment to make the community grow and be better.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Click on the card to expant it text -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-font-size-15px m-color-white m-opacity-6">\n            <font class="m-color-white">*</font> In order to see all the details on the teacher click on the card to expand it\n            <font class="m-color-white">*</font>\n          </font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Search bar -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-toolbar color="m-darker">\n            <ion-searchbar [showCancelButton]="false" (ionInput)="onInput($event)" placeholder="Search for teacher name" type="text"\n              animated="true" debounce="100">\n            </ion-searchbar>\n          </ion-toolbar>\n        </ion-col>\n      </ion-row>\n\n      <!-- Teachers wasn\'t found -->\n      <ion-row text-center *ngIf="teachers.length == 0">\n        <ion-col col-12>\n          <b>Not even single teacher was found, sorry.</b>\n        </ion-col>\n      </ion-row>\n\n      <!-- List of teachers -->\n      <div *ngFor="let teacher of teachers; let i = index;">\n        <ion-card (click)="expandTeacherInformation(i);">\n\n          <!-- Image and Favorite -->\n          <ion-row>\n            <ion-col *ngIf="teacher.image == null" col-10 text-left>\n              <img class="m-default-image-cards-teacherlist" src="assets\\imgs\\imageNotFound.jpg" />\n            </ion-col>\n            <ion-col *ngIf="teacher.image != null" col-10 text-left>\n              <img class="m-default-image-cards-teacherlist" src="{{teacher.image}}" />\n            </ion-col>\n            <ion-col *ngIf="teacher.isTeacherFavorited" col-2 text-right>\n              <ion-icon name="ios-bookmark-outline" class="m-font-size-35px"></ion-icon>\n            </ion-col>\n          </ion-row>\n\n          <!-- Content -->\n          <ion-card-content>\n\n            <!-- Name and Age and Gender and Age -->\n            <ion-row>\n              <ion-col col-12>\n                <ion-card-title>\n                  <font class="m-font-size-25px">{{teacher.firstName}} {{teacher.lastName}}</font>\n                  -\n                  <font class="m-font-size-17px">\n                    <i>{{teacher.gender | gender}} {{teacher.age}}</i>\n                  </font>\n\n                </ion-card-title>\n              </ion-col>\n            </ion-row>\n\n            <!-- Price -->\n            <ion-row>\n              <ion-col col-12>\n                <b>Price:</b>\n                <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                <font class="m-font-size-10px">ILS</font>\n              </ion-col>\n            </ion-row>\n\n            <!-- Rate -->\n            <ion-row>\n              <ion-col col-12>\n                <b>Rating:</b>\n                <font *ngIf="teacher.recommendations.length === 1">\n                  <i>( {{teacher.recommendations.length}} person rated )</i>\n                </font>\n                <font *ngIf="teacher.recommendations.length !== 1">\n                  <i>( {{teacher.recommendations.length}} people rated )</i>\n                </font>\n                <rating [(ngModel)]="teachers[i].rate" readOnly="true" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n                  starIconName="star" nullable="false"></rating>\n              </ion-col>\n            </ion-row>\n\n            <!-- Message -->\n            <ion-row>\n              <ion-col col-12>\n                <b>Message:</b>\n                {{teacher.personalMessage}}\n              </ion-col>\n            </ion-row>\n\n            <!-- Click to see more details -->\n            <ion-row text-center>\n              <ion-col col-12>\n                <font class="m-color-midnightblue m-font-size-13px">\n                  <i>* Click on the card to see more details *</i>\n                </font>\n              </ion-col>\n            </ion-row>\n\n          </ion-card-content>\n\n        </ion-card>\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacherslist\teacherslist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], TeacherslistPage);

//# sourceMappingURL=teacherslist.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__ = __webpack_require__(63);
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
    function SettingsPage(navCtrl, navParams, favoritesManagerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesManagerProvider = favoritesManagerProvider;
    }
    SettingsPage.prototype.goPage = function (page) {
        switch (page) {
            case 'favorites':
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__favorites_favorites__["a" /* FavoritesPage */]);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    SettingsPage.prototype.clearIDLocalStorage = function () {
        this.favoritesManagerProvider.removeAll();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Settings</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-f5ae08">\n      <div (click)="goPage(\'favorites\');">\n        <ion-icon name="ios-star"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        Settings page, go away, it\'s not ready!\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button outline small color="danger" (click)="clearIDLocalStorage()">Clear favorites</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contactus/contactus.module": [
		724,
		6
	],
	"../pages/favorites/favorites.module": [
		723,
		5
	],
	"../pages/jointeacher/jointeacher.module": [
		725,
		4
	],
	"../pages/search/search.module": [
		726,
		3
	],
	"../pages/settings/settings.module": [
		727,
		2
	],
	"../pages/singleteacher/singleteacher.module": [
		728,
		1
	],
	"../pages/teacherslist/teacherslist.module": [
		729,
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
    function ToasterProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
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

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
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

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(177);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
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

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorites_favorites__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contactus_contactus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__jointeacher_jointeacher__ = __webpack_require__(174);
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
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">StudyHub</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-f5ae08">\n      <div (click)="goPage(\'favorites\');" class="animated flip">\n        <ion-icon name="ios-star"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-43px m-font-weight-300">Built for students and teachers</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300 m-opacity-6">\n            StudyHub is a study platform inspired by the way you work. You can find teachers\n            <font class="m-color-white">from your home</font> and talk with them directly, Manage your teachers & Teach other people.\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300">\n            <b>Keep it simple and fun</b>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Start using button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button color="secondary" (click)="goPage(\'search\');">\n            <b>Start using StudyHub</b>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n  </div>\n\n  <!-- White area -->\n  <div>\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for individuals\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for individuals subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">As individual user at StudyHub you can find teachers around Israel, talk with them directly at WhatsApp, rank teachers\n            and tell your opinion about them.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for teachers\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">\n            As a teacher at StudyHub you\'ll be shown at students searches over the app, you will have your own profile and you will be\n            able to manage it as you wish.\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Join as teacher button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button outline color="primary" (click)="goPage(\'joinasteacher\');" icon-start>\n            <ion-icon name="ios-person-add-outline"></ion-icon>\n            Join as teacher\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Slider -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-slides centeredSlides="true" loop="true" pager="true" speed="600">\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider1.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider4.jpg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider3.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider2.jpg" />\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n\n      <hr>\n\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-font-size-25px">\n            <b>StudyHub - Owner</b>\n          </font>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          Moshe Binieli\n        </ion-col>\n        <ion-col col-12>\n          mmoshikoo@gmail.com\n        </ion-col>\n        <ion-col col-12>\n          Computer Science student and Full Stack developer.\n        </ion-col>\n        <ion-col col-12>\n\n          <button ion-button outline color="dark" small icon-start (click)="goPage(\'contactme\');">\n            <ion-icon name="ios-contacts"></ion-icon>Contact us</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(383);
// import { enableProdMode } from '@angular/core';



// enableProdMode();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_common_common__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_teaches_at_teaches_at__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_jointeacher_jointeacher__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_favorites_manager_favorites_manager__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_material_tabs__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material_input__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_select__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_autocomplete__ = __webpack_require__(722);
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
            __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/favorites/favorites.module#FavoritesPageModule', name: 'FavoritesPage', segment: 'favorites', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/contactus/contactus.module#ContactusPageModule', name: 'ContactusPage', segment: 'contactus', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/jointeacher/jointeacher.module#JointeacherPageModule', name: 'JointeacherPage', segment: 'jointeacher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/singleteacher/singleteacher.module#SingleteacherPageModule', name: 'SingleteacherPage', segment: 'singleteacher', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/teacherslist/teacherslist.module#TeacherslistPageModule', name: 'TeacherslistPage', segment: 'teacherslist', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'StudyHub',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_31__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_29__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_30__angular_material_select__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_28__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_32__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
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
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_10__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_16__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__["a" /* ToasterProvider */],
            __WEBPACK_IMPORTED_MODULE_25__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__["a" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"],
            __WEBPACK_IMPORTED_MODULE_27__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */],
            __WEBPACK_IMPORTED_MODULE_26__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(371);
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
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
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

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_local_storage_local_storage__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
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
    FavoritesManagerProvider.prototype.removeAll = function () {
        this.setFavorites([]);
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

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesAtPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesSubjectsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
                teachesSubjectsValue = 'Introduction to Computer Science';
                break;
            case 2:
                teachesSubjectsValue = 'Data Structures';
                break;
            case 3:
                teachesSubjectsValue = 'Mathematical Tools for Computer Science';
                break;
            case 4:
                teachesSubjectsValue = 'Advanced Programming Workshop';
                break;
            case 5:
                teachesSubjectsValue = 'Computer Organization and Assembly';
                break;
            case 6:
                teachesSubjectsValue = 'Computer Structure and Switching Theory';
                break;
            case 7:
                teachesSubjectsValue = 'Operating Systems';
                break;
            case 8:
                teachesSubjectsValue = 'Automata and Formal Languages';
                break;
            case 9:
                teachesSubjectsValue = 'Design and Analysis of Algorithms';
                break;
            case 10:
                teachesSubjectsValue = 'Logic For Computer Science';
                break;
            case 11:
                teachesSubjectsValue = 'Logic Programming';
                break;
            case 12:
                teachesSubjectsValue = 'Data Base Systems';
                break;
            case 13:
                teachesSubjectsValue = 'Compilation Theory';
                break;
            case 14:
                teachesSubjectsValue = 'Computer Communication Networks';
                break;
            case 15:
                teachesSubjectsValue = 'Computability and Complexity of Algorithms';
                break;
            case 16:
                teachesSubjectsValue = 'Object Oriented Programming';
                break;
            case 17:
                teachesSubjectsValue = 'Foundations of Information Systems';
                break;
            case 18:
                teachesSubjectsValue = 'Graph Theory';
                break;
            case 19:
                teachesSubjectsValue = 'Real Time Systems';
                break;
            case 20:
                teachesSubjectsValue = 'System Programming';
                break;
            case 21:
                teachesSubjectsValue = 'Design Patterns';
                break;
            case 22:
                teachesSubjectsValue = 'Data Mining';
                break;
            case 23:
                teachesSubjectsValue = 'Computer Vision';
                break;
            case 24:
                teachesSubjectsValue = 'Geometry View Multiple';
                break;
            case 25:
                teachesSubjectsValue = 'Computer Graphics';
                break;
            case 26:
                teachesSubjectsValue = 'Introduction to Fuzzy Logic';
                break;
            case 27:
                teachesSubjectsValue = 'Introduction to Cryptography';
                break;
            case 28:
                teachesSubjectsValue = 'Data Compression';
                break;
            case 29:
                teachesSubjectsValue = 'Signal and Image Processing ';
                break;
            case 30:
                teachesSubjectsValue = 'Computer Architecture';
                break;
            case 31:
                teachesSubjectsValue = 'Hardware Description Languages';
                break;
            case 32:
                teachesSubjectsValue = 'Digital Systems';
                break;
            case 33:
                teachesSubjectsValue = 'Expert Systems';
                break;
            case 34:
                teachesSubjectsValue = 'Artificial Intelligence';
                break;
            case 35:
                teachesSubjectsValue = 'Programming in C#';
                break;
            case 36:
                teachesSubjectsValue = 'Programming in Java';
                break;
            case 37:
                teachesSubjectsValue = 'Programming in Python';
                break;
            case 38:
                teachesSubjectsValue = 'Programming in JavaScript';
                break;
            case 39:
                teachesSubjectsValue = 'Numerical Analysis';
                break;
            case 40:
                teachesSubjectsValue = 'Numerical algorithms';
                break;
            case 41:
                teachesSubjectsValue = 'Logic Design';
                break;
            case 42:
                teachesSubjectsValue = 'Approximation algorithms';
                break;
            case 43:
                teachesSubjectsValue = 'Secure Quality Programs';
                break;
            case 44:
                teachesSubjectsValue = 'Introduction to Robotics';
                break;
            case 45:
                teachesSubjectsValue = 'Semiconductors';
                break;
            case 46:
                teachesSubjectsValue = 'Electrical Engineering Laboratory';
                break;
            case 47:
                teachesSubjectsValue = 'Semiconductor Devices';
                break;
            case 48:
                teachesSubjectsValue = 'Switching and Logic Design';
                break;
            case 49:
                teachesSubjectsValue = 'Introduction to Linear Systems';
                break;
            case 50:
                teachesSubjectsValue = 'Analog Linear Electronic Circuits';
                break;
            case 51:
                teachesSubjectsValue = 'Energy Conversion';
                break;
            case 52:
                teachesSubjectsValue = 'Signals and Systems';
                break;
            case 53:
                teachesSubjectsValue = 'Electromagnetic Fields';
                break;
            case 54:
                teachesSubjectsValue = 'Digital Circuits';
                break;
            case 55:
                teachesSubjectsValue = 'Introduction to Control Theory';
                break;
            case 56:
                teachesSubjectsValue = 'Laboratory of Logic Digital Circuits';
                break;
            case 57:
                teachesSubjectsValue = 'Communication Engineering';
                break;
            case 58:
                teachesSubjectsValue = 'Electric Drives';
                break;
            case 59:
                teachesSubjectsValue = 'Microprocessors';
                break;
            case 60:
                teachesSubjectsValue = 'Introduction to Microwaves';
                break;
            case 61:
                teachesSubjectsValue = 'Microprocessors Laboratory';
                break;
            case 62:
                teachesSubjectsValue = 'Waves Propagation';
                break;
            case 63:
                teachesSubjectsValue = 'Photonics and Electro-optics systems';
                break;
            case 64:
                teachesSubjectsValue = 'Antennas and Radiation';
                break;
            case 65:
                teachesSubjectsValue = 'Power Systems';
                break;
            case 66:
                teachesSubjectsValue = 'Waves and Distributed Systems';
                break;
            case 67:
                teachesSubjectsValue = 'Conversion Laboratory Energy';
                break;
            case 68:
                teachesSubjectsValue = 'Filter Design';
                break;
            case 69:
                teachesSubjectsValue = 'Power Electronics Systems';
                break;
            case 70:
                teachesSubjectsValue = 'Advanced Control Theory';
                break;
            case 71:
                teachesSubjectsValue = 'High Voltage Engineering';
                break;
            case 72:
                teachesSubjectsValue = 'Digital Signal Processing';
                break;
            case 73:
                teachesSubjectsValue = 'Electronics Computer Aided Design';
                break;
            case 74:
                teachesSubjectsValue = 'Random Signals';
                break;
            case 75:
                teachesSubjectsValue = 'Network Theory';
                break;
            case 76:
                teachesSubjectsValue = 'Neural Networks';
                break;
            case 77:
                teachesSubjectsValue = 'Dynamics and Control Spacecraft';
                break;
            case 78:
                teachesSubjectsValue = 'Modern Optics and Electro optics';
                break;
            case 79:
                teachesSubjectsValue = 'Engineering Economics';
                break;
            case 80:
                teachesSubjectsValue = 'Introduction to Lasers';
                break;
            case 81:
                teachesSubjectsValue = 'Electronic Materials';
                break;
            case 82:
                teachesSubjectsValue = 'Robots Dynamics and Control';
                break;
            case 83:
                teachesSubjectsValue = 'High and Low Voltages Devices';
                break;
            case 84:
                teachesSubjectsValue = 'Receiving and Transmitting Techniques';
                break;
            case 85:
                teachesSubjectsValue = 'Statistics and Probability';
                break;
            case 86:
                teachesSubjectsValue = 'Linear Algebra';
                break;
            case 87:
                teachesSubjectsValue = 'Calculus';
                break;
            case 88:
                teachesSubjectsValue = 'Discrete Mathematics';
                break;
            case 89:
                teachesSubjectsValue = 'Ordinary Differential Equations';
                break;
            case 90:
                teachesSubjectsValue = 'Mathematical Modeling';
                break;
            case 91:
                teachesSubjectsValue = 'Partial Differential Equations';
                break;
            case 92:
                teachesSubjectsValue = 'Complex Valued Functions';
                break;
            case 93:
                teachesSubjectsValue = 'Fourier Series and Integral Transforms';
                break;
            case 94:
                teachesSubjectsValue = 'Introduction to Modern Analysis';
                break;
            case 95:
                teachesSubjectsValue = 'Numerical Analysis';
                break;
            case 96:
                teachesSubjectsValue = 'Algorithm in Optimization';
                break;
            case 97:
                teachesSubjectsValue = 'Machine Learning';
                break;
            case 98:
                teachesSubjectsValue = 'Complex Functions';
                break;
            case 99:
                teachesSubjectsValue = 'Statistical Inference';
                break;
            case 100:
                teachesSubjectsValue = 'Machine Vision';
                break;
            case 101:
                teachesSubjectsValue = 'Forecasting Methods';
                break;
            case 102:
                teachesSubjectsValue = 'Fluid Mechanics';
                break;
            case 103:
                teachesSubjectsValue = 'Mechanics of Solids';
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

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachesInstitutionsPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
                teachesInstitutionsValue = 'Tel-Aviv University';
                break;
            case 4:
                teachesInstitutionsValue = 'Ben-Gurion Universit';
                break;
            case 5:
                teachesInstitutionsValue = 'Hebrew University';
                break;
            case 6:
                teachesInstitutionsValue = 'Bar-Ilan University';
                break;
            case 7:
                teachesInstitutionsValue = 'Weizmann Institute of Science';
                break;
            case 8:
                teachesInstitutionsValue = 'Ben-Gurion University of the Negev';
                break;
            case 9:
                teachesInstitutionsValue = 'Open University of Israel';
                break;
            case 10:
                teachesInstitutionsValue = 'Ariel University';
                break;
            case 11:
                teachesInstitutionsValue = 'Haredi College of Jerusalem';
                break;
            case 12:
                teachesInstitutionsValue = 'College of Law and Business';
                break;
            case 13:
                teachesInstitutionsValue = 'Academic College of Tel Aviv-Yafo';
                break;
            case 14:
                teachesInstitutionsValue = 'Afeka College of Engineering';
                break;
            case 15:
                teachesInstitutionsValue = 'Ashkelon Academic College';
                break;
            case 16:
                teachesInstitutionsValue = 'Beersheba Tehni School';
                break;
            case 17:
                teachesInstitutionsValue = 'Beit Zvi School of the Performing Arts';
                break;
            case 18:
                teachesInstitutionsValue = 'Bezalel Academy of Art and Design';
                break;
            case 19:
                teachesInstitutionsValue = 'Carmel Academic Center';
                break;
            case 20:
                teachesInstitutionsValue = 'Center for Academic Studies';
                break;
            case 21:
                teachesInstitutionsValue = 'COMAS';
                break;
            case 22:
                teachesInstitutionsValue = 'Dan Academic Center';
                break;
            case 23:
                teachesInstitutionsValue = 'Kfar-Avraham Technology College';
                break;
            case 24:
                teachesInstitutionsValue = 'Hadassah Academic College';
                break;
            case 25:
                teachesInstitutionsValue = 'Interdisciplinary Center Herzliya';
                break;
            case 26:
                teachesInstitutionsValue = 'Israel College of the Bible';
                break;
            case 27:
                teachesInstitutionsValue = 'Jerusalem Academy of Music and Dance';
                break;
            case 28:
                teachesInstitutionsValue = 'Jerusalem College of Engineering';
                break;
            case 29:
                teachesInstitutionsValue = 'Jerusalem College of Technology';
                break;
            case 30:
                teachesInstitutionsValue = 'Jerusalem University College';
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
                teachesInstitutionsValue = 'Ono Academi cCollege';
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
                teachesInstitutionsValue = 'Sapir Academic College';
                break;
            case 40:
                teachesInstitutionsValue = 'Sami Shamoon College of Engineering';
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__singleteacher_singleteacher__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__ = __webpack_require__(63);
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
    function FavoritesPage(navCtrl, navParams, favoritesManagerProvider, apiProvider, modalCtrl, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.favoritesManagerProvider = favoritesManagerProvider;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.tabRef = this.navCtrl.parent;
        this.userHaveFavorites = false;
        this.teachers = [];
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
            _this.teachers = teachersList;
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
    return FavoritesPage;
}());
FavoritesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/'<ion-header>\n  <ion-navbar text-center>\n    <ion-title>\n      <font class="m-color-white">Favorites</font>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Favorites</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          This is all the favorites teachers you\'ve saved, you can manage all your teachers here and save them for the future.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font>\n          In order to keep your teachers quickly accessed, do not remove StudyHub cache from your app.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- No favorites case -->\n      <div *ngIf="!userHaveFavorites">\n        <!-- No teachers as favorites text -->\n        <ion-row text-center>\n          <ion-col col-12>\n            You have none in your favorite list.\n          </ion-col>\n        </ion-row>\n\n        <!-- Search for teachers button -->\n        <ion-row text-center>\n          <ion-col col-12>\n            <button ion-button icon-start outline (click)="goPage(\'search\');">\n              <ion-icon name="ios-search"></ion-icon>\n              Search for teacher\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- There are teachers in favorites list -->\n      <div *ngIf="userHaveFavorites">\n        <ion-row>\n          <ion-col col-6 class="animated zoomIn" *ngFor="let teacher of teachers;let i = index;">\n            <ion-card (click)="expandTeacherInformation(i);" text-center>\n              <!-- Name -->\n              <ion-card-header >\n                {{teacher.firstName}} {{teacher.lastName}}\n              </ion-card-header>\n              <ion-card-content>\n                <!-- Image -->\n                <ion-col col-12 *ngIf="teacher.image == null">\n                  <img class="m-default-image-cards" src="assets\\imgs\\imageNotFound.jpg" />\n                </ion-col>\n                <ion-col col-12 *ngIf="teacher.image != null">\n                    <img class="m-default-image-cards-favorite" src="{{teacher.image}}" />\n                  </ion-col>\n                <!-- Price -->\n                <ion-col col-12>\n                  <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                  <font class="m-font-size-10px">ILS</font>\n                </ion-col>\n                <!-- Rate -->\n                <ion-col col-12>\n                  <rating [(ngModel)]="teachers[i].rate" readOnly="false" max="5" emptyStarIconName="star-outline" halfStarIconName="star-half"\n                    starIconName="star" nullable="false"></rating>\n                </ion-col>\n              </ion-card-content>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
            { value: '3', viewValue: 'Tel-Aviv University' },
            { value: '4', viewValue: 'Ben Gurion University' },
            { value: '5', viewValue: 'Hebrew University' },
            { value: '6', viewValue: 'Bar-Ilan University' },
            { value: '7', viewValue: 'Weizmann Institute of Science' },
            { value: '8', viewValue: 'Ben-Gurion University of the Negev' },
            { value: '9', viewValue: 'Open University of Israel' },
            { value: '10', viewValue: 'Ariel University' },
            { value: '11', viewValue: 'Haredi College of Jerusalem' },
            { value: '12', viewValue: 'College of Law and Business' },
            { value: '13', viewValue: 'Academic College of Tel Aviv-Yafo' },
            { value: '14', viewValue: 'Afeka College of Engineering' },
            { value: '15', viewValue: 'Ashkelon Academic College' },
            { value: '16', viewValue: 'Beersheba Tehni School' },
            { value: '17', viewValue: 'Beit Zvi School of the Performing Arts' },
            { value: '18', viewValue: 'Bezalel Academy of Art and Design' },
            { value: '19', viewValue: 'Carmel Academic Center' },
            { value: '20', viewValue: 'Center for Academic Studies' },
            { value: '21', viewValue: 'COMAS' },
            { value: '22', viewValue: 'Dan Academic Center' },
            { value: '23', viewValue: 'Kfar-Avraham Technology College' },
            { value: '24', viewValue: 'Hadassah Academic College' },
            { value: '25', viewValue: 'Interdisciplinary Center Herzliya' },
            { value: '26', viewValue: 'Israel College of the Bible' },
            { value: '27', viewValue: 'Jerusalem Academy of Music and Dance' },
            { value: '28', viewValue: 'Jerusalem College of Engineering' },
            { value: '29', viewValue: 'Jerusalem College of Technology' },
            { value: '30', viewValue: 'Jerusalem University College' },
            { value: '31', viewValue: 'Kinneret Academic College' },
            { value: '32', viewValue: 'Lander Institute' },
            { value: '33', viewValue: 'Netanya Academic College' },
            { value: '34', viewValue: 'Ono Academi College' },
            { value: '35', viewValue: 'ORT Braude College of Engineering' },
            { value: '36', viewValue: 'Peres Academic Center' },
            { value: '37', viewValue: 'Reidman College' },
            { value: '38', viewValue: 'Ruppin Academic Center' },
            { value: '39', viewValue: 'Sapir Academic College' },
            { value: '40', viewValue: 'Sami Shamoon College of Engineering' },
            { value: '41', viewValue: 'Shenkar College of Engineering and Design' },
            { value: '42', viewValue: 'Tel-Hai Academic College' },
        ];
        this.subjectsArray = [
            { value: '1', viewValue: 'Programming in C' },
            { value: '2', viewValue: 'Introduction to Computer Science' },
            { value: '3', viewValue: 'Data Structures' },
            { value: '4', viewValue: 'Mathematical Tools for Computer Science' },
            { value: '5', viewValue: 'Advanced Programming Workshop' },
            { value: '6', viewValue: 'Computer Organization and Assembly' },
            { value: '7', viewValue: 'Computer Structure and Switching Theory' },
            { value: '8', viewValue: 'Operating Systems' },
            { value: '9', viewValue: 'Automata and Formal Languages' },
            { value: '10', viewValue: 'Design and Analysis of Algorithms' },
            { value: '11', viewValue: 'Logic For Computer Science' },
            { value: '12', viewValue: 'Logic Programming' },
            { value: '13', viewValue: 'Data Base Systems' },
            { value: '14', viewValue: 'Compilation Theory' },
            { value: '15', viewValue: 'Computer Communication Networks' },
            { value: '16', viewValue: 'Computability and Complexity of Algorithms' },
            { value: '17', viewValue: 'Object Oriented Programming' },
            { value: '18', viewValue: 'Foundations of Information Systems' },
            { value: '19', viewValue: 'Graph Theory' },
            { value: '20', viewValue: 'Real Time Systems' },
            { value: '21', viewValue: 'System Programming' },
            { value: '22', viewValue: 'Design Patterns' },
            { value: '23', viewValue: 'Data Mining' },
            { value: '24', viewValue: 'Computer Vision' },
            { value: '25', viewValue: 'Geometry View Multiple' },
            { value: '26', viewValue: 'Computer Graphics' },
            { value: '27', viewValue: 'Introduction to Fuzzy Logic' },
            { value: '28', viewValue: 'Introduction to Cryptography' },
            { value: '29', viewValue: 'Data Compression' },
            { value: '30', viewValue: 'Signal and Image Processing ' },
            { value: '31', viewValue: 'Computer Architecture' },
            { value: '32', viewValue: 'Hardware Description Languages' },
            { value: '33', viewValue: 'Digital Systems' },
            { value: '34', viewValue: 'Expert Systems' },
            { value: '35', viewValue: 'Artificial Intelligence' },
            { value: '36', viewValue: 'Programming in C#' },
            { value: '37', viewValue: 'Programming in Java' },
            { value: '38', viewValue: 'Programming in Python' },
            { value: '39', viewValue: 'Programming in JavaScript' },
            { value: '40', viewValue: 'Numerical Analysis' },
            { value: '41', viewValue: 'Numerical algorithms' },
            { value: '42', viewValue: 'Logic Design' },
            { value: '43', viewValue: 'Approximation algorithms' },
            { value: '44', viewValue: 'Secure Quality Programs' },
            { value: '45', viewValue: 'Introduction to Robotics' },
            { value: '46', viewValue: 'Semiconductors' },
            { value: '47', viewValue: 'Electrical Engineering Laboratory' },
            { value: '48', viewValue: 'Semiconductor Devices' },
            { value: '49', viewValue: 'Switching and Logic Design' },
            { value: '50', viewValue: 'Introduction to Linear Systems' },
            { value: '51', viewValue: 'Analog Linear Electronic Circuits' },
            { value: '52', viewValue: 'Energy Conversion' },
            { value: '53', viewValue: 'Signals and Systems' },
            { value: '54', viewValue: 'Electromagnetic Fields' },
            { value: '55', viewValue: 'Digital Circuits' },
            { value: '56', viewValue: 'Introduction to Control Theory' },
            { value: '57', viewValue: 'Laboratory of Logic Digital Circuits' },
            { value: '58', viewValue: 'Communication Engineering' },
            { value: '59', viewValue: 'Electric Drives' },
            { value: '60', viewValue: 'Microprocessors' },
            { value: '61', viewValue: 'Introduction to Microwaves' },
            { value: '62', viewValue: 'Microprocessors Laboratory' },
            { value: '63', viewValue: 'Waves Propagation' },
            { value: '64', viewValue: 'Photonics and Electro-optics systems' },
            { value: '65', viewValue: 'Antennas and Radiation' },
            { value: '66', viewValue: 'Power Systems' },
            { value: '67', viewValue: 'Waves and Distributed Systems' },
            { value: '68', viewValue: 'Conversion Laboratory Energy' },
            { value: '69', viewValue: 'Filter Design' },
            { value: '70', viewValue: 'Power Electronics Systems' },
            { value: '71', viewValue: 'Advanced Control Theory' },
            { value: '72', viewValue: 'High Voltage Engineering' },
            { value: '73', viewValue: 'Digital Signal Processing' },
            { value: '74', viewValue: 'Electronics Computer Aided Design' },
            { value: '75', viewValue: 'Random Signals' },
            { value: '76', viewValue: 'Network Theory' },
            { value: '77', viewValue: 'Neural Networks' },
            { value: '78', viewValue: 'Dynamics and Control Spacecraft' },
            { value: '79', viewValue: 'Modern Optics and Electro optics' },
            { value: '80', viewValue: 'Engineering Economics' },
            { value: '81', viewValue: 'Introduction to Lasers' },
            { value: '82', viewValue: 'Electronic Materials' },
            { value: '83', viewValue: 'Robots Dynamics and Control' },
            { value: '84', viewValue: 'High and Low Voltages Devices' },
            { value: '85', viewValue: 'Receiving and Transmitting Techniques' },
            { value: '86', viewValue: 'Statistics and Probability' },
            { value: '87', viewValue: 'Linear Algebra' },
            { value: '88', viewValue: 'Calculus' },
            { value: '89', viewValue: 'Discrete Mathematics' },
            { value: '90', viewValue: 'Ordinary Differential Equations' },
            { value: '91', viewValue: 'Mathematical Modeling' },
            { value: '92', viewValue: 'Partial Differential Equations' },
            { value: '93', viewValue: 'Complex Valued Functions' },
            { value: '94', viewValue: 'Fourier Series and Integral Transforms' },
            { value: '95', viewValue: 'Introduction to Modern Analysis' },
            { value: '96', viewValue: 'Numerical Analysis' },
            { value: '97', viewValue: 'Algorithm in Optimization' },
            { value: '98', viewValue: 'Machine Learning' },
            { value: '99', viewValue: 'Complex Functions' },
            { value: '100', viewValue: 'Statistical Inference' },
            { value: '101', viewValue: 'Machine Vision' },
            { value: '102', viewValue: 'Forecasting Methods' },
            { value: '103', viewValue: 'Fluid Mechanics' },
            { value: '104', viewValue: 'Mechanics of Solids' },
            { value: '105', viewValue: 'Web Programming' },
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

},[377]);
//# sourceMappingURL=main.js.map