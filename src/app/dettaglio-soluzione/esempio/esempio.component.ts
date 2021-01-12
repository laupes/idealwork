import { AuthService } from 'src/app/core/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-esempio',
  templateUrl: './esempio.component.html',
  styleUrls: ['./esempio.component.scss']
})
export class EsempioComponent implements OnInit {

  constructor(private dataService: AuthService) {

  }

  dettaglioSoluzione: object[];

  ngOnInit(): void {
    this.dataService.getSoluzioniDettaglio(sessionStorage.getItem('soluzione'))
    .subscribe((response: object[]) => this.dettaglioSoluzione = response);
  }
}
