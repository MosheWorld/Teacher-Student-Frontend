import isEmail from 'validator/lib/isEmail';
import { ImageCompressService } from 'ng2-image-compress';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { CommonProvider } from './../../providers/common/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@IonicPage()
@Component({
  selector: 'page-jointeacher',
  templateUrl: 'jointeacher.html',
})

export class JointeacherPage {
  //#region Members
  public firstNameFormControl = new FormControl(null, [Validators.required]);
  public lastNameFormControl = new FormControl(null, [Validators.required]);
  public emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  public phoneFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]);
  public personalMessageFormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]);
  public toPriceFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(1), Validators.max(200)]);
  public fromPriceFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(1), Validators.max(200)]);
  public teachesAtFormControl = new FormControl(null, [Validators.required]);
  public ageFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(16), Validators.max(120)]);
  public genderAtFormControl = new FormControl(null, [Validators.required]);
  public teachesInstitutionsFormControl = new FormControl(null, [Validators.required]);
  public teachesSubjectsFormControl = new FormControl(null, [Validators.required]);

  public image: String = null;
  public matcher = new MyErrorStateMatcher();

  public showErrorMessagePrices: boolean = false;
  public showErrorMessage: boolean = false;
  @ViewChild('inputImage') el: ElementRef;
  @ViewChild('viewImage') elViewImage: ElementRef;

  public imageWidth: number;
  public imageHeight: number;
  //#endregion

  //#region Constructor
  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public rd: Renderer2,
    public platform: Platform, public commonProvider: CommonProvider) {

    // We take minutes 20 in the calculation to take the padding at calculation.
    this.imageWidth = platform.width() - 20;
    this.imageHeight = platform.width() - 20;
  }
  //#endregion

  //#region Public Methods
  public createTeacher() {
    this.showErrorMessage = false;
    this.showErrorMessagePrices = false;

    this.convertStringToInteger();
    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let newTeacherData = this.createNewTeacherDataJson();

    const loading = this.loadingCtrl.create({
      content: 'Sending information, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/create', newTeacherData)
      .subscribe(
      (success) => {
        loading.dismiss();
        const alert = this.createAlert('Welcome new teacher', 'Your account has been created successfully, this is your teacher page, thank you and good luck.');
        alert.present();
      },
      (failure) => {
        loading.dismiss();
        const alert = this.createAlert('Something went wrong', 'Please try again later, we have some server issues.');
        alert.present();
      }
      );
  }

  public readImageBase64($event) {
    ImageCompressService.filesToCompressedImageSource($event.target.files).
      then((observableImages) => {
        observableImages.subscribe((compressedObject) => {
          this.image = compressedObject.compressedImage.imageDataUrl;
        }, (error) => {
          console.log("Error while converting image.");
        });
      });
  }

  public clearImage() {
    if (this.image && this.image.length > 0) {
      this.rd.removeClass(this.elViewImage.nativeElement, "flash");
      this.rd.addClass(this.elViewImage.nativeElement, "fadeOutLeft");
      setTimeout(() => {
        this.image = null;
        this.el.nativeElement.value = "";
      }, 1000);
    }
  }
  //#endregion

  //#region Private Methods
  private convertStringToInteger() {
    if (this.fromPriceFormControl.valid) { this.fromPriceFormControl.setValue(parseInt(this.fromPriceFormControl.value)); }
    if (this.toPriceFormControl.valid) { this.toPriceFormControl.setValue(parseInt(this.toPriceFormControl.value)); }
    if (this.ageFormControl.valid) { this.ageFormControl.setValue(parseInt(this.ageFormControl.value)); }
  }

  private isModelValid() {
    if (!this.isFormsValid() ||
      this.isFormsNullOrEmpty() ||
      this.fromPriceFormControl.value > this.toPriceFormControl.value ||
      !this.isPhoneValid(this.phoneFormControl.value) ||
      !isEmail(this.emailFormControl.value) ||
      this.teachesInstitutionsFormControl.value == null || this.teachesInstitutionsFormControl.value.length === 0 ||
      this.teachesSubjectsFormControl.value == null || this.teachesSubjectsFormControl.value.length === 0) {
      if (this.fromPriceFormControl.value > this.toPriceFormControl.value) {
        this.showErrorMessagePrices = true;
      }
      return false;
    } else {
      return true;
    }
  }

  private isStringNullOrEmpty(str: string) {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
    }
  }

  private createNewTeacherDataJson() {
    this.teachesInstitutionsFormControl.value.forEach((value, index) => {
      this.teachesInstitutionsFormControl.value[index] = parseInt(value.toString());
    });
    this.teachesSubjectsFormControl.value.forEach((value, index) => {
      this.teachesSubjectsFormControl.value[index] = parseInt(value.toString());
    });

    let newTeacher = {
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
  }

  private createAlert(titleInput: string, subTitleInput: string) {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    return alert;
  }

  private isFormsValid() {
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
    } else {
      return true;
    }
  }

  private isFormsNullOrEmpty() {
    if (this.isStringNullOrEmpty(this.firstNameFormControl.value) ||
      this.isStringNullOrEmpty(this.lastNameFormControl.value) ||
      this.isStringNullOrEmpty(this.emailFormControl.value) ||
      this.isStringNullOrEmpty(this.phoneFormControl.value) ||
      this.isStringNullOrEmpty(this.personalMessageFormControl.value)) {
      return true;
    } else {
      return false;
    }
  }

  private isPhoneValid(phone: string) {
    if (this.isStringNullOrEmpty(phone) || phone.length < 9) {
      return false;
    } else {
      if (phone.substring(0, 1) === "0") {
        return true;
      } else if (phone.substring(0, 3) === "972") {
        return true;
      } else if (phone.substring(0, 4) === "+972") {
        return true;
      } else {
        this.phoneFormControl.setErrors({"badphonenumber":true});
        return false;
      }
    }
  }
  //#endregion
}
