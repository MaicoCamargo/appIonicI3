import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostModel} from "../../model/PostModel";
import {PostProvider} from "../../providers/post/postProvider";
import {UsuarioModel} from "../../model/UsuarioModel";
import {MeusPostPage} from "../meus-post/meus-post";
import {Camera, CameraOptions} from "@ionic-native/camera";

/**
 * Generated class for the NewPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage implements OnInit{
  usuarioSession = new UsuarioModel();
  novoPost = new PostModel();//obj do novo post_
  constructor(public navCtrl: NavController, public navParams: NavParams, private _servicePost : PostProvider,
              private alertCtrl: AlertController,private camera: Camera) {}

  takePhoto() {
    const options : CameraOptions = {
      quality: 60, // picture quality
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then((imageData) => {
      this.novoPost.imagem = "data:image/jpeg;base64," + imageData;
      console.log("String da imagem"+ this.novoPost.imagem);
    }, (err) => {
      console.log(err);
    });

  }

  openGallery() {

    const options : CameraOptions = {
      quality: 60, // picture quality
      correctOrientation: true,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }
    this.camera.getPicture(options).then((imageData) => {
      this.novoPost.imagem = "data:image/jpeg;base64," + imageData;

    }, (err) => {
      console.log(err);
    });
  }

  cadastraNovoPost(){
    this.novoPost.usuario = this.usuarioSession;//pega o usuario logado
    console.log(this.novoPost);
    this._servicePost.realizarNovoPost(this.novoPost).subscribe(retorno => {
      if (retorno.ok){
        let alert = this.alertCtrl.create({
          title: 'Ok...!',
          subTitle: 'Post realizado',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(MeusPostPage);
      }else {
        let alert = this.alertCtrl.create({
          title: 'Ops...!',
          subTitle: 'Post não realizado, tente novamente',
          buttons: ['OK']
        });
        alert.present();
      }

    })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  ngOnInit(): void {
    this.usuarioSession = JSON.parse(sessionStorage.getItem('logado'));
  }

}
