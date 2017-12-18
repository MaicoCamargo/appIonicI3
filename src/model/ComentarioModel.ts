import {PostModel} from "./PostModel";
import {UsuarioModel} from "./UsuarioModel";
import {ReacaoModel} from "./Reacao";

export class ComentarioModel {
  idComentario : number;
  post : PostModel;
  comentario : string;
  imagemComentario : string;
  reacao : number;
  rating :  number;
  usuario : UsuarioModel;
  reacaoo : ReacaoModel;


  constructor(idComentario?: number, post?: PostModel, comentario?: string, imagemComentario?: string, reacao?: number,
              rating?: number, usuario?: UsuarioModel, reacaoo?: ReacaoModel) {
    this.idComentario = idComentario;
    this.post = new PostModel();
    this.comentario = comentario;
    this.imagemComentario = imagemComentario;
    this.reacao = reacao;
    this.rating = rating;
    this.usuario = new UsuarioModel();
    this.reacaoo = reacaoo;
  }
}
