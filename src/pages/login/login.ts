import {Component, OnInit} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage, MenuController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {UsuarioModel} from "../../model/UsuarioModel";
import {PostModel} from "../../model/PostModel";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {PostProvider} from "../../providers/post/postProvider";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{
  ngOnInit(): void {
  }

  loading: Loading;
  posts : PostModel[];
  logando = new UsuarioModel();

  postar : boolean = false;

  novoPost = new PostModel();//obj do novo post

  constructor(public storage: Storage, public navCtrl: NavController,
               public menu: MenuController,private _postService : PostProvider, private _userService : UsuarioProvider,
               private nav: NavController,
               private alertCtrl: AlertController,
               private loadingCtrl: LoadingController) {
  }

  cadastraNovoPost(){
    console.log(this.novoPost);
    this._postService.realizarNovoPost(this.novoPost).subscribe(retorno => {
      if (retorno.ok){
        console.log("postado");
      }else {
        console.log('erro');
      }

    })

  }


  pesquisarHashTag(termoPesquisa){
    this._postService.getPostPorHashTag(termoPesquisa).subscribe(retorno => { this.posts = retorno.json()});
  }

  abreFormPost(){
    this.postar= !this.postar;
  }



  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }
  ionViewDidLeave() {
    // don't forget to return the swipe to normal, else all the pages won't be swiping to open menu
    this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }



  // desse jeito se chama uma pagina
  /*public createAccount() {
    this.nav.push(HomePage);
  }*/

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Espere um momento...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Ops!',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
