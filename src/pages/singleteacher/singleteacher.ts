import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-singleteacher',
  templateUrl: 'singleteacher.html',
})

export class SingleteacherPage {
  public teacher;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.teacher = this.navParams.get('teacher');
  }

  public dismiss() {
    this.viewCtrl.dismiss();
  }
}
