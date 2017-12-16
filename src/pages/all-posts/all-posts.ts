import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PostProvider} from "../../providers/post/postProvider";
import {PostModel} from "../../model/PostModel";

/**
 * Generated class for the AllPostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-posts',
  templateUrl: 'all-posts.html',
})
export class AllPostsPage implements OnInit{

  todosPosts : PostModel;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _postService : PostProvider) {}

  ngOnInit(): void {
    this._postService.allPosts().subscribe( retorno => this.todosPosts = retorno.json());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPostsPage');
  }

}
