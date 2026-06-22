import { Marca } from './../models/marca';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class MarcaService {

  http = inject(HttpClient);

  API = "http://localhost:8080/api/marca";

  constructor(){

  }

  // save(carro: Carro): Observable<String[]>{
  //     return this.http.post<String[]>(this.API + "/save",  carro, {responseType: "text" as "json"});
  //   }

  saveMarca(Marca: Marca) : Observable<String[]>{
    return this.http.post<String[]>(this.API + "/saveMarca", Marca, {responseType: "text" as "json"});
  }



  

  findAll(): Observable<Marca[]>{
    return this.http.get<Marca[]>(this.API + "/findAllMarca");
  }

 

  updateMarca(marca: Marca, id:number):  Observable<String[]>{
    return this.http.put<String[]>(this.API + "/update/" + id, marca, {responseType: "text" as "json"})
  }

  delete(id: number): Observable<String[]>{
    return this.http.delete<String[]>(this.API + "/delete/" + id, {responseType: "text" as "json"})
  }
}