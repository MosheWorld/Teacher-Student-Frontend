import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTeacherLoginPage } from './new-teacher-login';

@NgModule({
  declarations: [
    NewTeacherLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTeacherLoginPage),
  ],
})
export class NewTeacherLoginPageModule {}
