import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})

export class ContactusPage {
  public fullName: string;
  public email: string;
  public contactReason: string;
  public message: string;
  public showErrorMessage: boolean = false;;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public isFormValid() {
    if (this.fullname == null ||
      this.fullname === "" ||
      this.email == null ||
      this.email === "" ||
      this.contactReason == null ||
      this.contactReason === "" ||
      this.message == null ||
      this.message === ""
    ) {
      return false;
    }
    else {
      return true;
    }
  }

  public sendContactUsForm() {
    this.setErrorMessage(false);
    if (!this.isFormValid()) {
      this.setErrorMessage(true);
      return;
    }

    console.log("Passed");
  }

  public clearContactUsForm() {
    this.setErrorMessage(false);
    this.fullname = "";
    this.email = "";
    this.contactReason = "";
    this.message = "";
  }

  private setErrorMessage(set: boolean) {
    this.showErrorMessage = set;
  }
}
