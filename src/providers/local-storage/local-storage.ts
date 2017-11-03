import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import 'rxjs/add/operator/map';

@Injectable()
export class LocalStorageProvider {

  constructor(public localStorageService: LocalStorageService) {
  }

  public Set(key: string, value: any) {
    this.localStorageService.set(key, value);
  }

  public Get(key: string) {
    return this.localStorageService.get(key);
  }

  public Remove(key: string) {
    this.localStorageService.remove(key);
  }
}
