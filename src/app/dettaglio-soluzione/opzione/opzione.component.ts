import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-opzione',
  templateUrl: './opzione.component.html',
  styleUrls: ['./opzione.component.scss']
})
export class OpzioneComponent implements OnInit {

  constructor(private dataService: AuthService, private routes: Router) {

  }

  dettaglioSoluzione: object[];

  ngOnInit(): void {
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => {
      if (response['message'] === undefined) {
        this.dettaglioSoluzione = response;
      } else {
        // alert('Session Expired');
        // this.routes.navigate(['login']);
      }
    } );
  }

  posaCertificato(nome: string): void {
    sessionStorage.setItem('PosaOCertificato', nome);
  }

}
