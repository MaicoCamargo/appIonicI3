import {Component, OnInit} from '@angular/core';
import { AlertController, IonicPage, Loading, LoadingController, MenuController, NavController, } from 'ionic-angular';
import {PostModel} from "../../model/PostModel";
import {PostProvider} from "../../providers/post/postProvider";
import {AllPostsPage} from "../all-posts/all-posts";
import {MeusPostPage} from "../meus-post/meus-post";
import {NewPostPage} from "../new-post/new-post";
import {LoginPage} from "../login/login";

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage  implements OnInit{
  ngOnInit(): void {
  }

  loading: Loading;
  posts : PostModel[];

  constructor(public menu: MenuController, private _postService : PostProvider,
              private nav: NavController,private alertCtrl: AlertController,
              private loadingCtrl: LoadingController) {
  }

  logout(){
    sessionStorage.removeItem('logado');
    sessionStorage.clear();
    this.nav.setRoot(LoginPage);
  }



  limparPesquisa(){
    this.posts = null;
  }


  /**
   * redireciona para a pagina com todos os posts
   */
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
    this._postService.getPostPorHashTag(termoPesquisa).subscribe(retorno => {this.posts = retorno.json()});
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
