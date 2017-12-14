import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";

/*
  Generated class for the PostProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostProvider {

  private  readonly URL_BACKEND = "localhost:8080/post";


  public headers: Headers;
  //protected http: Http;
  private http : HttpClient;
  constructor(http: HttpClient) {
    console.log('Hello PostProvider Provider');
    this.http = http;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
  }

  getPostPorHashTag(busca :string){
    return this.http.get(this.URL_BACKEND + 'buscarPor/'+busca);
  }

}
