import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SearchPage } from './../search/search';
import { SettingsPage } from './../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage {
  //#region Members
  tab1Root = HomePage;
  tab2Root = SearchPage;
  tab3Root = SettingsPage;
  //#endregion

  //#region Constructor
  constructor() {
  }
  //#endregion
}
