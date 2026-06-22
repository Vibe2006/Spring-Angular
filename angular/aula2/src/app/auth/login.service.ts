import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";
import { LoginDTO } from './login';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  API = "http://localhost:8080/api/login";


  constructor() { }


  logar(login: LoginDTO): Observable<string> {
    return this.http.post<string>(this.API, login, {responseType: 'text' as 'json'});
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasRole(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }
  
  getUsuarioLogado() {
    return this.jwtDecode() as Usuario;
  }

  hasPermission(role: string): boolean {

  const token = localStorage.getItem('token');

  if (!token) {
    return false;
  }

  const payload: any = jwtDecode(token);

  return payload.role === role;
}

  // getUsuarioLogado(){
  //   return this.jwtDecode() as Usuario;
  // }


}
