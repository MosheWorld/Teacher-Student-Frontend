webpackJsonp([0],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(30);
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
    function HomePage(rd, navCtrl, profileProvider) {
        this.rd = rd;
        this.navCtrl = navCtrl;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__["a" /* PageType */];
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_3__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
    }
    /**
     * Activated animations to make the UI awesome.
     */
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
    /**
     * Removes animated classes from the inputs.
     */
    HomePage.prototype.ionViewDidLeave = function () {
        this.rd.removeClass(this.subtitleAnimation.nativeElement, "animated");
        this.rd.removeClass(this.buttonuAnimation.nativeElement, "animated");
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('subtitleAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], HomePage.prototype, "subtitleAnimation", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('buttonuAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], HomePage.prototype, "buttonuAnimation", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">StudyHub</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="navigationer.navigateToPage(pageEnum.Favorites)" class="animated flip">\n        <ion-icon name="ios-bookmark-outline"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div text-center class="m-background-2b3137 m-margin-top0">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-43px m-font-weight-300">\n            For students and private teachers\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row #subtitleAnimation class="animated m-opacity-0">\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300 m-opacity-6">\n            StudyHub is a study platform where you can find teachers\n            <font class="m-color-white">from your home</font>. Manage your teachers & Teach other people.\n          </div>\n        </ion-col>\n        <ion-col col-12>\n          <div class="m-font-size-20px m-color-white m-font-weight-300">\n            <b>Keep it simple and fun</b>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- Start using button -->\n      <ion-row #buttonuAnimation class="animated m-opacity-0">\n        <ion-col col-12>\n          <button ion-button color="secondary" (click)="navigationer.navigateToPage(pageEnum.Search)">\n            <b>Start using StudyHub</b>\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for individuals\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for individuals subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">As individual user at StudyHub you can find teachers around Israel, talk with them directly at WhatsApp, rank teachers\n            and tell your opinion about them.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers title -->\n      <ion-row text-center class="m-padding-buttom-15px m-padding-top-15px">\n        <ion-col col-12>\n          StudyHub for teachers\n        </ion-col>\n      </ion-row>\n\n      <!-- StudyHub for teachers subtitle -->\n      <ion-row text-center>\n        <ion-col col-12>\n\n          <font class="m-font-size-17px m-font-weight-300 m-color-586069">\n            As a teacher at StudyHub you\'ll be shown at students searches over the app, you will have your own profile and you will be\n            able to manage it as you wish.\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Join as teacher button -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <button ion-button outline color="primary" (click)="navigationer.navigateToPage(pageEnum.JoinAsTeacher)" icon-start>\n            <ion-icon name="ios-person-add-outline"></ion-icon>\n            Join as teacher\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Slider -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-slides autoplay="3000" effect="slider" centeredSlides="true" loop="true" pager="true" speed="800">\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider1.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider4.jpg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider3.jpeg" />\n            </ion-slide>\n            <ion-slide>\n              <img src="assets\\imgs\\StudySlider2.jpg" />\n            </ion-slide>\n          </ion-slides>\n        </ion-col>\n      </ion-row>\n\n      <hr>\n\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-font-size-25px">\n            <b>StudyHub - Owner</b>\n          </font>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          Moshe Binieli\n        </ion-col>\n        <ion-col col-12>\n          mmoshikoo@gmail.com\n        </ion-col>\n        <ion-col col-12>\n          Computer Science Student and Full Stack Developer.\n        </ion-col>\n        <ion-col col-12>\n\n          <button ion-button outline color="dark" small icon-start (click)="navigationer.navigateToPage(pageEnum.ContactUs)">\n            <ion-icon name="ios-contacts"></ion-icon>Contact us</button>\n\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_common_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__ = __webpack_require__(30);
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
    function SearchPage(rd, navParams, navCtrl, apiProvider, alertCtrl, loadingCtrl, commonProvider, profileProvider) {
        var _this = this;
        this.rd = rd;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonProvider = commonProvider;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_6__common_PageType_Enum__["a" /* PageType */];
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
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_7__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
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
    /**
     * Checks whether one of the teacher names includes the input string.
     * Filters on all the teacher list and returns teachers that includes the input string.
     * @param input The string we will check on.
     * @returns {any[]} Filtered teachers.
     */
    SearchPage.prototype.filterStates = function (input) {
        return this.commonProvider.subjectsArray.filter(function (subject) {
            return subject.viewValue.toLowerCase().includes(input.toLowerCase());
        });
    };
    /**
     * Searches for teacher on specific details that are passed by client side.
     */
    SearchPage.prototype.searchTeachers = function () {
        var _this = this;
        this.showErrorMessage = false;
        this.showErrorMessagePrices = false;
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
            return;
        }
        var searchTeacherModel = this.buildSearchInterface();
        var loading = this.buildLoadingDialog();
        loading.present();
        var searchedSubject = this.getsearchedSubject();
        var searchedInstitute = this.getsearchedInstitute();
        this.apiProvider.httpPost('teacher/search', searchTeacherModel)
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navigationer.navigateToPage(_this.pageEnum.TeacherList, {
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
    /**
     * Receives all teachers from the database.
     */
    SearchPage.prototype.getAllTeachers = function () {
        var _this = this;
        var loading = this.buildLoadingDialog();
        loading.present();
        this.apiProvider.httpGet('teacher/getall')
            .subscribe(function (success) {
            loading.dismiss();
            if (success && success.length > 0) {
                _this.navigationer.navigateToPage(_this.pageEnum.TeacherList, { teacherSearchList: success });
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
    //#endregion
    //#region Private Methods
    /**
     * Validates whether the model is valid.
     * @returns {boolean}
     */
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
    /**
     * Creates ionic alert.
     * @param titleInput Title of the alert.
     * @param subTitleInput Sub-Title of the alert.
     */
    SearchPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    /**
     * Receives subject ID as parsed int.
     * @returns Subject ID as integer.
     */
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
    /**
     * Receives search subject from input.
     * @returns teachesSubjectsFormControl.value
     */
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
    /**
     * Receives search institute from input.
     * @returns teachesInstitutionsFormControl.value
     */
    SearchPage.prototype.getsearchedInstitute = function () {
        var result = null;
        if (this.teachesInstitutionsFormControl.value && this.teachesInstitutionsFormControl.value != null && this.teachesInstitutionsFormControl.value !== "") {
            result = this.teachesInstitutionsFormControl.value;
        }
        return result;
    };
    /**
     * Create dialog with the values dots icon and waiting text.
     * @returns {Loading} The model.
     */
    SearchPage.prototype.buildLoadingDialog = function () {
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Getting teachers, please wait...'
        });
        return loading;
    };
    /**
     * Builds teacher search model from dedicated parameters
     * @return {SearchInterface} The model.
     */
    SearchPage.prototype.buildSearchInterface = function () {
        var searchTeacherModel = {
            toPrice: this.structure.upper,
            fromPrice: this.structure.lower,
            teachesSubjects: this.getSubjectID(),
            gender: this.genderFormControl.value == null ? this.genderFormControl.value : parseInt(this.genderFormControl.value),
            teachesAt: this.teachesAtFormControl.value == null ? this.teachesAtFormControl.value : parseInt(this.teachesAtFormControl.value),
            teachesInstitutions: this.teachesInstitutionsFormControl.value == null ? this.teachesInstitutionsFormControl.value : parseInt(this.teachesInstitutionsFormControl.value)
        };
        return searchTeacherModel;
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('getTeachersAnimation'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
], SearchPage.prototype, "getTeachersAnimation", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">Search Teacher</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="navigationer.navigateToPage(pageEnum.Favorites)">\n        <ion-icon name="ios-bookmark-outline"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-weight-300 m-font-size-30px">Search for a teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font> Be specific with your filter details in order to get the best results.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Get all teachers button -->\n      <ion-row #getTeachersAnimation text-center class="animated m-opacity-0">\n        <ion-col col-12>\n          <button ion-button outline icon-start small (click)="getAllTeachers();">\n            <ion-icon name="ios-people"></ion-icon>\n            See all teachers at StudyHub\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <!-- Price range -->\n      <ion-row>\n        <ion-col col-12>\n          <ion-list-header>\n            Price per hour\n            <ion-badge item-end color="dark">From: {{structure.lower}}</ion-badge>\n            <ion-badge item-end color="dark">To: {{structure.upper}}</ion-badge>\n          </ion-list-header>\n          <ion-item>\n            <ion-range class="m-padding-top-0-impo" dualKnobs="true" pin="true" [(ngModel)]="structure" color="dark" min="0" max="200">\n              <ion-label range-left>0</ion-label>\n              <ion-label range-right>200</ion-label>\n            </ion-range>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Teaches institutions -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Institidues you\'re looking for?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teaches Subjects -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <input matInput type="text" maxlength="55" placeholder="Teaches subjects" aria-label="Teaches subjects" [matAutocomplete]="auto"\n                [formControl]="teachesSubjectsFormControl">\n              <mat-autocomplete #auto="matAutocomplete">\n                <mat-option *ngFor="let state of filteredStates | async" [value]="state.viewValue">\n                  {{ state.viewValue }}\n                </mat-option>\n              </mat-autocomplete>\n              <mat-hint>What courses are you looking for?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Gender -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Preferred place to learn?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Gender" [formControl]="genderFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n                <mat-option value="3">Doesn\'t matter</mat-option>\n              </mat-select>\n              <mat-hint>Gender preferred of your teacher?</mat-hint>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Search teachers button -->\n      <ion-row text-center class="m-padding-top-10px">\n        <ion-col col-12>\n          <button ion-button (click)="searchTeachers()" block>Search for teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\search\search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_9__providers_profile_profile__["a" /* ProfileProvider */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleteacherPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__ = __webpack_require__(73);
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
    function SingleteacherPage(rd, navParams, navCtrl, apiProvider, viewCtrl, alertCtrl, loadingCtrl, toasterProvider, favoritesManagerProvider) {
        this.rd = rd;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toasterProvider = toasterProvider;
        this.favoritesManagerProvider = favoritesManagerProvider;
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
        this.getRecommendationsForTeacher();
    }
    //#endregion
    //#region Public Methods
    /**
     * Close the modal with teacher info if he is favorited or not, to remove from favorite list or not.
     */
    SingleteacherPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.isTeacherFavorited);
    };
    /**
     * Opens recommendation section.
     */
    SingleteacherPage.prototype.openRecommendations = function () {
        this.showRecommendationsBoolean = true;
    };
    /**
     * Close recommendation section.
     */
    SingleteacherPage.prototype.closeRecommendations = function () {
        var _this = this;
        this.rd.removeClass(this.elAddRecommend.nativeElement, "bounceInDown");
        this.rd.addClass(this.elAddRecommend.nativeElement, "bounceOutUp");
        setTimeout(function () {
            _this.showRecommendationsBoolean = false;
        }, 1000);
    };
    /**
     * Creates new recommendation and send it to back-end.
     */
    SingleteacherPage.prototype.addNewRecommend = function () {
        var _this = this;
        this.showErrorMessage = false;
        if (!this.isModelValid()) {
            this.showErrorMessage = true;
            return;
        }
        var newRecommendation = this.buildNewRecommendation();
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Adding your recommendation, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('recommendation/create', newRecommendation)
            .subscribe(function (success) {
            loading.dismiss();
            var alert = _this.createAlert('Your recommendation has been added', 'Thank you for posting recommendation for this teacher, thanks for making our community better.');
            alert.present();
            _this.alreadyAddedRecommend = true;
            _this.showRecommendationsBoolean = false;
            _this.teacher.recommendations.push(newRecommendation);
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Failed to add recommendation', 'The request has been failed for some reason, please try again later.');
            alert.present();
        });
    };
    /**
     * Adds new favorite teacher to list and shows toast.
     */
    SingleteacherPage.prototype.addFavorite = function () {
        this.favoritesManagerProvider.addID(this.teacher._id);
        this.isTeacherFavorited = true;
        this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been added to favorites.");
    };
    /**
     * Remove teacher from favorites list and shows toast.
     */
    SingleteacherPage.prototype.removeFavorite = function () {
        this.favoritesManagerProvider.removeID(this.teacher._id);
        this.isTeacherFavorited = false;
        this.toasterProvider.presentToast(this.teacher.firstName + " " + this.teacher.lastName + " " + " has been removed from favorites.");
    };
    /**
     * Open whatsapp application with teacher number.
     */
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
    /**
     * Validates whether the model is valid.
     * @returns True or false if the model is valid.
     */
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
    /**
     * Convert string rate to integer rate.
     */
    SingleteacherPage.prototype.convertRateToInteger = function () {
        if (this.rate != null) {
            this.rate = parseInt(this.rate.toString());
        }
    };
    /**
     * Creates ionic alert dialog.
     * @param titleInput Title of the dialog.
     * @param subTitleInput Sub-Title of the dialog.
     */
    SingleteacherPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    /**
     * Creates new object of recommendation.
     * @returns {RecommendInterface} Recommendation model.
     */
    SingleteacherPage.prototype.buildNewRecommendation = function () {
        var newRecommendation = {
            teacherID: this.teacher._id,
            rate: this.rate,
            email: this.emailFormControl.value,
            message: this.messageFormControl.value,
            fullName: this.fullNameFormControl.value
        };
        return newRecommendation;
    };
    /**
     * Gets recommendations from backend by list of ID's of recommendations.
    */
    SingleteacherPage.prototype.getRecommendationsForTeacher = function () {
        var _this = this;
        this.apiProvider.httpGet('recommendation/getrecommendationbyid/' + this.teacher._id)
            .subscribe(function (recommendationsList) {
            _this.teacher.recommendations = recommendationsList;
        }, function (failure) {
            _this.teacher.recommendations = null;
        });
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_toaster_toaster__["a" /* ToasterProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], SingleteacherPage);

//# sourceMappingURL=singleteacher.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherPersonalDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TeacherPersonalDetailsPage = (function () {
    //#endregion
    //#region Constructor
    function TeacherPersonalDetailsPage(navCtrl, authService, apiProvider, alertCtrl, commonProvider, loadingCtrl, profileProvider) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.commonProvider = commonProvider;
        this.loadingCtrl = loadingCtrl;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_4__common_PageType_Enum__["a" /* PageType */];
        this.currentChosenTab = "1";
        this.authDisabledBoolean = true;
        this.teacherDisabledBoolean = true;
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_5__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
        this.getTeacherInformationOfUser();
    }
    //#endregion
    //#region Public Methods
    /**
     * Receives teacher model according to given user token.
    */
    TeacherPersonalDetailsPage.prototype.getTeacherInformationOfUser = function () {
        var _this = this;
        this.apiProvider.httpGet('teacher/getteacherbytoken')
            .subscribe(function (success) { _this.teacher = success; }, function (failure) { _this.failureGetDataExecution(); });
    };
    /**
     * Toggles the boolean field, and in case it switches from false to true we will execute changes saving to server.
    */
    TeacherPersonalDetailsPage.prototype.toggleDisabledAuth = function () {
        if (this.authDisabledBoolean === false) {
            this.saveAuthModelChanges();
        }
        this.authDisabledBoolean = !this.authDisabledBoolean;
    };
    /**
     * Toggles the boolean field, and in case it switches from false to true we will execute changes saving to server.
    */
    TeacherPersonalDetailsPage.prototype.toggleDisabledTeacher = function () {
        if (this.teacherDisabledBoolean === false) {
            this.saveTeacherModelChanges();
        }
        this.teacherDisabledBoolean = !this.teacherDisabledBoolean;
    };
    //#endregion
    //#region Private Methods
    /**
     * Error function when receiving the teacher information fails.
    */
    TeacherPersonalDetailsPage.prototype.failureGetDataExecution = function () {
        this.authService.signOut();
        this.navigationer.navigateToPage(this.pageEnum.Home);
        this.showAlertDialog('Something went wrong!', 'While getting your teacher information something went wrong, please contact the developer, Sorry!');
    };
    /**
     * Opens dialog and asks if the user wants to make the changes, in case he does a HTTP request with changes will occure.
     */
    TeacherPersonalDetailsPage.prototype.saveAuthModelChanges = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm the changes',
            message: 'Are you sure you want to save the user changes?  *You cannot restore your data after the change*',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.updateAuthModelAtServer();
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * Opens dialog and asks if the user wants to make the changes, in case he does a HTTP request with changes will occure.
     */
    TeacherPersonalDetailsPage.prototype.saveTeacherModelChanges = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm the changes',
            message: 'Are you sure you want to save the teacher changes?  *You cannot restore your data after the change*',
            buttons: [
                {
                    text: 'No',
                    role: 'cancel',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this.updateTeacherModelAtServer();
                    }
                }
            ]
        });
        alert.present();
    };
    /**
     * Updates model at database.
     */
    TeacherPersonalDetailsPage.prototype.updateAuthModelAtServer = function () {
        var _this = this;
        if (!this.isAuthModelValidToUpdate()) {
            this.showAlertDialog('Incorrect Data', 'One or more values are not correct or doesn\'t match at User and Teacher, please fill them correctly.');
            this.authDisabledBoolean = false;
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Updating, please wait...'
        });
        loading.present();
        var model = {
            id: this.profileProvider.profile.id,
            email: this.profileProvider.profile.email,
            lastName: this.profileProvider.profile.lastName,
            firstName: this.profileProvider.profile.firstName,
        };
        this.apiProvider.httpPut('auth/update', model)
            .subscribe(function (success) {
            loading.dismiss();
            _this.showAlertDialog('Updated successfully', 'The user data has been updated successfully.');
        }, function (failure) {
            loading.dismiss();
            _this.showAlertDialog('Error', 'Something went wrong when updating your user data, please contact support team.');
        });
    };
    /**
     * Updates model at database.
     */
    TeacherPersonalDetailsPage.prototype.updateTeacherModelAtServer = function () {
        var _this = this;
        if (!this.isTeacherModelValidToUpdate()) {
            this.showAlertDialog('Incorrect Data', 'One or more values are not correct or doesn\'t match at User and Teacher, please fill them correctly.');
            this.teacherDisabledBoolean = false;
            return;
        }
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Updating, please wait...'
        });
        loading.present();
        var model = {
            phone: this.teacher.phone,
            email: this.teacher.email,
            userID: this.teacher.userID,
            lastName: this.teacher.lastName,
            firstName: this.teacher.firstName,
            personalMessage: this.teacher.personalMessage,
            age: parseInt(this.teacher.age.toString()),
            priceTo: parseInt(this.teacher.priceTo.toString()),
            priceFrom: parseInt(this.teacher.priceFrom.toString())
        };
        this.apiProvider.httpPut('teacher/update', model)
            .subscribe(function (success) {
            loading.dismiss();
            _this.showAlertDialog('Updated successfully', 'The teacher data has been updated successfully.');
        }, function (failure) {
            loading.dismiss();
            _this.showAlertDialog('Error', 'Something went wrong when updating your teacher data, please contact support team.');
        });
    };
    /**
     * Validates whether the model can be updated and it's in correct format.
     */
    TeacherPersonalDetailsPage.prototype.isAuthModelValidToUpdate = function () {
        if (this.isPropertyNullOrUndefined(this.profileProvider.profile)
            || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.email)
            || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.firstName)
            || this.isStringNullOrUndefinedOrEmpty(this.profileProvider.profile.lastName)
            || this.profileProvider.profile.email !== this.teacher.email
            || this.profileProvider.profile.firstName !== this.teacher.firstName
            || this.profileProvider.profile.lastName !== this.teacher.lastName) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     *
     */
    TeacherPersonalDetailsPage.prototype.isTeacherModelValidToUpdate = function () {
        if (this.isPropertyNullOrUndefined(this.teacher)
            || this.isPropertyNullOrUndefined(this.teacher.age)
            || this.isPropertyNullOrUndefined(this.teacher.priceFrom)
            || this.isPropertyNullOrUndefined(this.teacher.priceTo)
            || this.teacher.age < 18
            || this.teacher.priceFrom < 0 || this.teacher.priceFrom > 200
            || this.teacher.priceTo < 0 || this.teacher.priceTo > 200
            || this.teacher.priceFrom > this.teacher.priceTo
            || this.isStringNullOrUndefinedOrEmpty(this.teacher.firstName)
            || this.isStringNullOrUndefinedOrEmpty(this.teacher.lastName)
            || this.isStringNullOrUndefinedOrEmpty(this.teacher.email)
            || this.isStringNullOrUndefinedOrEmpty(this.teacher.personalMessage)
            || this.isStringNullOrUndefinedOrEmpty(this.teacher.phone)
            || this.profileProvider.profile.email !== this.teacher.email
            || this.profileProvider.profile.firstName !== this.teacher.firstName
            || this.profileProvider.profile.lastName !== this.teacher.lastName) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Checks whether the property is null or undefined.
     */
    TeacherPersonalDetailsPage.prototype.isPropertyNullOrUndefined = function (property) {
        if (property === null || property === undefined) {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Checks whether the property is null or undefined or string is empty.
     */
    TeacherPersonalDetailsPage.prototype.isStringNullOrUndefinedOrEmpty = function (property) {
        if (property === null || property === undefined || property === "") {
            console.log(property);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Alert for bad inputs at update.
    */
    TeacherPersonalDetailsPage.prototype.showAlertDialog = function (title, body) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: body,
            buttons: ['OK']
        });
        alert.present();
    };
    return TeacherPersonalDetailsPage;
}());
TeacherPersonalDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-teacher-personal-details',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacher-personal-details\teacher-personal-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">Hey {{this.profileProvider.profile.firstName}}</font>\n    </ion-title>\n    <ion-buttons *ngIf="this.profileProvider.profile.role === 2" end icon-only class="m-color-white">\n      <div (click)="navigationer.navigateToPage(pageEnum.Admin)">\n        <ion-icon name="ios-unlock-outline"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- User + Teacher Header of tabs -->\n  <ion-row>\n    <ion-col col-12>\n      <ion-segment [(ngModel)]="currentChosenTab">\n        <ion-segment-button value="1" class="m-font-size-10px-impo">\n          User\n        </ion-segment-button>\n        <ion-segment-button value="2" class="m-font-size-10px-impo">\n          Teacher\n        </ion-segment-button>\n      </ion-segment>\n    </ion-col>\n  </ion-row>\n\n  <!-- User data -->\n  <ion-row *ngIf="currentChosenTab === \'1\'">\n    <!-- Edit and Save buttons -->\n    <ion-col col-12>\n      <button ion-button outline icon-start small color="dark" (click)="toggleDisabledAuth()" *ngIf="this.authDisabledBoolean === true">\n        <ion-icon name="ios-brush-outline"></ion-icon>\n        Edit\n      </button>\n      <button ion-button outline icon-start small color="dark" (click)="toggleDisabledAuth()" *ngIf="this.authDisabledBoolean === false">\n        <ion-icon name="md-checkmark"></ion-icon>\n        Save\n      </button>\n    </ion-col>\n    <!-- First Name -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.authDisabledBoolean" matInput placeholder="First Name" [(ngModel)]="this.profileProvider.profile.firstName">\n      </mat-form-field>\n    </ion-col>\n    <!-- Last Name -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.authDisabledBoolean" matInput placeholder="Last Name" [(ngModel)]="this.profileProvider.profile.lastName">\n      </mat-form-field>\n    </ion-col>\n    <!-- Email -->\n    <ion-col col-12>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.authDisabledBoolean" matInput placeholder="Email" [(ngModel)]="this.profileProvider.profile.email">\n      </mat-form-field>\n    </ion-col>\n  </ion-row>\n\n  <!-- Teacher data -->\n  <ion-row *ngIf="currentChosenTab === \'2\'">\n    <!-- Edit and Save buttons -->\n    <ion-col col-12>\n      <button ion-button outline icon-start small color="dark" (click)="toggleDisabledTeacher()" *ngIf="this.teacherDisabledBoolean === true">\n        <ion-icon name="ios-brush-outline"></ion-icon>\n        Edit\n      </button>\n      <button ion-button outline icon-start small color="dark" (click)="toggleDisabledTeacher()" *ngIf="this.teacherDisabledBoolean === false">\n        <ion-icon name="md-checkmark"></ion-icon>\n        Save\n      </button>\n    </ion-col>\n    <!-- First Name -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="First Name" [(ngModel)]="this.teacher.firstName">\n      </mat-form-field>\n    </ion-col>\n    <!-- Last Name -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="Last Name" [(ngModel)]="this.teacher.lastName">\n      </mat-form-field>\n    </ion-col>\n    <!-- Age -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="Age" [(ngModel)]="this.teacher.age">\n      </mat-form-field>\n    </ion-col>\n    <!-- Phone Number -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="Phone Number" [(ngModel)]="this.teacher.phone">\n      </mat-form-field>\n    </ion-col>\n    <!--From Price -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="From Price" [(ngModel)]="this.teacher.priceFrom">\n      </mat-form-field>\n    </ion-col>\n    <!-- To Price -->\n    <ion-col col-6>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="24" [disabled]="this.teacherDisabledBoolean" matInput placeholder="To Price" [(ngModel)]="this.teacher.priceTo">\n      </mat-form-field>\n    </ion-col>\n    <!-- Email -->\n    <ion-col col-12>\n      <mat-form-field class="m-full-width">\n        <input type="text" maxlength="40" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" [disabled]="this.teacherDisabledBoolean"\n          matInput placeholder="Email" [(ngModel)]="this.teacher.email">\n      </mat-form-field>\n    </ion-col>\n    <!-- Personal Message -->\n    <ion-col col-12>\n      <mat-form-field class="m-full-width">\n        <textarea matInput maxlength="200" [disabled]="this.teacherDisabledBoolean" rows="4" placeholder="Personal Message" [(ngModel)]="this.teacher.personalMessage"></textarea>\n      </mat-form-field>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\teacher-personal-details\teacher-personal-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_angular4_social_login__["AuthService"],
        __WEBPACK_IMPORTED_MODULE_0__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */]])
], TeacherPersonalDetailsPage);

//# sourceMappingURL=teacher-personal-details.js.map

/***/ }),

/***/ 194:
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
webpackEmptyAsyncContext.id = 194;

/***/ }),

/***/ 236:
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
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminPage = (function () {
    //#endregion
    //#region Constructor
    function AdminPage(navCtrl, navParams, profileProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__["a" /* PageType */];
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_3__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
    }
    return AdminPage;
}());
AdminPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-admin',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\admin\admin.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Admin zone</font>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  Admin page, sup?\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\admin\admin.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_profile_profile__["a" /* ProfileProvider */]])
], AdminPage);

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactusPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_common_common__ = __webpack_require__(72);
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
    function ContactusPage(navParams, navCtrl, apiProvider, alertCtrl, loadingCtrl, commonProvider) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
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
    /**
     * Send contact form to backend and stores it inside database.
     */
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
            spinner: 'dots',
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
    /**
     * Open whatsApp in device on given phone number "972542477052".
     */
    ContactusPage.prototype.openWhatsApp = function () {
        window.open('https://api.whatsapp.com/send?phone=972542477052');
    };
    //#endregion
    //#region Private Methods
    /**
     * Validates whether the form is valid or not.
     * @returns {boolean}
     */
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
    /**
     * Creates ionic alert.
     * @param titleInput Title for the alert.
     * @param subTitleInput Sub-Title for the alert.
     */
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
        selector: 'page-contactus',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Contact Us</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-30px m-font-weight-300">\n            What is your opinion?\n          </font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          You can send us anything you wish, feedback, recommendation, new ideas, bugs you\'ve found, or even send message for fun,\n          we\'ll try to comment as soon as possible.\n        </ion-col>\n      </ion-row>\n\n      <!-- Direct contant -->\n      <ion-row text-left>\n        <ion-col col-12>\n          <font class="m-color-orange">You can contact the owner of this application by:</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Email: mmoshikoo@gmail.com</font>\n        </ion-col>\n        <ion-col col-12>\n          <font class="m-color-c2bbbb">Phone: 0542477052</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- Full name and Reason to contact -->\n        <ion-row>\n          <!-- Full name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="24" matInput placeholder="Full name" [formControl]="fullNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>First name and Last name</mat-hint>\n              <mat-error *ngIf="fullNameFormControl.hasError(\'required\')">\n                Full name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Reason to contact -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Reason to contact" [formControl]="contactReasonFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.reasonToContactArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>Why do you want to contact us?</mat-hint>\n              <mat-error *ngIf="contactReasonFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <input type="email" maxlength="40" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput\n                placeholder="Email" [formControl]="emailFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="messageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Tell us your ideas, we will be happy to know.</mat-hint>\n              <mat-hint align="end">{{messageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="messageFormControl.hasError(\'minlength\') && !messageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'maxlength\') && !messageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="messageFormControl.hasError(\'required\')">\n                Write down something.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Buttons -->\n      <ion-row>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="primary" block (click)="sendContactUsForm();">\n            <ion-icon name="ios-send-outline"></ion-icon>\n            Send\n          </button>\n        </ion-col>\n        <ion-col col-6>\n          <button ion-button outline icon-start color="secondary" block (click)="openWhatsApp();">\n            <ion-icon name="logo-whatsapp"></ion-icon>\n            WhatsApp\n          </button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\contactus\contactus.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_common_common__["a" /* CommonProvider */]])
], ContactusPage);

//# sourceMappingURL=contactus.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__singleteacher_singleteacher__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_favorites_manager_favorites_manager__ = __webpack_require__(73);
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
    function FavoritesPage(navParams, navCtrl, apiProvider, modalCtrl, alertCtrl, loadingCtrl, profileProvider, favoritesManagerProvider) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profileProvider = profileProvider;
        this.favoritesManagerProvider = favoritesManagerProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_2__common_PageType_Enum__["a" /* PageType */];
        this.teachers = [];
        this.userHaveFavorites = false;
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
        var listOfTeacherID = this.favoritesManagerProvider.getFavorites();
        this.bootstrapFavoritePage(listOfTeacherID);
    }
    //#endregion
    //#region Public Methods
    /**
     * Opens favorites page with the teacher the user choose.
     * When the user dismiss the modal we detect it.
     * - If the user removed the teacher from his favorites list we'll remove the teacher from the view.
     */
    FavoritesPage.prototype.expandTeacherInformation = function (index) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__singleteacher_singleteacher__["a" /* SingleteacherPage */], { teacher: this.teachers[index] });
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
    /**
     * Initialization function for the page.
     * @param listOfTeacherID List of teachers IDs.
     */
    FavoritesPage.prototype.bootstrapFavoritePage = function (listOfTeacherID) {
        if (listOfTeacherID == null || listOfTeacherID.length == 0) {
            this.userHaveFavorites = false;
        }
        else {
            this.userHaveFavorites = true;
            this.getTeachersByID(listOfTeacherID);
        }
    };
    /**
     * Receives list of teachers according to list of given teachers IDs.
     */
    FavoritesPage.prototype.getTeachersByID = function (listOfTeacherID) {
        var _this = this;
        var data = {
            "listOfTeacherID": listOfTeacherID
        };
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
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
    /**
     * Creates ionic alert.
     * @param titleInput Title for the alert.
     * @param subTitleInput Sub-Title for the alert.
     */
    FavoritesPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    /**
     * Attaches image to specific teacher async.
     * @param teacher Teacher ID
     */
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
        selector: 'page-favorites',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/'<ion-header>\n  <ion-navbar text-center>\n    <ion-title>\n      <font class="m-color-white">Favorites</font>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Favorites</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          This is all the favorites teachers you\'ve saved, you can manage all your teachers here and save them for the future.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- No favorites case -->\n      <div *ngIf="!userHaveFavorites">\n        <!-- No teachers as favorites text -->\n        <ion-row text-center>\n          <ion-col col-12>\n            You have none in your favorite list.\n          </ion-col>\n        </ion-row>\n\n        <!-- Search for teachers button -->\n        <ion-row text-center>\n          <ion-col col-12>\n            <button ion-button icon-start outline (click)="navigationer.navigateToPage(pageEnum.Search)">\n              <ion-icon name="ios-search"></ion-icon>\n              Search for teacher\n            </button>\n          </ion-col>\n        </ion-row>\n      </div>\n\n      <!-- There are teachers in favorites list -->\n      <div *ngIf="userHaveFavorites">\n\n        <ion-row>\n          <ion-col col-6 class="animated zoomIn" *ngFor="let teacher of teachers;let i = index;">\n            <ion-card (click)="expandTeacherInformation(i);" text-center>\n              <!-- Image -->\n              <ion-col col-12 class="m-padding-0-impo" *ngIf="teacher.image == null">\n                <img class="m-default-image-cards" src="assets\\imgs\\imageNotFound.jpg" />\n              </ion-col>\n              <ion-col col-12 class="m-padding-0-impo" *ngIf="teacher.image != null">\n                <img class="m-default-image-cards-favorite" src="{{teacher.image}}" />\n              </ion-col>\n\n              <!-- Name and Last Name-->\n              <ion-col col-12>\n                <h2>\n                  <b>{{teacher.firstName}} {{teacher.lastName}}</b>\n                </h2>\n              </ion-col>\n              <!-- Price -->\n              <ion-col col-12 class="m-padding-0-impo">\n                <h2>\n                  <i>{{teacher.priceFrom}} - {{teacher.priceTo}}</i>\n                  <font class="m-font-size-10px">ILS</font>\n                </h2>\n              </ion-col>\n              <!-- Rate -->\n              <ion-col col-12 class="m-padding-0-impo">\n                <rate-show [stars]="teachers[i].rate"></rate-show>\n              </ion-col>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n\n      </div>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\favorites\favorites.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], FavoritesPage);

//# sourceMappingURL=favorites.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToasterProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
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
    /**
     * Presents toast on screen of the device.
     * @param message Message of the toast.
     * @param time How much time it will be shown.
     * @param location Where the toast will be represented.
     */
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], ToasterProvider);

//# sourceMappingURL=toaster.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
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
    /**
     * Settings new value at local storage.
     * @param key Key in local storage.
     * @param value Value in local storage according to Key.
     */
    LocalStorageProvider.prototype.Set = function (key, value) {
        this.localStorageService.set(key, value);
    };
    /**
     * Receive value from localstorage according to given Key.
     * @param key Key in local storage.
     */
    LocalStorageProvider.prototype.Get = function (key) {
        return this.localStorageService.get(key);
    };
    /**
     * Removes value from local storage according to given Key.
     * @param key Key in local storage.
     */
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

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeacherslistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__singleteacher_singleteacher__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_favorites_manager_favorites_manager__ = __webpack_require__(73);
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
    function TeacherslistPage(navParams, navCtrl, apiProvider, modalCtrl, favoritesManagerProvider) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.modalCtrl = modalCtrl;
        this.favoritesManagerProvider = favoritesManagerProvider;
        //#region Members
        this.teachers = [];
        this.teachersListNotChange = [];
        var tempArray = this.navParams.get('teacherSearchList');
        for (var _i = 0, tempArray_1 = tempArray; _i < tempArray_1.length; _i++) {
            var item = tempArray_1[_i];
            this.getImageForTeacher(item);
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
    /**
     * Opens teacher with his details.
     * @param index Teacher index at array.
     */
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
    /**
     * Filters on teachers when searching for teacher at searchbar.
     * @param event Angular event.
     */
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
    // Implement strategy pattern here.
    /**
     * Sorts the array by some sort algorithm selected.
     * @param sortByType How to sort the array.
     */
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
    /**
     * Sort by name algorithm.
     */
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
    /**
     * Sort by rate algorithm.
     */
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
    /**
     * Sort by recommendations algorithm.
     */
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
    /**
     * Sort by recommendations & rate algorithm.
     */
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
    /**
     * Receives image for the tacher.
     * @param teacher Teacher object.
     */
    TeacherslistPage.prototype.getImageForTeacher = function (teacher) {
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], TeacherslistPage);

//# sourceMappingURL=teacherslist.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTeacherFormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_validator_lib_isEmail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_common_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__common_PageType_Enum__ = __webpack_require__(37);
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

var NewTeacherFormPage = (function () {
    //#endregion
    //#region Constructor
    function NewTeacherFormPage(rd, platform, navParams, navCtrl, apiProvider, alertCtrl, loadingCtrl, commonProvider, profileProvider) {
        this.rd = rd;
        this.platform = platform;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonProvider = commonProvider;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_9__common_PageType_Enum__["a" /* PageType */];
        this.lastNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.firstNameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.genderAtFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesSubjectsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.teachesInstitutionsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].email]);
        this.phoneFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(9), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(10)]);
        this.personalMessageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(200)]);
        this.ageFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(16), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(120)]);
        this.toPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.fromPriceFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].minLength(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].maxLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].min(1), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].max(200)]);
        this.image = null;
        this.matcher = new MyErrorStateMatcher();
        this.showErrorMessagePrices = false;
        this.showErrorMessage = false;
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_8__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
        // We take minutes 20 in the calculation to take the padding at calculation.
        this.imageWidth = platform.width() - 20;
        this.imageHeight = platform.width() - 20;
        this.initInputs();
    }
    NewTeacherFormPage.prototype.ionViewWillEnter = function () {
        if (this.profileProvider.profile.filledTeacherForm === true) {
            this.navigationer.navigateToPage(this.pageEnum.TeacherDetails);
        }
    };
    //#endregion
    //#region Public Methods
    /**
     * Creates new teacher interface and sends it to back-end.
     */
    NewTeacherFormPage.prototype.createTeacher = function () {
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
            spinner: 'dots',
            content: 'Sending information, please wait...'
        });
        loading.present();
        this.apiProvider.httpPost('teacher/create', newTeacherData)
            .subscribe(function (success) {
            loading.dismiss();
            var alert = _this.createAlert('Welcome new teacher', 'Your account has been created successfully, this is your teacher page, thank you and good luck.');
            alert.present();
            _this.navigationer.navigateToPage(_this.pageEnum.TeacherDetails);
        }, function (failure) {
            loading.dismiss();
            var alert = _this.createAlert('Something went wrong', 'Please try again later, we have some server issues.');
            alert.present();
        });
    };
    /**
     * Rotate base64 image to right or left.
     * @param base64Image Image string in base64.
     * @param isClockwise Which clock direction to rotate the image.
     */
    NewTeacherFormPage.prototype.rotateBase64Image90deg = function (base64Image, isClockwise) {
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
    /**
     * Reads image in base64 and use compression algorithm to make it smaller.
     * @param $event Angular event.
     */
    NewTeacherFormPage.prototype.readImageBase64 = function ($event) {
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
    /**
     * Clears the image.
     */
    NewTeacherFormPage.prototype.clearImage = function () {
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
    /**
     * Convert from strings to integers to send it to backend in proper form.
     */
    NewTeacherFormPage.prototype.convertStringToInteger = function () {
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
    /**
     * Validates whether the model is valid.
     */
    NewTeacherFormPage.prototype.isModelValid = function () {
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
    /**
     * Validates whether string is null or empty.
     * @param str Given string.
     */
    NewTeacherFormPage.prototype.isStringNullOrEmpty = function (str) {
        if (str == null || str === "") {
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Creates all inputs data in JSON format to send it to backend.
     */
    NewTeacherFormPage.prototype.createNewTeacherDataJson = function () {
        var _this = this;
        this.teachesInstitutionsFormControl.value.forEach(function (value, index) {
            _this.teachesInstitutionsFormControl.value[index] = parseInt(value.toString());
        });
        this.teachesSubjectsFormControl.value.forEach(function (value, index) {
            _this.teachesSubjectsFormControl.value[index] = parseInt(value.toString());
        });
        var newTeacher = {
            rate: 0,
            image: this.image,
            age: this.ageFormControl.value,
            phone: this.phoneFormControl.value,
            email: this.emailFormControl.value,
            priceTo: this.toPriceFormControl.value,
            lastName: this.lastNameFormControl.value,
            firstName: this.firstNameFormControl.value,
            priceFrom: this.fromPriceFormControl.value,
            gender: parseInt(this.genderAtFormControl.value),
            teachesAt: parseInt(this.teachesAtFormControl.value),
            personalMessage: this.personalMessageFormControl.value,
            teachesSubjects: this.teachesSubjectsFormControl.value,
            teachesInstitutions: this.teachesInstitutionsFormControl.value,
            userID: this.profileProvider.profile.id
        };
        return newTeacher;
    };
    /**
     * Creates ionic alert.
     * @param titleInput Title for the message.
     * @param subTitleInput Sub-Title for the message.
     */
    NewTeacherFormPage.prototype.createAlert = function (titleInput, subTitleInput) {
        var alert = this.alertCtrl.create({
            title: titleInput,
            subTitle: subTitleInput,
            buttons: ['Ok']
        });
        return alert;
    };
    /**
     * Checking all inputs if they are not empty.
     * @returns {boolean}
     */
    NewTeacherFormPage.prototype.isFormsValid = function () {
        if (!this.ageFormControl.valid ||
            !this.emailFormControl.valid ||
            !this.phoneFormControl.valid ||
            !this.toPriceFormControl.valid ||
            !this.genderAtFormControl.valid ||
            !this.lastNameFormControl.valid ||
            !this.firstNameFormControl.valid ||
            !this.fromPriceFormControl.valid ||
            !this.teachesAtFormControl.valid ||
            !this.personalMessageFormControl.valid ||
            !this.teachesSubjectsFormControl.valid ||
            !this.teachesInstitutionsFormControl.valid) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Checking all inputs if they are not empty.
     * @returns {boolean}
     */
    NewTeacherFormPage.prototype.isFormsNullOrEmpty = function () {
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
    /**
     * Validates whether the phone number is valid.
     * @returns {boolean}
     */
    NewTeacherFormPage.prototype.isPhoneValid = function (phone) {
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
    /**
     * Initialize inputs at HTML from profile of facebook or google API.
     */
    NewTeacherFormPage.prototype.initInputs = function () {
        if (this.profileProvider.isLoggedIn) {
            if (this.profileProvider.profile.firstName) {
                this.firstNameFormControl.setValue(this.profileProvider.profile.firstName);
            }
            if (this.profileProvider.profile.lastName) {
                this.lastNameFormControl.setValue(this.profileProvider.profile.lastName);
            }
            if (this.profileProvider.profile.email) {
                this.emailFormControl.setValue(this.profileProvider.profile.email);
            }
            if (this.profileProvider.profile.photoUrl) {
                this.image = this.profileProvider.profile.photoUrl;
            }
        }
    };
    return NewTeacherFormPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('inputImage'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], NewTeacherFormPage.prototype, "el", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('viewImage'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], NewTeacherFormPage.prototype, "elViewImage", void 0);
NewTeacherFormPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-new-teacher-form',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\new-teacher-form\new-teacher-form.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Join as Teacher</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Become a next-generation teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          In order to join as teacher you must fill all the following fields. Be specific with your information to gain more good resume\n          and comments from students. Remember, good instructor is remembered for lifetime.\n        </ion-col>\n      </ion-row>\n\n      <!-- Tip -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-orange">*Tip: </font>\n          Give full information at the relevant fields to interest more students.\n        </ion-col>\n      </ion-row>\n\n      <!-- Price warning -->\n      <ion-row>\n        <ion-col col-12>\n          <font class="m-color-red">*The price per lesson is for one hour*</font>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <!-- StudyHub for individuals title -->\n      <ion-row text-center class="m-padding-top-15px m-padding-buttom-15px">\n        <ion-col col-12>\n          <u>\n            <b>Fill teacher form</b>\n          </u>\n        </ion-col>\n      </ion-row>\n\n      <!-- Form -->\n      <form class="m-form">\n\n        <!-- First name and Last name -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- First name-->\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="12" matInput placeholder="First name" [formControl]="firstNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal first name</mat-hint>\n              <mat-error *ngIf="firstNameFormControl.hasError(\'required\')">\n                First name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Last name -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="12" matInput placeholder="Last name" [formControl]="lastNameFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal last name</mat-hint>\n              <mat-error *ngIf="lastNameFormControl.hasError(\'required\')">\n                Last name is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Age and Gender -->\n        <ion-row>\n          <!-- Age -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="text" maxlength="3" matInput placeholder="Age" [formControl]="ageFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>What\'s your age?</mat-hint>\n              <mat-error *ngIf="ageFormControl.hasError(\'minlength\') || ageFormControl.hasError(\'maxlength\') && !ageFormControl.hasError(\'required\')">\n                Type proper age.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'min\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be less than 16.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'max\') && !ageFormControl.hasError(\'required\')">\n                Age cannot be greater than 120.\n              </mat-error>\n              <mat-error *ngIf="ageFormControl.hasError(\'required\')">\n                Age is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Gender -->\n          <ion-col col-6>\n            <mat-form-field>\n              <mat-select placeholder="Gender" [formControl]="genderAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.genderArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What is your gender?</mat-hint>\n              <mat-error *ngIf="genderAtFormControl.hasError(\'required\')">Male or Female?</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Email and phone number -->\n        <ion-row>\n          <!-- Email -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="email" maxlength="40" pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$" matInput\n                placeholder="Email" [formControl]="emailFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Ex: Email@gmail.com</mat-hint>\n              <mat-error *ngIf="emailFormControl.hasError(\'email\') && !emailFormControl.hasError(\'required\')">\n                Please enter a valid email address.\n              </mat-error>\n              <mat-error *ngIf="emailFormControl.hasError(\'required\')">\n                Email is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Phone -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" maxlength="10" matInput placeholder="Phone" [formControl]="phoneFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>Your personal phone number</mat-hint>\n              <mat-error *ngIf="phoneFormControl.hasError(\'minlength\') || phoneFormControl.hasError(\'maxlength\') && !phoneFormControl.hasError(\'required\')">\n                Length of phone number is invalid.\n              </mat-error>\n              <mat-error *ngIf="phoneFormControl.errors && phoneFormControl.errors.badphonenumber && !phoneFormControl.hasError(\'required\')">\n                Phone number is invalid.\n              </mat-error>\n              <mat-error *ngIf="phoneFormControl.hasError(\'required\')">\n                Phone is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- From price and To price -->\n        <ion-row>\n          <ion-col col-6>\n            <!-- From price -->\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="From price" [formControl]="fromPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>1 is Minimum.</mat-hint>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'minlength\') || fromPriceFormControl.hasError(\'maxlength\') && !fromPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'min\') && !fromPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'max\') && !fromPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="fromPriceFormControl.hasError(\'required\')">\n                From price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- To Price -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <input type="tel" matInput maxlength="3" placeholder="To price" [formControl]="toPriceFormControl" [errorStateMatcher]="matcher">\n              <mat-hint>200 is Maximum.</mat-hint>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'minlength\') || toPriceFormControl.hasError(\'maxlength\') && !toPriceFormControl.hasError(\'required\')">\n                Please fix the number.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'min\') && !toPriceFormControl.hasError(\'required\')">\n                Minimum is 1.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'max\') && !toPriceFormControl.hasError(\'required\')">\n                Maximum is 200.\n              </mat-error>\n              <mat-error *ngIf="toPriceFormControl.hasError(\'required\')">\n                To price is\n                <strong>required</strong>\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teach at and Teaches institutions -->\n        <ion-row>\n          <!-- Teach at -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach at" [formControl]="teachesAtFormControl" [errorStateMatcher]="matcher">\n                <mat-option *ngFor="let item of commonProvider.teachesAtArray" [value]="item.value">\n                  {{ item.viewValue }}\n                </mat-option>\n              </mat-select>\n              <mat-hint>What places do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesAtFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n          <!-- Teaches institutions -->\n          <ion-col col-6>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teaches institutions" [formControl]="teachesInstitutionsFormControl" multiple>\n                <mat-option *ngFor="let item of commonProvider.teachesInstitutionsArray" [value]="item.value">{{item.viewValue}}</mat-option>\n              </mat-select>\n              <mat-hint>What institutions do you teach at?</mat-hint>\n              <mat-error *ngIf="teachesInstitutionsFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Teaches Subjects -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <mat-select placeholder="Teach Subjects" [formControl]="teachesSubjectsFormControl" multiple>\n                <mat-optgroup *ngFor="let group of commonProvider.teachesSubjectsGroupsArray" [label]="group.name">\n                  <mat-option *ngFor="let subject of group.subjects" [value]="subject.value">\n                    {{ subject.viewValue }}\n                  </mat-option>\n                </mat-optgroup>\n              </mat-select>\n              <mat-hint>What courses do you teach?</mat-hint>\n              <mat-error *ngIf="teachesSubjectsFormControl.hasError(\'required\')">You must make a selection.</mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Personal Message -->\n        <ion-row>\n          <ion-col col-12>\n            <mat-form-field class="m-full-width">\n              <textarea matInput maxlength="200" rows="4" placeholder="Personal Message" [formControl]="personalMessageFormControl" [errorStateMatcher]="matcher"></textarea>\n              <mat-hint align="start">Say something about your self.</mat-hint>\n              <mat-hint align="end">{{personalMessageFormControl.value.length}} / 200</mat-hint>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'minlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Minimum words are 10.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'maxlength\') && !personalMessageFormControl.hasError(\'required\')">\n                Maximum words are 200.\n              </mat-error>\n              <mat-error *ngIf="personalMessageFormControl.hasError(\'required\')">\n                You must say few words about yourself.\n              </mat-error>\n            </mat-form-field>\n          </ion-col>\n        </ion-row>\n\n        <!-- Get image button and clear button -->\n        <ion-row>\n          <ion-col col-6>\n            <input #inputImage type="file" id="inputImageid" class="m-display-none" (change)="readImageBase64($event)" accept="image/*">\n            <button ion-button outline block icon-start small color="dark" onclick="document.getElementById(\'inputImageid\').click();">\n              <ion-icon name="ios-camera-outline"></ion-icon>\n              Add Image\n            </button>\n          </ion-col>\n          <ion-col col-6 *ngIf="image != null && image.length > 0">\n            <button ion-button outline block icon-start small color="dark" (click)="clearImage()">\n              <ion-icon name="ios-trash-outline"></ion-icon>\n              Clear\n            </button>\n          </ion-col>\n        </ion-row>\n\n        <!-- Image + Left Rotation + Right Rotation -->\n        <ion-row text-center #viewImage *ngIf="image != null && image.length > 0" class="animated flash">\n          <ion-col col-12>\n            <img height="{{imageHeight}}" width="{{imageWidth}}" src="{{image}}">\n          </ion-col>\n          <!-- Left Rotation -->\n          <ion-col col-6>\n            <button ion-button outline block icon-start small color="dark" (click)="rotateBase64Image90deg(image, false)">\n              <ion-icon name="ios-return-left"></ion-icon>\n              Rotate Left\n            </button>\n          </ion-col>\n          <!-- Right Rotation -->\n          <ion-col col-6>\n            <button ion-button outline block icon-end small color="dark" (click)="rotateBase64Image90deg(image, true)">\n              Rotate Right\n              <ion-icon name="ios-return-right"></ion-icon>\n            </button>\n          </ion-col>\n        </ion-row>\n\n      </form>\n\n      <!-- Error message - Fields -->\n      <ion-row *ngIf="showErrorMessage" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">Please fill the requested fields.</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Error message - Prices not valid -->\n      <ion-row *ngIf="showErrorMessagePrices" class="animated fadeInDown" text-center>\n        <ion-col col-12>\n          <font class="m-color-red">"Price from" cannot be greater from "To price"</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Send form button -->\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block (click)="createTeacher();">Make me a teacher</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\new-teacher-form\new-teacher-form.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["Renderer2"],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_common_common__["a" /* CommonProvider */],
        __WEBPACK_IMPORTED_MODULE_7__providers_profile_profile__["a" /* ProfileProvider */]])
], NewTeacherFormPage);

//# sourceMappingURL=new-teacher-form.js.map

/***/ }),

/***/ 30:
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
    /**
     * Setting teacher status boolean to true and adding the new profile data.
     * @param newProfile New profile.
     */
    ProfileProvider.prototype.setUserLoggedIn = function (newProfile) {
        this.profile = newProfile;
        this.isLoggedIn = true;
    };
    /**
     * Settings user as logged out.
     */
    ProfileProvider.prototype.setUserLoggedOut = function () {
        this.profile = null;
        this.isLoggedIn = false;
    };
    return ProfileProvider;
}());
ProfileProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProfileProvider);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
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
    function ApiProvider(http, profileProvider) {
        this.http = http;
        this.profileProvider = profileProvider;
        //#region Members
        // public endPoint: string = "http://localhost:8000/";
        this.endPoint = "https://teacher-student-backend.herokuapp.com/";
    }
    //#endregion
    //#region Public Methods
    /**
     * HTTP Get function.
     * @param path What path to add to call.
     */
    ApiProvider.prototype.httpGet = function (path) {
        var _this = this;
        var url = this.endPoint + path;
        var headers = this.buildHeader();
        return this.http.get(url, { headers: headers })
            .map(function (res) { return _this.checkResultModel(res); });
    };
    /**
     * HTTP Post function.
     * @param path What path to add to call.
     * @param data Data to send.
     */
    ApiProvider.prototype.httpPost = function (path, data) {
        var _this = this;
        var url = this.endPoint + path;
        var headers = this.buildHeader();
        return this.http.post(url, JSON.stringify(data), { headers: headers })
            .map(function (res) { return _this.checkResultModel(res); });
    };
    /**
     * HTTP Put function.
     * @param path What path to add to call.
     * @param data Data to send.
     */
    ApiProvider.prototype.httpPut = function (path, data) {
        var _this = this;
        var url = this.endPoint + path;
        var headers = this.buildHeader();
        return this.http.put(url, JSON.stringify(data), { headers: headers })
            .map(function (res) { return _this.checkResultModel(res); });
    };
    //#endregion
    //#region Private Methods
    /**
     * Builds headers for API request.
     * @returns {Headers} The new header.
     */
    ApiProvider.prototype.buildHeader = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        if (this.profileProvider.profile && this.profileProvider.profile.authToken) {
            headers.append('provider', this.profileProvider.profile.provider);
        }
        if (this.profileProvider.profile && this.profileProvider.profile.authToken) {
            headers.append('x-auth', this.profileProvider.profile.authToken);
        }
        return headers;
    };
    /**
     * Inspect what has been returned from backend.
     * @param result The data from backend.
     * @returns Returns formatted JSON or nothing, according to function algorithm.
     */
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_0__profile_profile__["a" /* ProfileProvider */]])
], ApiProvider);

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageType; });
var PageType;
(function (PageType) {
    PageType[PageType["Search"] = 1] = "Search";
    PageType[PageType["ContactUs"] = 2] = "ContactUs";
    PageType[PageType["JoinAsTeacher"] = 4] = "JoinAsTeacher";
    PageType[PageType["Favorites"] = 8] = "Favorites";
    PageType[PageType["TeacherList"] = 16] = "TeacherList";
    PageType[PageType["NewTeacherForm"] = 32] = "NewTeacherForm";
    PageType[PageType["TeacherDetails"] = 64] = "TeacherDetails";
    PageType[PageType["Admin"] = 128] = "Admin";
    PageType[PageType["Home"] = 256] = "Home";
})(PageType || (PageType = {}));
//# sourceMappingURL=PageType.Enum.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTeacherLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var NewTeacherLoginPage = (function () {
    //#endregion
    //#region Constructor
    function NewTeacherLoginPage(navParams, navCtrl, apiProvider, authService, alertCtrl, loadingCtrl, profileProvider) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.profileProvider = profileProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_3__common_PageType_Enum__["a" /* PageType */];
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
    }
    NewTeacherLoginPage.prototype.ionViewWillEnter = function () {
        if (this.profileProvider.isLoggedIn === true) {
            this.navigationer.navigateToPage(this.pageEnum.Home);
        }
    };
    //#endregion
    //#region Public Methods
    /**
     * Logging in with facebook or Google provider, using facebook or google API.
     */
    NewTeacherLoginPage.prototype.signIn = function (signInProvider) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: 'Verifying, please wait...'
        });
        var providerSignInMethod = this.getProviderMethod(signInProvider);
        if (providerSignInMethod === null) {
            console.log("Bad provider has been passed, aborting.");
            return;
        }
        this.authService.signIn(providerSignInMethod)
            .then(function (signedInUser) {
            loading.present();
            var isUserExistModel = {
                id: signedInUser.id,
                token: signedInUser.authToken,
                provider: signedInUser.provider
            };
            _this.apiProvider.httpPost('auth/doesuserexistbyid', isUserExistModel)
                .subscribe(function (success) {
                _this.resultFromUserExistEndpoint(signedInUser, success, loading);
            }, function (failure) { loading.dismiss(); _this.failureResponse(); });
        }, function (error) {
            console.log("Error occured when signing in to " + signInProvider + ".");
            console.log(error);
            loading.dismiss();
        });
    };
    //#endregion
    //#region Private Methods
    /**
     * Creates new profile interface of APP according to given social interface.
     * @param user Social model.
     * @returns {ProfileInterface} Returning this model to send to backend.
     */
    NewTeacherLoginPage.prototype.createUser = function (user) {
        var newUser = {
            role: 1,
            id: user.id,
            name: user.name,
            email: user.email,
            photoUrl: user.photoUrl,
            lastName: user.lastName,
            provider: user.provider,
            firstName: user.firstName,
            authToken: user.authToken,
            filledTeacherForm: false
        };
        return newUser;
    };
    /**
     * Moves to another page and dismiss loading model
     * @param loader Ionic loader.
     */
    NewTeacherLoginPage.prototype.goToTeaherFormPage = function () {
        this.navCtrl.pop();
        this.navigationer.navigateToPage(this.pageEnum.NewTeacherForm);
    };
    /**
     * Failure response for the user.
     * @param loader Ionic loader.
     */
    NewTeacherLoginPage.prototype.failureResponse = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Failed to create as teacher, please try again.',
            buttons: ['Ok']
        });
        alert.present();
    };
    /**
     * Decides on provider type and returns the actual variable to use it.
     * @param signInProvider
     */
    NewTeacherLoginPage.prototype.getProviderMethod = function (signInProvider) {
        if (signInProvider === null || signInProvider === undefined) {
            console.log("signInProvider is null or empty.");
            return null;
        }
        var providerSignInMethod = null;
        switch (signInProvider) {
            case "FACEBOOK":
                providerSignInMethod = __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID;
                break;
            case "GOOGLE":
                providerSignInMethod = __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID;
                break;
            default:
                console.log("Provider wasn't found, aborting.");
                providerSignInMethod = null;
                break;
        }
        return providerSignInMethod;
    };
    /**
     * The function will be activated when result came from api of 'auth/doesuserexistbyid'.
     * @param success exist: {boolean} , role: {His role from database}
     */
    NewTeacherLoginPage.prototype.resultFromUserExistEndpoint = function (signedInUser, success, loading) {
        var _this = this;
        this.user = this.createUser(signedInUser);
        // Exist is true, therefore we exist and we will be moved to details page.
        // Exist is false, therefore we will be moved to create new teacher
        if (success.exist === true) {
            this.user.role = success.role;
            this.user.filledTeacherForm = success.exist;
            this.profileProvider.setUserLoggedIn(this.user);
            loading.dismiss();
            this.navigationer.navigateToPage(this.pageEnum.TeacherDetails);
        }
        else {
            this.profileProvider.setUserLoggedIn(this.user);
            this.apiProvider.httpPost('auth/createnewuser', this.user)
                .subscribe(function (success) { console.log(success); loading.dismiss(); _this.goToTeaherFormPage(); }, function (failure) { console.log(failure); loading.dismiss(); _this.failureResponse(); });
        }
    };
    return NewTeacherLoginPage;
}());
NewTeacherLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-new-teacher-login',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\new-teacher-login\new-teacher-login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      <font class="m-color-white">Login</font>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n  <!-- Gray area -->\n  <div padding text-center class="m-background-2b3137 m-margin-top0 m-color-white">\n\n    <ion-grid>\n\n      <!-- Title -->\n      <ion-row text-center>\n        <ion-col col-12>\n          <font class="m-color-white m-font-size-35px m-font-weight-300">Hello teacher</font>\n        </ion-col>\n      </ion-row>\n\n      <!-- Subtitle -->\n      <ion-row>\n        <ion-col col-12>\n          Please choose your login method and continue the process.\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <!-- White area -->\n  <div>\n\n    <ion-grid>\n\n      <ion-row text-center>\n\n        <!-- Facebook authentication -->\n        <ion-col col-12>\n          <button (click)="signIn(\'FACEBOOK\')" class="loginBtn loginBtn--facebook">\n            Login with Facebook\n          </button>\n        </ion-col>\n\n        <!-- Google authentication -->\n        <ion-col col-12>\n          <button (click)="signIn(\'GOOGLE\')" class="loginBtn loginBtn--google">\n            Login with Google\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\new-teacher-login\new-teacher-login.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["AuthService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_angular4_social_login__["AuthService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */]) === "function" && _g || Object])
], NewTeacherLoginPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=new-teacher-login.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__ = __webpack_require__(73);
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
    function SettingsPage(navParams, navCtrl, apiProvider, profileProvider, favoritesManagerProvider) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.apiProvider = apiProvider;
        this.profileProvider = profileProvider;
        this.favoritesManagerProvider = favoritesManagerProvider;
        //#region Members
        this.pageEnum = __WEBPACK_IMPORTED_MODULE_3__common_PageType_Enum__["a" /* PageType */];
        this.navigationer = new __WEBPACK_IMPORTED_MODULE_4__common_Navigationer__["a" /* Navigationer */](this.navCtrl, this.profileProvider);
    }
    //#endregion
    //#region Public Methods
    /**
     * Remove all favorites from local storage.
     */
    SettingsPage.prototype.clearIDLocalStorage = function () {
        this.favoritesManagerProvider.removeAll();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class="m-color-white">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>\n      <font class="m-color-white">Settings</font>\n    </ion-title>\n    <ion-buttons end icon-only class="m-color-white">\n      <div (click)="navigationer.navigateToPage(pageEnum.Favorites)">\n        <ion-icon name="ios-bookmark-outline"></ion-icon>\n      </div>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding text-center>\n\n  <ion-grid>\n\n    <ion-row>\n      <ion-col col-12>\n        Settings page, go away, it\'s not ready!\n      </ion-col>\n      <ion-col col-12>\n        <button ion-button outline small color="danger" (click)="clearIDLocalStorage()">Clear favorites</button>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\pages\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_module__ = __webpack_require__(390);




Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_api__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_search_search__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_common_common__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_teaches_at_teaches_at__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_new_teacher_form_new_teacher_form__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_teaches_subjects_teaches_subjects__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_new_teacher_login_new_teacher_login__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_favorites_manager_favorites_manager__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pipes_teaches_institutions_teaches_institutions__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_teacher_personal_details_teacher_personal_details__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_material_menu__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_material_tabs__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_material_input__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_material_select__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_rate_show_rate_show__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_material_autocomplete__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_angular4_social_login__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































var config = new __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["AuthServiceConfig"]([
    {
        id: __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["FacebookLoginProvider"]("200690180499086")
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["GoogleLoginProvider"]("391786601238-qdgnckjfrqrbsqia2nup1ds4ecjsbora.apps.googleusercontent.com")
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
            __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */],
            __WEBPACK_IMPORTED_MODULE_35__components_rate_show_rate_show__["a" /* RateShowComponent */],
            __WEBPACK_IMPORTED_MODULE_25__pages_new_teacher_form_new_teacher_form__["a" /* NewTeacherFormPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_new_teacher_login_new_teacher_login__["a" /* NewTeacherLoginPage */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_29__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */],
            __WEBPACK_IMPORTED_MODULE_30__pages_teacher_personal_details_teacher_personal_details__["a" /* TeacherPersonalDetailsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_38_angular4_social_login__["SocialLoginModule"].initialize(config),
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */], {
                locationStrategy: 'path'
            }, {
                links: [
                    { component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */], name: 'Home', segment: 'home' },
                    { component: __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */], name: 'Admin', segment: 'admin' },
                    { component: __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */], name: 'Search', segment: 'search' },
                    { component: __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */], name: 'Settings', segment: 'settings' },
                    { component: __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */], name: 'Contactus', segment: 'contactus' },
                    { component: __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */], name: 'Favorites', segment: 'favorites' },
                    { component: __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */], name: 'Teacherslist', segment: 'teacherslist' },
                    { component: __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */], name: 'Singleteacher', segment: 'singleteacher' },
                    { component: __WEBPACK_IMPORTED_MODULE_25__pages_new_teacher_form_new_teacher_form__["a" /* NewTeacherFormPage */], name: 'NewTeacherForm', segment: 'newteacherform' },
                    { component: __WEBPACK_IMPORTED_MODULE_27__pages_new_teacher_login_new_teacher_login__["a" /* NewTeacherLoginPage */], name: 'NewTeacherLogin', segment: 'newteacherlogin' },
                    { component: __WEBPACK_IMPORTED_MODULE_30__pages_teacher_personal_details_teacher_personal_details__["a" /* TeacherPersonalDetailsPage */], name: "TeacherPersonalDetailsPage", segment: "teacherpersonaldetailspage" }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_6_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'StudyHub',
                storageType: 'localStorage'
            }),
            __WEBPACK_IMPORTED_MODULE_37__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_32__angular_material_tabs__["a" /* MatTabsModule */],
            __WEBPACK_IMPORTED_MODULE_31__angular_material_menu__["a" /* MatMenuModule */],
            __WEBPACK_IMPORTED_MODULE_33__angular_material_input__["a" /* MatInputModule */],
            __WEBPACK_IMPORTED_MODULE_34__angular_material_select__["a" /* MatSelectModule */],
            __WEBPACK_IMPORTED_MODULE_36__angular_material_autocomplete__["a" /* MatAutocompleteModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_admin_admin__["a" /* AdminPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_favorites_favorites__["a" /* FavoritesPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_contactus_contactus__["a" /* ContactusPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_singleteacher_singleteacher__["a" /* SingleteacherPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_new_teacher_form_new_teacher_form__["a" /* NewTeacherFormPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_new_teacher_login_new_teacher_login__["a" /* NewTeacherLoginPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_teacher_personal_details_teacher_personal_details__["a" /* TeacherPersonalDetailsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_gender_gender__["a" /* GenderPipe */],
            __WEBPACK_IMPORTED_MODULE_9__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_teaches_at_teaches_at__["a" /* TeachesAtPipe */],
            __WEBPACK_IMPORTED_MODULE_16__providers_common_common__["a" /* CommonProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_toaster_toaster__["a" /* ToasterProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_profile_profile__["a" /* ProfileProvider */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_teaches_subjects_teaches_subjects__["a" /* TeachesSubjectsPipe */],
            __WEBPACK_IMPORTED_MODULE_24__providers_local_storage_local_storage__["a" /* LocalStorageProvider */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_image_compress__["ImageCompressService"],
            __WEBPACK_IMPORTED_MODULE_29__pipes_teaches_institutions_teaches_institutions__["a" /* TeachesInstitutionsPipe */],
            __WEBPACK_IMPORTED_MODULE_28__providers_favorites_manager_favorites_manager__["a" /* FavoritesManagerProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_search_search__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_profile_profile__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_personal_details_teacher_personal_details__ = __webpack_require__(179);
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
    function MyApp(platform, statusBar, menuCtrl, authService, splashScreen, profileProvider) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.menuCtrl = menuCtrl;
        this.authService = authService;
        this.splashScreen = splashScreen;
        this.profileProvider = profileProvider;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
                { title: 'Search', component: __WEBPACK_IMPORTED_MODULE_5__pages_search_search__["a" /* SearchPage */] },
                { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_settings_settings__["a" /* SettingsPage */] }
            ];
        });
    }
    //#endregion
    //#region Public Methods
    /**
     * Sets the components to be root of the page.
     */
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    /**
     * Signed out from auth Service from NPM Package and from provier of Profile.
     */
    MyApp.prototype.signOut = function () {
        var _this = this;
        this.authService.signOut()
            .then(function () { return _this.profileProvider.setUserLoggedOut(); });
    };
    /**
     * Switches to use details page and close the menu.
     */
    MyApp.prototype.goToUserDetailsPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_teacher_personal_details_teacher_personal_details__["a" /* TeacherPersonalDetailsPage */]);
        this.menuCtrl.close();
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/'<ion-menu [content]="content">\n  <!-- Title -->\n  <ion-header>\n    <ion-toolbar>\n      <ion-title text-center>\n        <font class="m-color-white">StudyHub</font>\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <!-- Loggin in teacher -->\n    <ion-row text-center *ngIf="profileProvider.isLoggedIn == true">\n      <ion-col col-12>\n        <img style="border-radius: 100%;" src="{{profileProvider.profile.photoUrl}}" />\n      </ion-col>\n      <ion-col col-12>\n        <label style="font-family: fantasy;font-size: 22px;">\n          Welcome {{profileProvider.profile.firstName}} {{profileProvider.profile.lastName}}\n        </label>\n      </ion-col>\n\n      <ion-col col-6>\n        <button ion-button outline icon-start small color="dark" (click)="goToUserDetailsPage()">\n          <ion-icon name="ios-person-outline"></ion-icon>\n          Edit profile\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button outline icon-end small color="danger" (click)="signOut()">\n          Log out\n          <ion-icon name="ios-exit-outline"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n    <!-- Buttons -->\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\Users\mmosh\Desktop\Moshe Files\Teacher student Project\Frontend\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_7_angular4_social_login__["AuthService"],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_8__providers_profile_profile__["a" /* ProfileProvider */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Navigationer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_home_home__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_admin_admin__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_search_search__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contactus_contactus__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_teacherslist_teacherslist__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_new_teacher_form_new_teacher_form__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_new_teacher_login_new_teacher_login__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_teacher_personal_details_teacher_personal_details__ = __webpack_require__(179);










var Navigationer = (function () {
    //#region Constructor
    function Navigationer(navCtrl, profileProvider) {
        this.navCtrl = navCtrl;
        this.profileProvider = profileProvider;
    }
    //#endregion
    //#region Public Methods
    Navigationer.prototype.navigateToPage = function (page, params) {
        if (params === void 0) { params = null; }
        switch (page) {
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].Home:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_home_home__["a" /* HomePage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].Search:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__pages_search_search__["a" /* SearchPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].ContactUs:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_contactus_contactus__["a" /* ContactusPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].JoinAsTeacher:
                if (this.profileProvider.isLoggedIn === true) {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_new_teacher_form_new_teacher_form__["a" /* NewTeacherFormPage */], params);
                }
                else {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pages_new_teacher_login_new_teacher_login__["a" /* NewTeacherLoginPage */], params);
                }
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].Favorites:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages_favorites_favorites__["a" /* FavoritesPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].TeacherList:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__pages_teacherslist_teacherslist__["a" /* TeacherslistPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].NewTeacherForm:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__pages_new_teacher_form_new_teacher_form__["a" /* NewTeacherFormPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].TeacherDetails:
                this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_teacher_personal_details_teacher_personal_details__["a" /* TeacherPersonalDetailsPage */], params);
                break;
            case __WEBPACK_IMPORTED_MODULE_1__PageType_Enum__["a" /* PageType */].Admin:
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_admin_admin__["a" /* AdminPage */], params);
                break;
            default:
                console.log('Not found the requested page ' + page);
                break;
        }
    };
    return Navigationer;
}());

//# sourceMappingURL=Navigationer.js.map

/***/ }),

/***/ 717:
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

/***/ 718:
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

/***/ 719:
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

/***/ 72:
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
    //#region Constructor
    function CommonProvider() {
        // Teaches at array Json.
        this.teachesAtArray = [
            { value: '1', viewValue: 'Student\'s house' },
            { value: '2', viewValue: 'Academic institution' },
            { value: '3', viewValue: 'Both' }
        ];
        // Gender array Json.
        this.genderArray = [
            { value: '1', viewValue: 'Male' },
            { value: '2', viewValue: 'Female' }
        ];
        // Teaches institutions array Json.
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
        // Subjects array Json.
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
        // Subjects teaching array Json.
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
        // Reason to contact array Json.
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

/***/ }),

/***/ 720:
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

/***/ 727:
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

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritesManagerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_local_storage_local_storage__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(70);
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
    /**
     * Adding new teacher ID at local storage.
     * @param id Teacher ID.
     */
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
    /**
     * Checks whether some ID exists in favorites list.
     * @param id What ID to check.
     * @returns {boolean}
     */
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
    /**
     * Remove specific ID from local storage.
     */
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
    /**
     * Receives favorites from local storage.
     * @returns Favorites
     */
    FavoritesManagerProvider.prototype.getFavorites = function () {
        var favoritesID = this.localStorage.Get('FavoritesIDs');
        return favoritesID;
    };
    /**
     *
     */
    FavoritesManagerProvider.prototype.removeAll = function () {
        this.setFavorites([]);
    };
    //#endregion
    //#region Private Methods
    /**
     * Settings favorite at local storage.
     * @param value The new value to set.
     */
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

},[384]);
//# sourceMappingURL=main.js.map