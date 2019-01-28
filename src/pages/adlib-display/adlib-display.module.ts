import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdlibDisplayPage } from './adlib-display';

@NgModule({
  declarations: [
    AdlibDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(AdlibDisplayPage),
  ],
})
export class AdlibDisplayPageModule {}
