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
  /**
   * HTTP Get function.
   * @param path What path to add to call.
   */
  public httpGet(path: string): any {
    const url = this.endPoint + path;
    return this.http.get(url, null)
      .map(res => this.checkResultModel(res));
  }

  /**
   * HTTP Post function.
   * @param path What path to add to call.
   * @param data Data to send.
   */
  public httpPost(path: string, data: any): any {
    const url = this.endPoint + path;
    let header = this.buildHeader();

    return this.http.post(url, JSON.stringify(data), { headers: header })
      .map(res => this.checkResultModel(res));
  }
  //#endregion

  //#region Private Methods
  /**
   * Builds headers for API request.
   * @returns {Headers} The new header.
   */
  private buildHeader(): Headers {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    return headers;
  }

  /**
   * Inspect what has been returned from backend.
   * @param result The data from backend.
   * @returns Returns formatted JSON or nothing, according to function algorithm.
   */
  private checkResultModel(result: any): any {
    try {
      let dataCovertedToJson = result.json();
      return dataCovertedToJson;
    } catch (ex) {
      return null;
    }
  }
  //#endregion
}
