import { Acessorio } from './../../../models/acessorio';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, inject, Input, Output, TemplateRef, ViewChild  } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormsModule } from '@angular/forms';
import { Carro } from '../../../models/carro';
import Swal from 'sweetalert2'


import { CarroService } from '../../../services/carro';
import { Marca } from '../../../models/marca';
import { MdbModalService, MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Marcaslist } from '../../marcas/marcaslist/marcaslist';
import { Acessorioslist } from '../../acessorios/acessorioslist/acessorioslist';

import { ChangeDetectorRef } from '@angular/core';



@Component({
  selector: 'app-carrosdetails',
  imports: [MdbFormsModule, FormsModule, Marcaslist, Acessorioslist],
  templateUrl: './carrosdetails.html',
  styleUrl: './carrosdetails.scss',
})
export class Carrosdetails {


  // ELEMENTOS DO MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalMarca") modalMarca!: TemplateRef<any>;
  @ViewChild("modalAcessorios") modalAcessorios!: TemplateRef<any>;
  modalRef!: MdbModalRef<any>;


  @Input("carro") carro: Carro = new Carro("");
  // @Input("carro") carro: Carro = new Carro("", new Marca("", ""));
  @Output("retorno") retorno = new EventEmitter<any>();

  router = inject(ActivatedRoute);
  router2 = inject(Router);

  carrosService = inject(CarroService);


  //Ele força a página a atulizar com os novos componentes
  cd = inject(ChangeDetectorRef);


  constructor(){
    let id = this.router.snapshot.params["id"];
    if(id > 0){
      this.findById(id);
    }
  }

  findById(id:number){
     
    this.carrosService.findById(id).subscribe({
      next: retorno => {
        this.carro = retorno;
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


  save(){
    if(this.carro.id && this.carro.id > 0){

      this.carrosService.update(this.carro, this.carro.id!).subscribe({
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
                this.router2.navigate(["admin/carros"], { state: {carroEditado: this.carro} });
                this.retorno.emit(this.carro);


      }
    });

    }else{

      this.carrosService.save(this.carro,).subscribe({
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
                this.router2.navigate(["admin/carros" ], { state: {carroNovo: this.carro} });
                    this.retorno.emit(this.carro);


      }
    });


    }



  }

  buscarMarca(){
    this.modalRef = this.modalService.open(this.modalMarca, {modalClass: "modal-lg"});
  }

  buscarAcessorio(){
    this.modalRef = this.modalService.open(this.modalAcessorios, {modalClass: "modal-lg"});
  }

  retornoMarca(marca: Marca){
    this.carro.marca = marca;
    this.modalRef.close();
  }

  retornoAcessorio(acessorio: Acessorio){

  if(this.carro.acessorios == null){
    this.carro.acessorios = [];
  }

  this.carro.acessorios.push(acessorio);

  this.cd.detectChanges();

  this.modalRef.close();
}

  desvincularAcessorioCarro(acessorio: Acessorio){
    //código para achar a posição do objeto que eu quero
   let posicao = this.carro.acessorios?.findIndex(
  x => x.id == acessorio.id
);

if (posicao != undefined && posicao >= 0) {
  this.carro.acessorios?.splice(posicao, 1);
}
  }

}
