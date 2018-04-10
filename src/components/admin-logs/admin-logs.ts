import { Component } from '@angular/core';
import { PageEvent } from '@angular/material';

import { ApiProvider } from './../../providers/api/api';
import { LogsInterface } from './../../interface/Logs.interface';

@Component({
  selector: 'admin-logs',
  templateUrl: 'admin-logs.html'
})

export class AdminLogsComponent {
  //#region Members
  public logs: LogsInterface[];

  public debugCheckBox = false;
  public infoCheckBox = false;
  public errorCheckBox = true;

  public step = 0;
  public length = 100;
  public pageSize = 10;
  public pageSizeOptions = [5, 10, 25, 100];

  public pageEvent: PageEvent;
  //#endregion

  //#region Constructor
  public constructor(public apiProvider: ApiProvider) { this.getLogsCount(); this.getLogs(this.pageSize, 0); }
  //#endregion

  //#region Public Methods
  /**
   * Emitter has been activated and we will get new page.
   * @param  
   */
  public emitNewPage($event): void {
    this.setStep(-1);
    this.getLogs($event.pageSize, $event.pageIndex);
  }

  public setStep(index: number): void {
    this.step = index;
  }

  public nextStep(): void {
    this.step++;
  }

  public prevStep(): void {
    this.step--;
  }
  //#endregion

  //#region Private Methods
  /**
   * Gets logs from server by amount and page number.
   * @param amount 
   * @param pageNumber 
   */
  private getLogs(amount: number, pageNumber: number): void {
    this.apiProvider.httpGet("log/getbyamountandpage/" + amount + "/" + pageNumber)
      .subscribe(
        (logsReceived: any) => {
          this.logs = logsReceived;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  /**
   * Receives logs amount from backend.
   */
  private getLogsCount(): void {
    this.apiProvider.httpGet("log/getlogscount")
      .subscribe(
        (response: any) => {
          this.length = response.count;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  //#endregion
}
