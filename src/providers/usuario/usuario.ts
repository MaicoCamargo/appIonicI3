
import { Injectable } from '@angular/core';
import {UsuarioModel} from "../../model/UsuarioModel";
import {Http} from "@angular/http";

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  /*private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
    this.http = http;
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }*/

  private  readonly URL_BACKEND = "http://localhost:8080/usuario/";
  //private  readonly URL_BACKEND = "http://192.168.2.18:8080/usuario/";
  private http : Http;
  constructor(http: Http) {
    console.log('Hello PostProvider Provider');
    this.http = http;
  }

  logar(crendiciais: UsuarioModel) {
    return this.http.post(this.URL_BACKEND + 'login', crendiciais);
  }

  registrarUsuario(novoUsuario: UsuarioModel) {
    return this.http.post(this.URL_BACKEND+'registrarUsuario',novoUsuario);
  }
}
