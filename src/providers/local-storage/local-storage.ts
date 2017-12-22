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
  public Set(key: string, value: any): void {
    this.localStorageService.set(key, value);
  }

  public Get(key: string): any {
    return this.localStorageService.get(key);
  }

  public Remove(key: string): void {
    this.localStorageService.remove(key);
  }
  //#endregion
}
