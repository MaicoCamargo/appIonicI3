import {PostModel} from "./PostModel";
import {UsuarioModel} from "./UsuarioModel";

export class ComentarioModel {
  idComentario : number;
  post : PostModel;
  comentario : string;
  imagemComentario : string;
  reacao : number;
  rating :  number;
  usuario : UsuarioModel;
  constructor(idComentario : number, post: PostModel, comentario: string,imagemComentario: string, reacao: number,
                rating: number, usuario : UsuarioModel) {
    this.idComentario  = idComentario ;
    this.post = new PostModel();
    this.imagemComentario = imagemComentario;
    this.comentario = comentario;
    this.reacao = reacao;
    this.rating = rating;
    this.usuario = new UsuarioModel();
  }
}
