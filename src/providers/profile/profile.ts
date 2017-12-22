import { Injectable } from '@angular/core';
import { ProfileInterface } from './../../interface/Profile.interface';

@Injectable()
export class ProfileProvider {
  //#region Members
  public profile: ProfileInterface;
  public isLoggedIn: boolean = false;
  //#endregion

  //#region Constructor
  constructor() { }
  //#endregion

  //#region Public Methods
  public SetUserLoggedIn(newProfile: ProfileInterface) {
    this.profile = newProfile;
    this.isLoggedIn = true;
  }
  //#endregion
}
