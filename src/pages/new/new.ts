import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EmojiPickerModule } from '@ionic-tools/emoji-picker';


@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {

  toggled: boolean = false;
  emojitext: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
  }

  handleSelection(event) {
    this.emojitext = event.label + " " + event.char;
    this.toggled = false;
  }

}
