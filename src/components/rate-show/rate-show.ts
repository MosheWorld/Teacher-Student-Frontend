import { Component, Input } from '@angular/core';

@Component({
  selector: 'rate-show',
  templateUrl: 'rate-show.html'
})

export class RateShowComponent {
  //#region Members
  @Input() stars: number;
  //#endregion

  //#region Constructor
  constructor() {
  }
  //#endregion
}
