
import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Acessorio } from '../../../models/acessorio';
import { AcessorioService } from '../../../services/acessorio';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acessoriosdetails',
  imports: [FormsModule],
  templateUrl: './acessoriosdetails.html',
  styleUrl: './acessoriosdetails.scss',
})
export class Acessoriosdetails {

  @Input() acessorio: Acessorio = new Acessorio("");

  @Output() retorno = new EventEmitter<Acessorio>();

  acessorioService = inject(AcessorioService);

  router2 = inject(Router);

  save(){
    if(this.acessorio.id && this.acessorio.id >0){
      alert("Sem update pelo momento");
    }else{
      this.acessorioService.saveAcessorio(this.acessorio,).subscribe({
        next: mensagem => {
                  Swal.fire({
                                    title: mensagem,
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                  });
                },
       error: erro => {
                  Swal.fire({
                                  title: "Ocorreu algum erro",
                                  icon: 'error',
                                  confirmButtonText: 'Ok'
                                });
                                this.router2.navigate(["admin/acessorios"], { state: {acessorioNovo: this.acessorio}});
                                this.retorno.emit(this.acessorio);
              }          
      });
    }
    this.retorno.emit(this.acessorio);
  }




}