import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {PostProvider} from "../../providers/post/postProvider";
import {PostModel} from "../../model/PostModel";
import {UsuarioModel} from "../../model/UsuarioModel";
import {ComentarioModel} from "../../model/ComentarioModel";

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
export class MeusPostPage implements OnInit{

  meuPosts : PostModel;
  usuarioSesssion = new UsuarioModel();
  reacoes : ComentarioModel[];
  verReaceos : Boolean = false;
  idDoPostVisualizado : number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _postService : PostProvider,
              private alertCtrl : AlertController) {}

  /*buscarPostPorIdentificador(identificador){
    this._postService.getPostPorIdentificador(identificador).subscribe(retorno => this.meuPost = retorno.json())
  }*/

  verReacoes(idPost){
    this._postService.buscarComentariosEreacoesDeUmPost(idPost).subscribe(re => this.reacoes = re.json());
    this.idDoPostVisualizado = idPost;
    this.verReaceos = !this.verReaceos;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MeusPostPage');
  }

  ngOnInit(): void {
    this.usuarioSesssion = JSON.parse(sessionStorage.getItem('logado'));
    this._postService.postsUsuarioLogado(this.usuarioSesssion).subscribe(retorno => this.meuPosts = retorno.json());

  }
}
