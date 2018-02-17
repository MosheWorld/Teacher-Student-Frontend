import isEmail from 'validator/lib/isEmail';
import { ImageCompressService } from 'ng2-image-compress';
import { ErrorStateMatcher } from '@angular/material/core';
import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform } from 'ionic-angular';

import { ApiProvider } from './../../providers/api/api';
import { Alert } from 'ionic-angular/components/alert/alert';
import { CommonProvider } from './../../providers/common/common';
import { ProfileProvider } from './../../providers/profile/profile';
import { Navigationer } from './../../common/Navigationer';
import { PageType } from './../../common/PageType.Enum';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@IonicPage()
@Component({
  selector: 'page-new-teacher-form',
  templateUrl: 'new-teacher-form.html',
})

export class NewTeacherFormPage {
  //#region Members
  public pageEnum = PageType;
  public navigationer: Navigationer;

  public lastNameFormControl = new FormControl(null, [Validators.required]);
  public firstNameFormControl = new FormControl(null, [Validators.required]);
  public teachesAtFormControl = new FormControl(null, [Validators.required]);
  public genderAtFormControl = new FormControl(null, [Validators.required]);
  public teachesSubjectsFormControl = new FormControl(null, [Validators.required]);
  public teachesInstitutionsFormControl = new FormControl(null, [Validators.required]);
  public emailFormControl = new FormControl(null, [Validators.required, Validators.email]);
  public phoneFormControl = new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(10)]);
  public personalMessageFormControl = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]);
  public ageFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(16), Validators.max(120)]);
  public toPriceFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(1), Validators.max(200)]);
  public fromPriceFormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(3), Validators.min(1), Validators.max(200)]);

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
  constructor(
    public rd: Renderer2,
    public platform: Platform,
    public navParams: NavParams,
    public navCtrl: NavController,
    public apiProvider: ApiProvider,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public commonProvider: CommonProvider,
    public profileProvider: ProfileProvider
  ) {
    this.navigationer = new Navigationer(this.navCtrl, this.profileProvider);

    // We take minutes 20 in the calculation to take the padding at calculation.
    this.imageWidth = platform.width() - 20;
    this.imageHeight = platform.width() - 20;

    this.initInputs();
  }
  //#endregion

  //#region Public Methods
  /**
   * Creates new teacher interface and sends it to back-end.
   */
  public createTeacher(): void {
    this.showErrorMessage = false;
    this.showErrorMessagePrices = false;

    this.convertStringToInteger();
    if (!this.isModelValid()) {
      this.showErrorMessage = true;
      return;
    }

    let newTeacherData = this.createNewTeacherDataJson();

    const loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Sending information, please wait...'
    });
    loading.present();

    this.apiProvider.httpPost('teacher/create', newTeacherData)
      .subscribe(
        (success) => {
          loading.dismiss();
          const alert = this.createAlert('Welcome new teacher', 'Your account has been created successfully, this is your teacher page, thank you and good luck.');
          alert.present();
          this.navigationer.navigateToPage(this.pageEnum.TeacherDetails);
        },
        (failure) => {
          loading.dismiss();
          const alert = this.createAlert('Something went wrong', 'Please try again later, we have some server issues.');
          alert.present();
        }
      );
  }

  /**
   * Rotate base64 image to right or left.
   * @param base64Image Image string in base64.
   * @param isClockwise Which clock direction to rotate the image.
   */
  public rotateBase64Image90deg(base64Image, isClockwise): void {
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
    } else {
      offScreenCanvasCtx.rotate(-90 * Math.PI / 180);
      offScreenCanvasCtx.translate(-offScreenCanvas.height, 0);
    }
    offScreenCanvasCtx.drawImage(img, 0, 0);

    this.image = offScreenCanvas.toDataURL("image/jpeg", 100);
  }

  /**
   * Reads image in base64 and use compression algorithm to make it smaller.
   * @param $event Angular event.
   */
  public readImageBase64($event): void {
    ImageCompressService.filesToCompressedImageSource($event.target.files).
      then((observableImages) => {
        observableImages.subscribe((compressedObject) => {
          this.image = compressedObject.compressedImage.imageDataUrl;
        }, (error) => {
          console.log("Error while converting image.");
        });
      });
  }

  /**
   * Clears the image.
   */
  public clearImage(): void {
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
  /**
   * Convert from strings to integers to send it to backend in proper form.
   */
  private convertStringToInteger(): void {
    if (this.fromPriceFormControl.valid) { this.fromPriceFormControl.setValue(parseInt(this.fromPriceFormControl.value)); }
    if (this.toPriceFormControl.valid) { this.toPriceFormControl.setValue(parseInt(this.toPriceFormControl.value)); }
    if (this.ageFormControl.valid) { this.ageFormControl.setValue(parseInt(this.ageFormControl.value)); }
  }

  /**
   * Validates whether the model is valid.
   */
  private isModelValid(): boolean {
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

  /**
   * Validates whether string is null or empty.
   * @param str Given string.
   */
  private isStringNullOrEmpty(str: string): boolean {
    if (str == null || str === "") {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Creates all inputs data in JSON format to send it to backend.
   */
  private createNewTeacherDataJson(): any {
    this.teachesInstitutionsFormControl.value.forEach((value, index) => {
      this.teachesInstitutionsFormControl.value[index] = parseInt(value.toString());
    });
    this.teachesSubjectsFormControl.value.forEach((value, index) => {
      this.teachesSubjectsFormControl.value[index] = parseInt(value.toString());
    });

    let newTeacher = {
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
  }

  /**
   * Creates ionic alert.
   * @param titleInput Title for the message.
   * @param subTitleInput Sub-Title for the message.
   */
  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });

    return alert;
  }

  /**
   * Checking all inputs if they are not empty.
   * @returns {boolean}
   */
  private isFormsValid(): boolean {
    if (
      !this.ageFormControl.valid ||
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
    } else {
      return true;
    }
  }

  /**
   * Checking all inputs if they are not empty.
   * @returns {boolean}
   */
  private isFormsNullOrEmpty(): boolean {
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

  /**
   * Validates whether the phone number is valid.
   * @returns {boolean}
   */
  private isPhoneValid(phone: string): boolean {
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
        this.phoneFormControl.setErrors({ "badphonenumber": true });
        return false;
      }
    }
  }

  /**
   * Initialize inputs at HTML from profile of facebook or google API.
   */
  private initInputs(): void {
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
  }
  //#endregion
}
