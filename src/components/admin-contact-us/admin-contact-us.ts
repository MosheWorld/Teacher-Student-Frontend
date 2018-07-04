import { Component } from '@angular/core';
import { ApiProvider } from '../../providers/api/api';
import { ContactUsInterface } from '../../interface/ContactUs.interface';

@Component({
  selector: 'admin-contact-us',
  templateUrl: 'admin-contact-us.html'
})

export class AdminContactUsComponent {
  //#region Members
  public step = 0;
  public contactUsList: ContactUsInterface[];
  //#endregion

  //#region Constructor
  public constructor(public apiProvider: ApiProvider) {
    this.getContactUsist();
  }
  //#endregion

  //#region Public Methods
  public setStep(index: number): void {
    this.step = index;
  }

  public nextStep(): void {
    this.step++;
  }

  public prevStep(): void {
    this.step--;
  }
  //#endregion

  //#region Private Methods
  private getContactUsist(): void {
    debugger;
    this.apiProvider.httpGet("contactus/getall")
      .subscribe(
        (response: any) => {
          this.contactUsList = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //#endregion
}
