import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { LoginService } from '../../../../auth/login.service';
import { LoginDTO } from '../../../../auth/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  //login: Login = new Login();
  login: LoginDTO = new LoginDTO();

  usuario!: string;
  senha!: string;

  router = inject(Router);
  loginService = inject(LoginService);

  constructor(){
    this.loginService.removerToken();1
  }

  

  logar() {

  this.login.username = this.usuario;
  this.login.password = this.senha;

  this.loginService.logar(this.login).subscribe({
    next: token => {
      if(token){
          //console.log(token);
          this.loginService.addToken(token);
          if(this.loginService.hasPermission("ADMIN")){
            this.router.navigate(["/admin/carros"]);
          }if(this.loginService.hasPermission("USER")){
            this.router.navigate(["/admin/marcas"]);
          }
          
        }else{
          alert("Usuário ou senha incorretos");
        }
    },
    error: erro => {
       alert("Deu erro!!!");
    }
  });

}

}