import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseService } from '../services/firebase.service';
import { AuthService } from '../services/auth.service';

import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';

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
  adlib1Data: any;

  toggled1: boolean = false;
  toggled2: boolean = false;
  toggled3: boolean = false;
  toggled4: boolean = false;
  toggled5: boolean = false;

  emojitext1: string = "emoji1";
  emojitext2: string = "emoji2";
  emojitext3: string = "emoji3";
  emojitext4: string = "emoji4";
  emojitext5: string = "emoji5";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseService: FirebaseService,
    private authService: AuthService
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
      //console.log(emojis);

      this.adlib1Data = emojis;
      console.log(this.adlib1Data);

      //console.log(this.adlib1Data._document.data.internalValue.root);
      //console.log(this.adlib1Data._document.data.internalValue.root.value);
    })
  }

  setEmojiText(){

  }

  goMenuPage(){
    this.navCtrl.push(MenuPage);
  }

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.push(HomePage);
    })
  }

}
