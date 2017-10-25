import { Http, Headers } from '@angular/http';
import { Injectable, NgModule } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiProvider {
  private endPoint: string = "http://localhost:8000/";

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

  private checkResultModel(res: any) {
    try {
      let dataCovertedToJson = res.json();
      return dataCovertedToJson;
    } catch (ex) {
      return null;
    }
  }
}
