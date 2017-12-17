import { Injectable } from '@angular/core';

import {PostModel} from "../../model/PostModel";
import {Http} from "@angular/http";
import {UsuarioModel} from "../../model/UsuarioModel";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  private  readonly URL_BACKEND = "http://localhost:8080/post/";
  //private  readonly URL_BACKEND = "http://192.168.2.18:8080/post/";
  private http : Http;
  constructor(http: Http) {
    console.log('Hello PostProvider Provider');
    this.http = http;

  }

  buscarComentariosEreacoesDeUmPost(idPost : number){
    return this.http.get(this.URL_BACKEND +'comentariosEreacoes/'+idPost);
  }

  /**
   * pega o comentario em um post para fazer o insert no banco
   * @param idPost
   * @param {any | undefined} data
   */
  getComentario(idPost: number, comentario: string) {
    let usuarioLogado = new UsuarioModel();
    usuarioLogado =  JSON.parse(sessionStorage.getItem('logado'));
    console.log(comentario);
    return this.http.post(this.URL_BACKEND + 'comentario',
      {post: {idPost: idPost},usuario:{idUser: usuarioLogado.idUser }});
  }


  /**
   * recebe o id do post e o id da reacao que o post recebeu (vou ter que pegar o id do usuario tbm)
   * @param {number} idPost
   * @param {number} idReacao
   */
  getReacaoPost(idPost : number, idReacao: number){
    let usuarioLogado = new UsuarioModel();
     usuarioLogado =  JSON.parse(sessionStorage.getItem('logado'));
    return this.http.post(this.URL_BACKEND+ 'salvaReacao',{idPost : idPost, idReacao: idReacao, usuario: {idUser : usuarioLogado.idUser}});
  }

  getPostPorHashTag(busca :string) {
   return this.http.get(this.URL_BACKEND + 'buscarPor/'+busca);
  }


  realizarNovoPost(novoPost: PostModel) {
    return this.http.post(this.URL_BACKEND +'novoPost',novoPost);
  }

  getPostPorIdentificador(identificador: string) {
    return  this.http.get(this.URL_BACKEND + 'identificadorDoPost/'+ identificador);
  }

  /**
   * buscara todos os posts
   */
  allPosts() {
    return this.http.get(this.URL_BACKEND + 'allPosts');
  }


  postsUsuarioLogado(usuarioSesssion: UsuarioModel) {
    return this.http.post(this.URL_BACKEND + 'postsUsuario/', usuarioSesssion);
  }
}
