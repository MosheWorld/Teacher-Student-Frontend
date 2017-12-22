import { Injectable } from '@angular/core';
import { LocalStorageProvider } from './../../providers/local-storage/local-storage';
import 'rxjs/add/operator/map';

@Injectable()
export class FavoritesManagerProvider {

  //#region Constructor
  constructor(public localStorage: LocalStorageProvider) {
  }
  //#endregion

  //#region Public Methods
  public addID(id: string): any {
    if (id == null || id === "") {
      return false;
    }
    if (this.isIDExist(id)) {
      return false;
    }

    let favoritesList: any = this.getFavorites();
    if (favoritesList == null) {
      favoritesList = [];
    }
    favoritesList.push(id);
    this.setFavorites(favoritesList);
  }

  public isIDExist(id: string): boolean {
    let favoritesList: any = this.getFavorites();
    if (favoritesList == null) {
      return false;
    }

    for (let favorite of favoritesList) {
      if (favorite === id) {
        return true;
      }
    }
    return false;
  }

  public removeID(id: string): any {
    let favoritesList: any = this.getFavorites();

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
  }

  public getFavorites(): any {
    let favoritesID = this.localStorage.Get('FavoritesIDs');
    return favoritesID;
  }

  public removeAll(): void {
    this.setFavorites([]);
  }
  //#endregion

  //#region Private Methods
  private setFavorites(value: any): void {
    this.localStorage.Set('FavoritesIDs', value);
  }
  //#endregion
}
