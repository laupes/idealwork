import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';
import { Materiale } from 'src/app/interfaces/materiale.interface';

@Component({
  selector: 'app-titolo-prodotto',
  templateUrl: './titolo-prodotto.component.html',
  styleUrls: ['./titolo-prodotto.component.scss']
})
export class TitoloProdottoComponent implements OnInit {

  constructor(private dataService: AuthService) { }
  materiali: Materiale[];
  titolo: string;

  ngOnInit(): void {
    this.dataService.getSoluzioneSottoCartelle().subscribe((response: Materiale[]) => this.materiali = response);
    this.titolo = sessionStorage.getItem('prodotto');
  }

}
