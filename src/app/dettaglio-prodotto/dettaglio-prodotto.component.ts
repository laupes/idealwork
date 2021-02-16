import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Materiale } from '../interfaces/materiale.interface';
import { ModalComponent } from '../modal/modal.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-dettaglio-prodotto',
  templateUrl: './dettaglio-prodotto.component.html',
  styleUrls: ['./dettaglio-prodotto.component.scss']
})
export class DettaglioProdottoComponent implements OnInit {

  // @ViewChild('modal', {static: false}) modal: ModalComponent;

  constructor(private dialog: MatDialog) { }
  codice_materiale: string;
  descrizione: string;
  img: string;
  testo: string;
  // isShow = false;
  // pdf: string[];


  ngOnInit(): void {
    this.codice_materiale = sessionStorage.getItem('codiceMateriale');
    this.descrizione = sessionStorage.getItem('descrizioneMateriale') !== 'null' ? sessionStorage.getItem('descrizioneMateriale') : ' ';
    this.img = sessionStorage.getItem('imgMateriale');
    this.testo = sessionStorage.getItem('testoMateriale') != null ? sessionStorage.getItem('testoMateriale') : ' ';

    // this.pdf = sessionStorage.getItem('pdfLink').split(' ');
  }
/*
  openModal(): void {
    if (sessionStorage.getItem('pdfArray')){
      this.isShow = true;
      this.modal.open();
    } else {
      return alert('NO PDF');
    }
  }

  closeModal(): void {
    this.modal.close();
  }
*/
  openDialog(): void {
    this.dialog.open(ModComponent);
  }

}

@Component({
  selector: 'app-modal',
  templateUrl: './mod.component.html',
})
export class ModComponent implements OnInit {

  pdfArray: string[];

  ngOnInit(): void {
    this.pdfArray = sessionStorage.getItem('pdfArray') ? sessionStorage.getItem('pdfArray').split(' ') : [];
    this.pdfArray.forEach((f) => {
      if (f == null || f === 'null') {
        this.pdfArray.splice(this.pdfArray.indexOf(f), 1);
      }
    });
    // this.pdfArray.forEach((f) => console.log(f));
  }

}
