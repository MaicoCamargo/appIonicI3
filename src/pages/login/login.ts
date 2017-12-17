import {Component, OnInit} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, IonicPage, MenuController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {UsuarioModel} from "../../model/UsuarioModel";
import {UsuarioProvider} from "../../providers/usuario/usuario";


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnInit{


  logando = new UsuarioModel();

  constructor(public menu: MenuController,private nav: NavController,
              private alertCtrl: AlertController, private loadingCtrl: LoadingController,
              private _usuarioService : UsuarioProvider ) {
  }

  validarLogin(nickNameForm){
    this._usuarioService.logar(this.logando).subscribe( retorno=> {
      this.logando = retorno.json();
      if (this.logando.nickName == nickNameForm){
        sessionStorage.setItem('logado',JSON.stringify(this.logando));
        this.nav.setRoot(HomePage);
      }else {
        let alert = this.alertCtrl.create();
        alert.setTitle('Login invalido tente novamente ! ');

        alert.addButton({ text: 'Ok'});
        alert.present();
      }
    });
  }


  ionViewDidEnter() {
    this.menu.swipeEnable(false);

    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(false, 'menu1');
  }
  ionViewDidLeave() {
    // don't forget to return the swipe to normal, else all the pages won't be swiping to open menu
    this.menu.swipeEnable(true);
    // If you have more than one side menu, use the id like below
    // this.menu.swipeEnable(true, 'menu1');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ngOnInit(): void {
  }

}
