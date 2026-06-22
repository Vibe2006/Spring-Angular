import { Acessorio } from './../models/acessorio';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AcessorioService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/acessorio";

  constructor(){
    
  }

  saveAcessorio(Acessorio: Acessorio) : Observable<String[]>{
      return this.http.post<String[]>(this.API + "/save", Acessorio, {responseType: "text" as "json"});
  }

  findAll(): Observable<Acessorio[]>{
      return this.http.get<Acessorio[]>(this.API + "/findAll");
  }

}
