import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../services/firebase.service';


/**
 * Generated class for the AdlibDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adlib-display',
  templateUrl: 'adlib-display.html',
})
export class AdlibDisplayPage {

  adlibId: string;
  adlib1Data: Object = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseService: FirebaseService
  ) {
  }

  ionViewDidLoad() {
    this.getData();
  }

  getData(){
    this.adlibId = this.navParams.get('data');

    //console.log('NAV PARAMS' + " " + this.adlibId);

    this.firebaseService.getAdlib1Data(this.adlibId)
    .then(emojis => {
      this.adlib1Data = emojis;
      console.log(this.adlib1Data);
      //console.log(this.adlib1Data._document.data.internalValue.root);
      //console.log(this.adlib1Data._document.data.internalValue.root.value);

    })
  }

}
