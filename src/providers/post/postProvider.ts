import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {PostModel} from "../../model/PostModel";
import {Http} from "@angular/http";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  private  readonly URL_BACKEND = "http://localhost:8080/post/";
  private http : Http;
  constructor(http: Http) {
    console.log('Hello PostProvider Provider');
    this.http = http;

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
}
