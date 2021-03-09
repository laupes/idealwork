import { MenuComponent } from './../../menu/menu.component';
import { DataService } from './../../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/auth.service';
import { Soluzione } from 'src/app/interfaces/soluzione.interface';


@Component({
  selector: 'app-soluzione',
  templateUrl: './soluzione.component.html',
  styleUrls: ['./soluzione.component.scss']
})
export class SoluzioneComponent implements OnInit {

  constructor(private dataService: AuthService, private router: Router, private data: DataService) { }
  private static titolo: string;
  private static descrizione: string;

  soluzioni: Soluzione[];

  ngOnInit(): void {
    /* this.dataService.getSoluzioni().subscribe((response: Soluzione[]) => this.soluzioni = response['soluzioni'].sort(function (a, b) {
      return a.sequenza - b.sequenza;
    })); */
    this.dataService.getSoluzioni().subscribe((response: any) => {
      if (response['message'] !== 'not_autorized') {
        this.soluzioni = response['soluzioni'].sort(function(a,b) { return a.sequenza - b.sequenza; });
      } else {
        alert('Session Expired');
        this.router.navigate(['login']);
      }
    });
    this.dataService.getSoluzioni().subscribe((response: string[]) => SoluzioneComponent.titolo = response['intro']['titolo']);
    this.dataService.getSoluzioni().subscribe((response: string[]) => SoluzioneComponent.descrizione = response['intro']['descrizione']);
    // // console.log(localStorage.getItem('lingua'));
    // this.dataService.getSoluzioni().subscribe((intro: Intro[]) => this.titolo = intro[0].titolo);
    $('.navigation').show();
    // sessionStorage.setItem('lingua', sessionStorage.getItem('lingua'));
  }


  get staticTitolo(): string {
    return SoluzioneComponent.titolo;
  }

  get staticDescrizione(): string {
    return SoluzioneComponent.descrizione;
  }

  selezioneSoluzione(soluzione: string, soluzioneT: string): void {
    sessionStorage.setItem('soluzione', soluzione);
    sessionStorage.setItem('soluzioneT', soluzioneT);
  }

}
