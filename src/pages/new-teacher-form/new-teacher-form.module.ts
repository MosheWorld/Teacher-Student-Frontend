import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewTeacherFormPage } from './new-teacher-form';

@NgModule({
  declarations: [
    NewTeacherFormPage,
  ],
  imports: [
    IonicPageModule.forChild(NewTeacherFormPage),
  ],
})
export class NewTeacherFormPageModule {}
