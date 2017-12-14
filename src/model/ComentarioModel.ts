import {PostModel} from "./PostModel";

export class ComentarioModel {
  idComentario : number;
  idPost : PostModel;
  comentario : string;
  imagemComentario : string;
  reacao : number;
  rating :  number;

  constructor(idComentario : number, idPost: PostModel, comentario: string,imagemComentario: string, reacao: number, rating: number) {
    this.idComentario  = idComentario ;
    this.idPost = new PostModel();
    this.imagemComentario = imagemComentario;
    this.comentario = comentario;
    this.reacao = reacao;
    this.rating = rating;
  }
}
