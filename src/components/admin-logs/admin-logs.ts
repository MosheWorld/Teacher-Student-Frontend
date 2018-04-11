import { Component, ViewChild } from '@angular/core';
import { PageEvent, MatPaginator } from '@angular/material';

import { ApiProvider } from './../../providers/api/api';
import { Alert } from 'ionic-angular/components/alert/alert';
import { LogsInterface } from './../../interface/Logs.interface';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

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
  @ViewChild(MatPaginator) paginator: MatPaginator;
  //#endregion

  //#region Constructor
  public constructor(
    public apiProvider: ApiProvider,
    public alertCtrl: AlertController
  ) {
    this.getLogsCount();
    this.getLogs(this.pageSize, 0);
  }
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

  public checkBoxChanged(): void {
    setTimeout(() => {
      this.paginator.pageIndex = 0;
      this.paginator.pageSize = this.pageSize;
      this.getLogs(this.pageSize, 0);
    }, 100);
  }
  //#endregion

  //#region Private Methods
  /**
   * Gets logs from server by amount and page number.
   * @param amount 
   * @param pageNumber 
   */
  private getLogs(amount: number, pageNumber: number): void {

    if (!this.isLogSearchValid(amount, pageNumber, this.debugCheckBox, this.infoCheckBox, this.errorCheckBox)) {
      this.createAlert("Bad inputs", "You must select at least one of 'Debug', 'Info', 'Error'.");
      return;
    }

    let query: string = this.getLogsQuery(amount, pageNumber);

    this.apiProvider.httpGet(query)
      .subscribe(
        (logsReceived: any) => {
          this.logs = logsReceived;
        },
        (error) => {
          this.createAlert("Opss...", "Something went wrong when trying to get logs.");
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
          this.createAlert("Opss...", "Something went wrong when trying to get logs count.");
        }
      );
  }

  /**
   * Builds query for logs search.
   * @param amount 
   * @param pageNumber 
   */
  private getLogsQuery(amount: number, pageNumber: number): string {
    let query: string = "log/getbyamountandpage/" + amount + "/" + pageNumber;

    if (this.debugCheckBox === true) {
      query += "/true";
    } else {
      query += "/false";
    }

    if (this.infoCheckBox === true) {
      query += "/true";
    } else {
      query += "/false";
    }

    if (this.errorCheckBox === true) {
      query += "/true";
    } else {
      query += "/false";
    }

    return query;
  }

  /**
   * Validates parameters before search for logs.
   * @param amount 
   * @param pageNumber 
   * @param debug 
   * @param info 
   * @param error 
   */
  private isLogSearchValid(amount: number, pageNumber: number, debug: boolean, info: boolean, error: boolean): boolean {
    if (amount < 1
      || pageNumber < 0
      || (debug === false && info === false && error === false)) {
      return false;
    } else {
      return true;
    }
  }

  /**
   * Creates ionic alert.
   * @param titleInput Title for the message.
   * @param subTitleInput Sub-Title for the message.
   */
  private createAlert(titleInput: string, subTitleInput: string): Alert {
    const alert = this.alertCtrl.create({
      title: titleInput,
      subTitle: subTitleInput,
      buttons: ['Ok']
    });
    alert.present();
    return alert;
  }
  //#endregion
}
