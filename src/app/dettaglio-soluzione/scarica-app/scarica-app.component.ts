import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scarica-app',
  templateUrl: './scarica-app.component.html',
  styleUrls: ['./scarica-app.component.scss']
})
export class ScaricaAppComponent implements OnInit {

  titolo: string;
  descrizione: string;

  constructor() { }

  ngOnInit(): void {
    this.titolo = localStorage.getItem('titoloApp');
    this.descrizione = localStorage.getItem('descrizioneApp');
  }

}
