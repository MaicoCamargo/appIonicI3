import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms"
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Whisper } from './app.component';
import { Camera } from "@ionic-native/camera";
import { ImagePicker } from "@ionic-native/image-picker";
import { HttpModule } from "@angular/http";
import { IonicStorageModule } from '@ionic/storage';
import {PostProvider} from "../providers/post/postProvider";
import {UsuarioProvider} from "../providers/usuario/usuario";
import {MeusPostPage} from "../pages/meus-post/meus-post";
import {NewPostPage} from "../pages/new-post/new-post";
import {AllPostsPage} from "../pages/all-posts/all-posts";
import {HomePage} from "../pages/home/home";
import {LoginPage} from "../pages/login/login";
import {RegistrarSerPage} from "../pages/registrar-ser/registrar-ser";


@NgModule({
  declarations: [
    Whisper,
    MeusPostPage,
    NewPostPage,
    AllPostsPage,
    HomePage,
    RegistrarSerPage

  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(Whisper),
    IonicStorageModule.forRoot({
      name: '__mydb', driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Whisper,
    MeusPostPage,
    NewPostPage,
    AllPostsPage,
    HomePage,
    RegistrarSerPage


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
