import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit  {

  @ViewChild('myModal', {static: false}) modal: ElementRef;

  pdfArray: string[];
  // length: number;

  ngOnInit(): void {
    this.pdfArray = sessionStorage.getItem('pdfArray') ? sessionStorage.getItem('pdfArray').split(' ') : [];
    this.pdfArray.forEach((f) => {
      if (f == null || f === 'null') {
        this.pdfArray.splice(this.pdfArray.indexOf(f), 1);
      }
    });
    // this.length = sessionStorage.getItem('pdfArray') ? sessionStorage.getItem('pdfArray').split(' ').length : 0;
  }

  open(): void {
    this.modal.nativeElement.style.display = 'block';
  }

  close(): void {
    this.modal.nativeElement.style.display = 'none';
  }
}
