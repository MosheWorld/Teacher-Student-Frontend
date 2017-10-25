import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpProvider {
  private endPoint: string = "";

  constructor(public http: Http) {
  }

  public httpGet(path: string) {
    const url = this.endPoint + path;
    this.http.get(url, {})
      .subscribe(
      success => { return success; },
      failure => { return failure; }
      );
  }
}
