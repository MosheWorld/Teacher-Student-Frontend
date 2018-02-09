import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

@Injectable()
export class LocalStorageProvider {

  //#region Constructor
  constructor(public localStorageService: LocalStorageService) {
  }
  //#endregion

  //#region Public Methods
  /**
   * Settings new value at local storage.
   * @param key Key in local storage.
   * @param value Value in local storage according to Key.
   */
  public Set(key: string, value: any): void {
    this.localStorageService.set(key, value);
  }

  /**
   * Receive value from localstorage according to given Key.
   * @param key Key in local storage.
   */
  public Get(key: string): any {
    return this.localStorageService.get(key);
  }

  /**
   * Removes value from local storage according to given Key.
   * @param key Key in local storage.
   */
  public Remove(key: string): void {
    this.localStorageService.remove(key);
  }
  //#endregion
}
