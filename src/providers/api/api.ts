import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  // private endPoint: string = "http://localhost:8000/";
  private endPoint: string = "https://teacher-student-backend.herokuapp.com/";

  constructor(public http: Http) {

  }

  public httpGet(path: string) {
    const url = this.endPoint + path;
    return this.http.get(url, null).map(res => this.checkResultModel(res));
  }

  public httpPost(path: string, data: any) {
    const url = this.endPoint + path;
    let header = this.buildHeader();
    return this.http.post(url, JSON.stringify(data), { headers: header }).map(res => this.checkResultModel(res));
  }

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
}
