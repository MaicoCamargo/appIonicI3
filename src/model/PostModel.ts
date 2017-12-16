import {UsuarioModel} from "./UsuarioModel";

export class PostModel {
  idPost : number;
  usuario : UsuarioModel;
  post_ : string;
  hashtag : string;
  imagem : string;
  longitude : string;
  latitude : string;
  identificador : string;
  idReacao : number;


  constructor(idPost?: number, usuario?: UsuarioModel, post_?: string, hashtag?: string, imagem?: string, longitude?: string, latitude?: string, identificador?: string, idReacao?: number) {
    this.idPost = idPost;
    this.usuario = new UsuarioModel();
    this.post_ = post_;
    this.hashtag = hashtag;
    this.imagem = imagem;
    this.longitude = longitude;
    this.latitude = latitude;
    this.identificador = identificador;
    this.idReacao = idReacao;
  }
}
