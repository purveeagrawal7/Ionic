import { Component,ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CircleProgressComponent } from 'ng-circle-progress';

/**
 * Generated class for the NewpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpage',
  templateUrl: 'newpage.html',
})

export class NewpagePage {
  @ViewChildren(CircleProgressComponent) ngCircles: QueryList<CircleProgressComponent> 

  //percentage = 50;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpagePage');
  }

  increment_percent() {
    console.log(this.ngCircles.toArray()[0].options.percent);
    this.ngCircles.toArray()[0].options.percent = this.ngCircles.toArray()[0].options.percent+10;
    this.ngCircles.toArray()[0].render();
  }

}
