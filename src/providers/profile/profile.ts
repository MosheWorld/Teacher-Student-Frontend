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
  /**
   * Setting teacher status boolean to true and adding the new profile data.
   * @param newProfile New profile.
   */
  public SetUserLoggedIn(newProfile: ProfileInterface) {
    this.profile = newProfile;
    this.isLoggedIn = true;
  }

  /**
   * Settings user as logged out.
   */
  public SetUserLoggedOut() {
    let demo: ProfileInterface;
    this.profile = demo;
    this.isLoggedIn = false;
  }
  //#endregion
}
