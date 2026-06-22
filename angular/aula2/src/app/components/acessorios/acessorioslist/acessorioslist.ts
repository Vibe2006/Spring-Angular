import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ChangeDetectorRef, Component, inject, Input, TemplateRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Acessorio } from '../../../models/acessorio';
import { AcessorioService } from '../../../services/acessorio';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Acessoriosdetails } from '../acessoriosdetails/acessoriosdetails';

@Component({
  selector: 'app-acessorioslist',
  standalone: true,
  imports: [
    CommonModule,
    MdbModalModule,
    Acessoriosdetails
  ],
  templateUrl: './acessorioslist.html',
  styleUrl: './acessorioslist.scss',
})

export class Acessorioslist {

  lista: Acessorio[] = [];

  acessoriosService = inject(AcessorioService);



  cd = inject(ChangeDetectorRef);

  @Input("esconderBotoes") esconderBotoes: boolean = false;
  @Output("retorno") retorno = new EventEmitter<Acessorio>();

  

   // ELEMENTOS DO MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalAcessorioDetalhe")
  modalAcessorioDetalhe!: TemplateRef<any>;

  modalRef!: MdbModalRef<any>;



  acessorioEdit: Acessorio = new Acessorio("");

  constructor(){
    this.findAll();
  }


 

  findAll(){

    this.acessoriosService.findAll().subscribe({

      next: lista => {

        this.lista = lista;

        this.cd.detectChanges();
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

  new(){
// this.carroEdit = new Carro("");

//     this.modalRef = this.modalService.open(this.modalCarroDetalhe);

    this.acessorioEdit = new Acessorio("");

    this.modalRef = this.modalService.open(this.modalAcessorioDetalhe);


  }

  deleteById(acessorio: Acessorio){

  }

  edit(acessorio: Acessorio){
    this.acessorioEdit = Object.assign({}, acessorio);
    this.modalRef = this.modalService.open(this.modalAcessorioDetalhe);
  }

  retornoAcessorio(acessorio: Acessorio){

  this.findAll();

  this.modalRef.close();

}

 select(acessorio: Acessorio){
      this.retorno.emit(acessorio);
    }

}