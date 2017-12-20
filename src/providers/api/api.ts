import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  //#region Members
  // public endPoint: string = "http://localhost:8000/";
  public endPoint: string = "https://teacher-student-backend.herokuapp.com/";
  //#endregion

  //#region Constructor
  constructor(public http: Http) {
  }
  //#endregion

  //#region Public Methods
  public httpGet(path: string) {
    const url = this.endPoint + path;
    return this.http.get(url, null).map(res => this.checkResultModel(res));
  }

  public httpPost(path: string, data: any) {
    const url = this.endPoint + path;
    let header = this.buildHeader();
    return this.http.post(url, JSON.stringify(data), { headers: header }).map(res => this.checkResultModel(res));
  }
  //#endregion

  //#region Private Methods
  private buildHeader() {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  private checkResultModel(result: any) {
    try {
      let dataCovertedToJson = result.json();
      return dataCovertedToJson;
    } catch (ex) {
      return null;
    }
  }
  //#endregion
}
