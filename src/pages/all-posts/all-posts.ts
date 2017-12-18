import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostProvider} from "../../providers/post/postProvider";
import {PostModel} from "../../model/PostModel";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {UsuarioModel} from "../../model/UsuarioModel";
import {ComentarioModel} from "../../model/ComentarioModel";

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
  logando : UsuarioModel = new UsuarioModel();
  usuarioSession : UsuarioModel = new UsuarioModel();
  comentario : string;
  cardComentar : boolean = false;
  comentarioPost =new ComentarioModel();


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _postService : PostProvider, private alertCtrl : AlertController,
              private _usuarioService : UsuarioProvider) {}

  comentarPost(idPost){
    this.cardComentar= !this.cardComentar;
    this.comentarioPost.post.idPost = idPost;
    this._postService.getComentario(this.comentarioPost).subscribe(retorno => {

      if (retorno.ok){
        let alert = this.alertCtrl.create();
        alert.setTitle('Comentário adicionado ao post');
        alert.addButton('Ok');
        alert.present();
      }else{
        let alert = this.alertCtrl.create();
        alert.setTitle('Comentário não adicionado ao post, tente novamente');
        alert.addButton('Ok');
        alert.present();
      }

    });
  }



  /**
   * mostra o card com o input do comentario
   */
  modalComentar(){
    this.cardComentar= !this.cardComentar;
  }

  modalReagir(idPost) {

    let alert = this.alertCtrl.create();

      alert.setTitle('Reagir com... ');

      alert.addInput({
        type: 'radio',
        label: 'Like',
        value: '1',
        checked: true,
      });

      alert.addInput({
        type: 'radio',
        label: 'Deslike',
        value: '2',
        checked: false,
      });

      alert.addInput({
      type: 'radio',
      label: 'WooW',
      value: '3',
      checked: false,
      });

      alert.addInput({
      type: 'radio',
      label: 'Grr',
      value: '4',
      checked: false,
      });

      alert.addInput({
      type: 'radio',
      label: 'Interesaante',
      value: '5',
      checked: false,
      });

      alert.addButton('Cancelar');

      alert.addButton({
        text: 'É isso',cssClass:'btn btn-success',
        handler: data => {
          this._postService.getReacaoPost(idPost,data).subscribe(retorno => console.log(retorno));
        }
      });
      alert.present();

    }


  ngOnInit(): void {
    this.usuarioSession = JSON.parse(sessionStorage.getItem('logado'));
    this._postService.allPosts().subscribe( retorno => this.todosPosts = retorno.json());
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllPostsPage');
  }

}
