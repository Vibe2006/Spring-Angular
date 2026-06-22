import { Marca } from '../../../models/marca';
import { MarcaService } from '../../../services/marca';
import { Component, inject, ChangeDetectorRef, ViewChild, TemplateRef, Output, EventEmitter, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Marcasdetails } from '../marcasdetails/marcasdetails';





import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService
} from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-marcaslist',
  standalone: true,
  imports: [CommonModule, MdbModalModule, Marcasdetails, ],
  templateUrl: './marcaslist.html',
  styleUrl: './marcaslist.scss',
})
export class Marcaslist {

  constructor(){
    this.findAllMarca();
  }

  @ViewChild("modalMarcaDetalhe")
  modalMarcaDetalhe!: TemplateRef<any>;

  lista: Marca[] = [];

  marcasService = inject(MarcaService);
  modalService = inject(MdbModalService);

  @Input("esconderBotoes") esconderBotoes: boolean = false;
  @Output("retorno") retorno = new EventEmitter<any>();




  cd = inject(ChangeDetectorRef);

  modalRef!: MdbModalRef<any>;

  //carroEdit: Carro = new Carro("");
  marcaEdit: Marca = new Marca("","");

  findAllMarca(){
    this.marcasService.findAll().subscribe({
      next: lista => {

        this.lista = lista;

        this.cd.detectChanges();
      },

      error: erro => {

        console.log(erro);

        Swal.fire({
          title: "Ocorreu algum erro",
          text: erro.message,
          icon: 'error',
          confirmButtonText: 'Ok'
        });

      }
    })
  }

  new (){

    this.marcaEdit = new Marca("","");

    this.modalRef = this.modalService.open(this.modalMarcaDetalhe);

  }

  edit(marca: Marca){
   

    this.marcaEdit = Object.assign({}, marca);

    this.modalRef = this.modalService.open(this.modalMarcaDetalhe);
  }

  deleteById(marca: Marca){

  Swal.fire({
    title: 'Tem certeza que deseja deletar este registro?',
    icon: 'warning',
    showConfirmButton: true,
    showDenyButton: true,

    confirmButtonText: 'Sim',
    denyButtonText: 'Não'

  }).then((result) => {

    if(result.isConfirmed){

      this.marcasService.delete(marca.id!).subscribe({

        next: mensagem => {

          Swal.fire({
            title: mensagem,
            icon: 'success',
            confirmButtonText: 'Ok'
          });

          this.findAllMarca();

        },

        error: erro => {

          Swal.fire({
            title: "Ocorreu algum erro",
            icon: 'error',
            confirmButtonText: 'Ok'
          });

        }

      });

    }

  });

}

  retornoDetalhe(marca: Marca) {
  
      this.findAllMarca();
  
      this.modalRef.close();
    }

    select(marca: Marca){
      this.retorno.emit(marca);
    }
}