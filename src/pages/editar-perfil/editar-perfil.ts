import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {UsuarioModel} from "../../model/UsuarioModel";
import {HomePage} from "../home/home";
import {LoginPage} from "../login/login";

/**
 * Generated class for the EditarPerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage implements OnInit{


  usuarioSession = new UsuarioModel();
  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  deletarConta(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Usuário Excluído do App');
    alert.addButton('Ok');
    alert.present();
    this.navCtrl.push(LoginPage);
  }

  editarDados(){
    let alert = this.alertCtrl.create();
    alert.setTitle('Alterações salvas,logue no App com seus novos dados');
    alert.addButton('Ok');
    alert.present();
    this.navCtrl.push(LoginPage);
  }

  cancelarEdicao(){
    this.navCtrl.push(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditarPerfilPage');
  }

  ngOnInit(): void {
    this.usuarioSession = JSON.parse(sessionStorage.getItem('logado'));
  }

}
