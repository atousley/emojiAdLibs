import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { FirebaseService } from '../services/firebase.service';
import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

import { LoginPage } from '../login/login';
import { MenuPage } from '../menu/menu';
import { AdlibDisplayPage } from '../adlib-display/adlib-display';

@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  validations_form: FormGroup;
  dateTime: string;

  toggled1: boolean = false;
  toggled2: boolean = false;
  toggled3: boolean = false;
  toggled4: boolean = false;
  toggled5: boolean = false;

  emojitext1: string;
  emojitext2: string;
  emojitext3: string;
  emojitext4: string;
  emojitext5: string;

  emojiData1: Object = {};
  emojiData2: Object = {};
  emojiData3: Object = {};
  emojiData4: Object = {};
  emojiData5: Object = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private firebaseService: FirebaseService
  ) {
  }

  goLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  goMenuPage(){
    this.navCtrl.push(MenuPage);
  }

  ionViewWillLoad(){
    this.resetFields()
  }

  resetFields(){
    this.validations_form = this.formBuilder.group({
      emoji1: new FormControl('', Validators.required),
      emoji2: new FormControl('', Validators.required),
      emoji3: new FormControl('', Validators.required),
      emoji4: new FormControl('', Validators.required),
      emoji5: new FormControl('', Validators.required)
    });
  }

  emojiSelection1(event) {
    this.emojitext1 = event.char;

     this.emojiData1 = {
      label: event.label,
      char: event.char
    }

    this.toggled1 = false;
    return this.emojiData1;
  }

  emojiSelection2(event) {
    this.emojitext2 = event.char;

     this.emojiData2 = {
      label: event.label,
      char: event.char
    }

    this.toggled2 = false;
    return this.emojiData2;
  }

  emojiSelection3(event) {
    this.emojitext3 = event.char;

     this.emojiData3 = {
      label: event.label,
      char: event.char
    }
    //console.log(this.emojiData3);
    this.toggled3 = false;
    return this.emojiData3;
  }

  emojiSelection4(event) {
    this.emojitext4 = event.char;

     this.emojiData4 = {
      label: event.label,
      char: event.char
    }
    //console.log(this.emojiData4);
    this.toggled4 = false;
    return this.emojiData4;
  }

  emojiSelection5(event) {
    this.emojitext5 = event.char;

     this.emojiData5 = {
      label: event.label,
      char: event.char
    }
    //console.log(this.emojiData5);
    this.toggled5 = false;
    return this.emojiData5;
  }

  onSubmit(value){
    //console.log(this.emojiData1);
    //console.log(this.emojiData2);

    this.dateTime = new Date();
    //console.log(this.dateTime);

    let data = {
      timestamp: this.dateTime,
      label1: this.emojiData1.label,
      char1: this.emojiData1.char,
      label2: this.emojiData2.label,
      char2: this.emojiData2.char,
      label3: this.emojiData3.label,
      char3: this.emojiData3.char,
      label4: this.emojiData4.label,
      char4: this.emojiData4.char,
      label5: this.emojiData5.label,
      char5: this.emojiData5.char
    }
    this.firebaseService.createAdLib(data)
    .then(
      res => {
        //console.log(res.id);
        this.navCtrl.push(AdlibDisplayPage, {
          data: res.id
        });
      }
    )
  }

}
