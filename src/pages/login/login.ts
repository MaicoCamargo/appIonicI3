import {Component, OnInit} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage, MenuController} from 'ionic-angular';

import { Storage } from '@ionic/storage';
import {UsuarioModel} from "../../model/UsuarioModel";
import {PostModel} from "../../model/PostModel";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {PostProvider} from "../../providers/post/postProvider";
import {NewPostPage} from "../new-post/new-post";
import {MeusPostPage} from "../meus-post/meus-post";
import {AllPostsPage} from "../all-posts/all-posts";

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

  constructor(public storage: Storage, public navCtrl: NavController,
               public menu: MenuController,private _postService : PostProvider,
               private _userService : UsuarioProvider, private nav: NavController,
               private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  pageAllPost(){

    this.nav.push(AllPostsPage);
  }


  /**
   * encaminha para a pagina com o campo para buscar um post_
   */
  pageVerMeuPost(){
    this.nav.push(MeusPostPage);
  }

  pesquisarHashTag(termoPesquisa){
    this._postService.getPostPorHashTag(termoPesquisa).subscribe(retorno => { this.posts = retorno.json()});
  }

  /**
   * navega para a pagina que tera sera realizado o post_
   */
  public novoPost(){
    this.nav.push(NewPostPage);
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
