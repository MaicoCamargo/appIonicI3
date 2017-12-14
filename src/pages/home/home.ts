import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {PostProvider} from "../../providers/post/postProvider";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nav : NavController, private _postService : PostProvider) {

  }

  pesquisarHashTag(termoPesquisa){
    this._postService.getPostPorHashTag(termoPesquisa).subscribe(response => console.log(response));
  }

}
