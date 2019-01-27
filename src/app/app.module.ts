import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { NewPage } from '../pages/new/new';

import { EmojiPickerModule } from '@ionic-tools/emoji-picker';

import { FirebaseService } from '../pages/services/firebase.service';
import { AuthService } from '../pages/services/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environment/environment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    NewPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    EmojiPickerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    LoginPage,
    RegisterPage,
    NewPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
