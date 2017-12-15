import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostModel} from "../../model/PostModel";
import {PostProvider} from "../../providers/post/postProvider";

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
export class NewPostPage {

  novoPost = new PostModel();//obj do novo post
  constructor(public navCtrl: NavController, public navParams: NavParams, private _servicePost : PostProvider) {
  }



  cadastraNovoPost(){
    console.log(this.novoPost);
    this._servicePost.realizarNovoPost(this.novoPost).subscribe(retorno => {
      if (retorno.ok){
        console.log("postado");
      }else {
        console.log('erro');
      }

    })

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

}
