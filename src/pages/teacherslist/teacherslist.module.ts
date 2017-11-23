import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeacherslistPage } from './teacherslist';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
  declarations: [
    //TeacherslistPage,
  ],
  imports: [
    IonicPageModule.forChild(TeacherslistPage),
  ],
  exports:[
    MatMenuModule
  ]
})
export class TeacherslistPageModule {}
