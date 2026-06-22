import { Usuario } from '../../../auth/usuario';
import { LoginService } from './../../../auth/login.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  LoginService = inject(LoginService);
  usuario!: Usuario;

  constructor(){
    this.usuario = this.LoginService.getUsuarioLogado();
  }


}
