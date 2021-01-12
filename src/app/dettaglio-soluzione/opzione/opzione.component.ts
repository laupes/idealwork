import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-opzione',
  templateUrl: './opzione.component.html',
  styleUrls: ['./opzione.component.scss']
})
export class OpzioneComponent implements OnInit {

  constructor(private dataService: AuthService) {

  }

  dettaglioSoluzione: object[];

  ngOnInit(): void {
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => this.dettaglioSoluzione = response);
  }

}
