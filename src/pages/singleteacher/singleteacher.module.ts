import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleteacherPage } from './singleteacher';

@NgModule({
  declarations: [
    SingleteacherPage,
  ],
  imports: [
    IonicPageModule.forChild(SingleteacherPage),
  ],
})
export class SingleteacherPageModule {}
