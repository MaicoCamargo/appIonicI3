import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeusPostPage } from './meus-post';

@NgModule({
  declarations: [
    MeusPostPage,
  ],
  imports: [
    IonicPageModule.forChild(MeusPostPage),
  ],
})
export class MeusPostPageModule {}
