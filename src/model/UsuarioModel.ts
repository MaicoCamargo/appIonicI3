export class UsuarioModel {
  idUser : number;
  nickName : string;
  email : string;
  celular : string;
  senha : string;
  confirmarsenha : string;

  constructor(idUser?:number, nickName?: string, email?: string, celular?: string, senha?: string,confirmarsenha?: string) {
    this.idUser = idUser;
    this.nickName = nickName;
    this.email = email;
    this.celular = celular;
    this.senha = senha;
    this.confirmarsenha = confirmarsenha;
  }
}
