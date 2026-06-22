import { Component, inject, ViewChild, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

import { ChangeDetectorRef } from '@angular/core';

import Swal from 'sweetalert2';

import {
  MdbModalModule,
  MdbModalRef,
  MdbModalService
} from 'mdb-angular-ui-kit/modal';

import { Carro } from '../../../models/carro';
import { Carrosdetails } from '../carrosdetails/carrosdetails';
import { CarroService } from '../../../services/carro';

@Component({
  selector: 'app-carroslist',
  standalone: true,
  imports: [
CommonModule,
  NgFor,
  RouterLink,
  MdbModalModule,
  Carrosdetails
  ],
  templateUrl: './carroslist.html',
  styleUrl: './carroslist.scss',
})
export class Carroslist implements OnInit {

  // ELEMENTOS DO MODAL
  modalService = inject(MdbModalService);
  @ViewChild("modalCarroDetalhe")
  modalCarroDetalhe!: TemplateRef<any>;

modalRef!: MdbModalRef<any>;

  

  carrosService = inject(CarroService);

  cd = inject(ChangeDetectorRef);

  lista: Carro[] = [];

  carroEdit: Carro = new Carro("");

  constructor() {

    let carroNovo = history.state.carroNovo;
    let carroEditado = history.state.carroEditado;

    if (carroEditado) {

      let indice = this.lista.findIndex(x => {
        return x.id == carroEditado.id
      });

      this.lista[indice] = carroEditado;
    }

    if (carroNovo) {

      carroNovo.id = 555;

      this.lista.push(carroNovo);
    }
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){

  this.carrosService.findAll().subscribe({

    next: lista => {



      // this.lista = [...lista];
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

  deleteById(carro: Carro) {


    

    Swal.fire({
      title: 'Tem certeza que deseja deletar este registro?',
      icon: 'warning',
      showConfirmButton: true,
      showDenyButton: true,

      confirmButtonText: 'Sim',
      denyButtonText: 'Não'

    }).then((result) => {

      if (result.isConfirmed) {

        this.carrosService.delete(carro.id!).subscribe({

    next: mensagem => {



      Swal.fire({
          title: mensagem,
          icon: 'success',
          confirmButtonText: 'Ok'
        });

        this.findAll();


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

  new() {

    this.carroEdit = new Carro("");

    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  edit(carro: Carro) {

    this.carroEdit = Object.assign({}, carro);

    this.modalRef = this.modalService.open(this.modalCarroDetalhe);
  }

  retornoDetalhe(carro: Carro) {

    this.findAll();

    this.modalRef.close();
  }
}