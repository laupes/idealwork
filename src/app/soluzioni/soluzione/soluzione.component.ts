import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/core/auth.service';
import { Soluzione } from 'src/app/interfaces/soluzione.interface';


@Component({
  selector: 'app-soluzione',
  templateUrl: './soluzione.component.html',
  styleUrls: ['./soluzione.component.scss']
})
export class SoluzioneComponent implements OnInit {

  constructor(private dataService: AuthService) { }
  private static titolo: string;
  private static descrizione: string;

  soluzioni: Soluzione[];

  ngOnInit(): void {
    this.dataService.getSoluzioni().subscribe((response: Soluzione[]) => this.soluzioni = response['soluzioni']);
    this.dataService.getSoluzioni().subscribe((response: string[]) => SoluzioneComponent.titolo = response['intro']['titolo']);
    this.dataService.getSoluzioni().subscribe((response: string[]) => SoluzioneComponent.descrizione = response['intro']['descrizione']);
    // console.log(localStorage.getItem('lingua'));
    // this.dataService.getSoluzioni().subscribe((intro: Intro[]) => this.titolo = intro[0].titolo);

    $('.navigation').show();
  }


  get staticTitolo(): string {
    return SoluzioneComponent.titolo;
  }

  get staticDescrizione(): string {
    return SoluzioneComponent.descrizione;
  }

}
