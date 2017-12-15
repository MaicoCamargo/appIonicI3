import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Infraestrutura } from './app.component';
import { Camera } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import {PostProvider} from "../providers/post/postProvider";
import {UsuarioProvider} from "../providers/usuario/usuario";


@NgModule({
  declarations: [
    Infraestrutura,


  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(Infraestrutura),
    IonicStorageModule.forRoot({
      name: '__mydb', driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Infraestrutura,


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    ImagePicker,
    {provide:ErrorHandler, useClass: IonicErrorHandler},
      PostProvider,UsuarioProvider
  ]
})
export class AppModule {}
