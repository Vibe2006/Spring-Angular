import { Router } from '@angular/router';
import { MarcaService } from './../../../services/marca';
import { Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { Marca } from '../../../models/marca';
import Swal from 'sweetalert2'
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-marcasdetails',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './marcasdetails.html',
  styleUrl: './marcasdetails.scss',
})
export class Marcasdetails {
  //@Input("carro") carro: Carro = new Carro("");

  @Input("marca") marca: Marca = new Marca ("","");
  @Output("retorno") retorno = new EventEmitter<any>();

  marcasService = inject(MarcaService);

  router2 = inject(Router);

  saveMarca(){
    if(this.marca.id && this.marca.id > 0){
      this.marcasService.updateMarca(this.marca, this.marca.id!).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          
          // Fecha o modal e atualiza a lista de marcas após salvar no banco
          this.retorno.emit(this.marca);
        },
        error: erro => {
          Swal.fire({
            title: "Ocorreu algum erro ao atualizar",
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    } else {
      this.marcasService.saveMarca(this.marca).subscribe({
        next: mensagem => {
          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          
          // Fecha o modal e atualiza a lista de marcas após salvar no banco
          this.retorno.emit(this.marca);
        },
        error: erro => {
          Swal.fire({
            title: "Ocorreu algum erro ao salvar",
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
    }
  }


    

}
