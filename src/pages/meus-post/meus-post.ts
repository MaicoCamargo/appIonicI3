import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostProvider} from "../../providers/post/postProvider";
import {PostModel} from "../../model/PostModel";

/**
 * Generated class for the MeusPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meus-post',
  templateUrl: 'meus-post.html',
})
export class MeusPostPage {

  meuPost : PostModel;
  constructor(public navCtrl: NavController, public navParams: NavParams,
                private _postService : PostProvider) {
  }

  buscarPostPorIdentificador(identificador){
    this._postService.getPostPorIdentificador(identificador).subscribe(retorno => this.meuPost = retorno.json())
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusPostPage');
  }

}
