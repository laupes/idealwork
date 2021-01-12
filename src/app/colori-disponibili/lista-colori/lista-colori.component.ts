import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';
import { Colore } from 'src/app/interfaces/colore.interface';

@Component({
  selector: 'app-lista-colori',
  templateUrl: './lista-colori.component.html',
  styleUrls: ['./lista-colori.component.scss']
})
export class ListaColoriComponent implements OnInit {

  constructor(private dataService: AuthService) { }

  colori: Colore[];

  ngOnInit(): void {
    this.dataService.getSoluzioneColore().subscribe((response: Colore[]) => this.colori = response);
  }

}
