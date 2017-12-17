import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsuarioModel} from "../../model/UsuarioModel";
import {UsuarioProvider} from "../../providers/usuario/usuario";
import {LoginPage} from "../login/login";

/**
 * Generated class for the RegistrarSerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar-ser',
  templateUrl: 'registrar-ser.html',
})
export class RegistrarSerPage {

  novoUsuario = new UsuarioModel();

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _serviceUsuario : UsuarioProvider, private alertCtrl: AlertController) {}


  pageLogin(){
    this.navCtrl.push(LoginPage);
  }

  /**
   * chama o service que faz o cadastro do usuario
   */
  cadastroDeNovoUsuario(){
    if (this.novoUsuario.confirmarsenha != this.novoUsuario.senha){
      this.novoUsuario.senha = null;
      this.novoUsuario.confirmarsenha= null;
      let alert = this.alertCtrl.create({
        title: 'Ops...!',
        subTitle: 'As senhas informadas não Correspondem, tente novamente',
        buttons: ['OK']
      });
      alert.present();
    }else {
      this._serviceUsuario.registrarUsuario(this.novoUsuario).subscribe(retorno => {
        let alert = this.alertCtrl.create({
          title: 'Ok...!',
          subTitle: 'Cadastro realizado com sucesso, acesse o sistema com seus Dados',
          buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(LoginPage);
      });
    }

    console.log(this.novoUsuario);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarSerPage');
  }

}
