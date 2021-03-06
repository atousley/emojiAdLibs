import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { NewPage } from '../new/new';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})

export class MenuPage {

  constructor(
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ionViewWillEnter(){
    //this.getData();
  }

  //getData(){}

  logout(){
    this.authService.doLogout()
    .then(res => {
      this.navCtrl.push(HomePage);
    })
  }

  goNewPage(){
    this.navCtrl.push(NewPage);
  }

}
