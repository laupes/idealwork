import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-particolari',
  templateUrl: './categoria-particolari.component.html',
  styleUrls: ['./categoria-particolari.component.scss']
})
export class CategoriaParticolariComponent implements OnInit {

  soluzione: string;

  constructor() { }

  ngOnInit(): void {
    this.soluzione = sessionStorage.getItem('soluzione');
  }

}
