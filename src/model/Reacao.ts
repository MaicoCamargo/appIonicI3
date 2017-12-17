export class ReacaoModel {
  reacao : string;
  idReacao :  number;

  constructor(reacao?: string, idReacao?: number) {
    this.reacao = reacao;
    this.idReacao = idReacao;
  }
}
